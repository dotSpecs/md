import type { PropertiesHyphen } from 'csstype'
import type { RendererObject, Tokens } from 'marked'
import type { ReadTimeResults } from 'reading-time'
import { cloneDeep, toMerged } from 'es-toolkit'
import frontMatter from 'front-matter'
import hljs from 'highlight.js'
import { marked } from 'marked'

import mermaid from 'mermaid'
import readingTime from 'reading-time'
import type { ExtendedProperties, IOpts, ThemeStyles } from '@/types'
import type { RendererAPI } from '@/types/renderer-types'

import { getStyleString } from '.'
import markedAlert from './MDAlert'
import markedFootnotes from './MDFootnotes'
import { MDKatex } from './MDKatex'
import markedSlider from './MDSlider'

marked.setOptions({
  breaks: true,
})
marked.use(markedSlider())

function buildTheme({ theme: _theme, fonts, size, isUseIndent }: IOpts): ThemeStyles {
  const theme = cloneDeep(_theme)
  const base = toMerged(theme.base, {
    'font-family': fonts,
    'font-size': size,
  })

  if (isUseIndent) {
    theme.block.p = {
      'text-indent': `2em`,
      ...theme.block.p,
    }
  }

  const mergeStyles = (styles: Record<string, PropertiesHyphen>): Record<string, ExtendedProperties> =>
    Object.fromEntries(
      Object.entries(styles).map(([ele, style]) => [ele, toMerged(base, style)]),
    )
  return {
    ...mergeStyles(theme.inline),
    ...mergeStyles(theme.block),
  } as ThemeStyles
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, `&amp;`) // 转义 &
    .replace(/</g, `&lt;`) // 转义 <
    .replace(/>/g, `&gt;`) // 转义 >
    .replace(/"/g, `&quot;`) // 转义 "
    .replace(/'/g, `&#39;`) // 转义 '
    .replace(/`/g, `&#96;`) // 转义 `
}

function buildAddition(): string {
  return `
    <style>
      .preview-wrapper pre::before {
        position: absolute;
        top: 0;
        right: 0;
        color: #ccc;
        text-align: center;
        font-size: 0.8em;
        padding: 5px 10px 0;
        line-height: 15px;
        height: 15px;
        font-weight: 600;
      }
    </style>
  `
}

function getStyles(styleMapping: ThemeStyles, tokenName: string, addition: string = ``): string {
  const dict = styleMapping[tokenName as keyof ThemeStyles]
  if (!dict) {
    return ``
  }
  const styles = getStyleString(dict)
  return `style="${styles};${addition}"`
}

function getStyleValue(styleMapping: ThemeStyles, tokenName: string, property: string): string {
  // console.log(styleMapping, tokenName, property)
  const dict = styleMapping[tokenName as keyof ThemeStyles]
  if (!dict) {
    // console.log(`no dict`)
    return ``
  }
  return (dict[property as keyof typeof dict] as string) || ``
}

function buildFootnoteArray(footnotes: [number, string, string][]): string {
  return footnotes
    .map(([index, title, link]) =>
      link === title
        ? `<code style="font-size: 90%; opacity: 0.6;">[${index}]</code>: <i style="word-break: break-all; font-weight: bold;">${title}</i><br/>`
        : `<code style="font-size: 90%; opacity: 0.6;">[${index}]</code> <span style="font-weight: bold;">${title}</span>: <i style="word-break: break-all;">${link}</i><br/>`,
    )
    .join(`\n`)
}

function transform(legend: string, text: string | null, title: string | null): string {
  const options = legend.split(`-`)
  for (const option of options) {
    if (option === `alt` && text) {
      return text
    }
    if (option === `title` && title) {
      return title
    }
  }
  return ``
}

const macCodeSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="45px" height="13px" viewBox="0 0 450 130">
    <ellipse cx="50" cy="65" rx="50" ry="52" stroke="rgb(220,60,54)" stroke-width="2" fill="rgb(237,108,96)" />
    <ellipse cx="225" cy="65" rx="50" ry="52" stroke="rgb(218,151,33)" stroke-width="2" fill="rgb(247,193,81)" />
    <ellipse cx="400" cy="65" rx="50" ry="52" stroke="rgb(27,161,37)" stroke-width="2" fill="rgb(100,200,86)" />
  </svg>
`.trim()

// const popTopArea = `<section style="display: flex;justify-content:space-between;align-items:flex-start;margin:-30px 0px 0px 0px">
// <section style="width: 50px; height: 50px; background-image: url('https://cdn.meirishici.com/md/static/images/bg/pink-star.png');background-size: 80px 80px;background-repeat: no-repeat;background-position: -20px -15px;margin-left:-30px;"></section>
// <section style="width: 50px; height: 50px; background-image: url('https://cdn.meirishici.com/md/static/images/bg/pop.png');background-size: 80px 80px;background-repeat: no-repeat;;background-position: -5px -15px;margin-right:-30px;"></section>
// </section>`.trim()

// const popBottomArea = `<section style="display: flex;justify-content:space-between;align-items:flex-start;margin:10px 0px -30px 0px">
// <section style="width: 50px; height: 50px; background-image: url('https://cdn.meirishici.com/md/static/images/bg/blue-star.png');background-size: 80px 80px;background-repeat: no-repeat;background-position: -25px 0px;margin-left:-30px;"></section>
// <section style="width: 50px; height: 50px; background-image: url('https://cdn.meirishici.com/md/static/images/bg/pink-star.png');background-size: 80px 80px;background-repeat: no-repeat;;background-position: -5px 0px;margin-right:-30px;"></section>
// </section>`.trim()

interface ParseResult {
  yamlData: Record<string, any>
  markdownContent: string
  readingTime: ReadTimeResults
}

function parseFrontMatterAndContent(markdownText: string): ParseResult {
  try {
    const parsed = frontMatter(markdownText)
    const yamlData = parsed.attributes
    const markdownContent = parsed.body

    const readingTimeResult = readingTime(markdownContent)

    return {
      yamlData: yamlData as Record<string, any>,
      markdownContent,
      readingTime: readingTimeResult,
    }
  }
  catch (error) {
    console.error(`Error parsing front-matter:`, error)
    return {
      yamlData: {},
      markdownContent: markdownText,
      readingTime: readingTime(markdownText),
    }
  }
}

function removeContentFromStyle(styleString: string): string {
  return styleString
  return styleString
    .replace(/content\s*:\s*['"]*[^;'"]*['"]*;?\s*/, ``)
    .replace(/;\s*;/g, `;`)
    .replace(/;\s*$/, `"`)
}

export function initRenderer(opts: IOpts): RendererAPI {
  const footnotes: [number, string, string][] = []
  let footnoteIndex: number = 0
  let styleMapping: ThemeStyles = buildTheme(opts)
  let codeIndex: number = 0
  const listOrderedStack: boolean[] = []
  const listCounters: number[] = []

  function getOpts(): IOpts {
    return opts
  }

  function generateCSSFromTheme(): string {
    const cssRules: string[] = []

    // 处理普通元素样式
    for (const [element, styles] of Object.entries(opts.theme.elements)) {
      if (Object.keys(styles).length > 0) {
        const styleDeclarations = Object.entries(styles)
          .map(([property, value]) => `  ${property}: ${value};`)
          .join(`\n`)

        cssRules.push(`${element} {\n${styleDeclarations}\n}`)
      }
    }

    // 处理 elementPseudos
    for (const [element, pseudos] of Object.entries(opts.theme.elementPseudos)) {
      for (const [pseudo, styles] of Object.entries(pseudos)) {
        const selector = `${element}::${pseudo}`
        const styleDeclarations = Object.entries(styles)
          .map(([property, value]) => property === `content` ? `  content: "${value}";` : `  ${property}: ${value};`)
          .join(`\n`)

        cssRules.push(`${selector} {\n${styleDeclarations}\n}`)
      }
    }

    // 处理复杂选择器
    for (const [selector, styles] of Object.entries(opts.theme.complexSelectors)) {
      const styleDeclarations = Object.entries(styles)
        .map(([property, value]) => `  ${property}: ${value};`)
        .join(`\n`)

      cssRules.push(`${selector} {\n${styleDeclarations}\n}`)
    }

    return cssRules.join(`\n\n`)
  }

  function styles(tag: string, addition: string = ``): string {
    return getStyles(styleMapping, tag, addition)
  }

  function styledContent(styleLabel: string, content: string, tagName?: string, addition: string = ``): string {
    const tag = tagName ?? styleLabel
    const labelStyle = styles(styleLabel, addition)

    return `<${tag} data-website="https://md.vvvtools.com" data-tool="三维md微信编辑器" ${/^h\d$/.test(tag) ? `data-heading="true"` : ``} ${labelStyle}>${content}</${tag}>`
  }

  function addFootnote(title: string, link: string): number {
    footnotes.push([++footnoteIndex, title, link])
    return footnoteIndex
  }

  function reset(newOpts: Partial<IOpts>): void {
    footnotes.length = 0
    footnoteIndex = 0
    setOptions(newOpts)
  }

  function setOptions(newOpts: Partial<IOpts>): void {
    opts = { ...opts, ...newOpts }
    const oldStyle = JSON.stringify(styleMapping)
    styleMapping = buildTheme(opts)
    const newStyle = JSON.stringify(styleMapping)
    if (oldStyle !== newStyle) {
      marked.use(markedAlert({ styles: styleMapping }))
      marked.use(
        MDKatex({ nonStandard: true }, styles(`inline_katex`, `;vertical-align: middle; line-height: 1;`), styles(`block_katex`, `;text-align: center;`),
        ),
      )
    }
  }

  function buildReadingTime(readingTime: ReadTimeResults): string {
    if (!opts.countStatus) {
      return ``
    }
    if (!readingTime.words) {
      return ``
    }
    return `
      <blockquote ${styles(`blockquote`)}>
        <p ${styles(`blockquote_p`)}>字数 ${readingTime?.words}，阅读大约需 ${Math.ceil(readingTime?.minutes)} 分钟</p>
      </blockquote>
    `
  }

  const buildFootnotes = () => {
    if (!footnotes.length) {
      return ``
    }

    return (
      `<section ${styles(`blockquote`)}>${styledContent(`h4 .content`, `引用链接`, `h4`)
      }${styledContent(`footnotes`, buildFootnoteArray(footnotes), `p`)
      }</section>`
    )
  }

  const renderer: RendererObject = {
    heading({ tokens, depth }: Tokens.Heading) {
      const text = this.parser.parseInline(tokens)
      const tag = `h${depth}`

      // 获取各个部分的样式
      const contentStyles = styles(`${tag} .content`)

      const prefixStyles = removeContentFromStyle(styles(`${tag} .prefix`))
      const suffixStyles = removeContentFromStyle(styles(`${tag} .suffix`))

      // 获取 content 属性值
      const prefixContent = getStyleValue(styleMapping, `${tag} .prefix`, `content`) || ``
      const suffixContent = getStyleValue(styleMapping, `${tag} .suffix`, `content`) || ``

      const content = `${prefixStyles ? `<section ${prefixStyles}>${prefixContent}</section>` : ``}<section ${contentStyles}>${text}</section>${suffixStyles ? `<section ${suffixStyles}>${suffixContent}</section>` : ``}`

      return styledContent(tag, content)
    },

    paragraph({ tokens }: Tokens.Paragraph): string {
      const text = this.parser.parseInline(tokens)
      const isFigureImage = text.includes(`<figure`) && text.includes(`<img`)
      const isEmpty = text.trim() === ``
      if (isFigureImage || isEmpty) {
        return text
      }
      return styledContent(`p`, text)
    },

    blockquote({ tokens }: Tokens.Blockquote): string {
      let text = this.parser.parse(tokens)
      text = text.replace(/<p .*?>/g, `<p ${styles(`blockquote_p`)}>`)

      const contentStyles = removeContentFromStyle(styles(`blockquote .quote-mark`))
      const markContent = getStyleValue(styleMapping, `blockquote .quote-mark`, `content`) || ``

      const quote = `<section class="quote-mark" ${contentStyles}>${markContent}</section>`
      return styledContent(`blockquote`, markContent ? `${quote}${text}` : `${text}`, `blockquote`)
    },

    code({ text, lang = `` }: Tokens.Code): string {
      if (lang.startsWith(`mermaid`)) {
        clearTimeout(codeIndex)
        codeIndex = setTimeout(() => {
          mermaid.run()
        }, 0) as any as number
        return `<pre class="mermaid" style="display: flex; justify-content: center; margin: 1.2em 0;">${text}</pre>`
      }
      const langText = lang.split(` `)[0]
      const language = hljs.getLanguage(langText) ? langText : `plaintext`
      let highlighted = hljs.highlight(text, { language }).value
      // tab to 4 spaces
      highlighted = highlighted.replace(/\t/g, `    `)
      highlighted = highlighted
        .replace(/\r\n/g, `<br/>`)
        .replace(/\n/g, `<br/>`)
        .replace(/(>[^<]+)|(^[^<]+)/g, str => str.replace(/\s/g, `&nbsp;`))
      const span = `<span class="mac-sign" style="padding: 10px 14px 0;" hidden>${macCodeSvg}</span>`
      const code = `<code class="language-${lang}" ${styles(`code`)}>${highlighted}</code>`
      return `<pre class="hljs code__pre" ${styles(`code_pre`)}>${span}${code}</pre>`
    },

    codespan({ text }: Tokens.Codespan): string {
      const escapedText = escapeHtml(text)
      return styledContent(`codespan`, escapedText, `code`)
    },

    list({ ordered, items, start = 1 }: Tokens.List) {
      listOrderedStack.push(ordered)
      listCounters.push(Number(start))

      const html = items
        .map(item => this.listitem(item))
        .join(``)

      listOrderedStack.pop()
      listCounters.pop()

      return styledContent(
        ordered ? `ol` : `ul`,
        html,
      )
    },

    // 2. listitem：从栈顶取 ordered + counter，计算 prefix 并自增
    listitem(token: Tokens.ListItem) {
      const ordered = listOrderedStack[listOrderedStack.length - 1]
      const idx = listCounters[listCounters.length - 1]!

      // 准备下一个
      listCounters[listCounters.length - 1] = idx + 1

      // 渲染内容：优先 inline，fallback 去掉 <p> 包裹
      let content: string
      try {
        content = this.parser.parseInline(token.tokens)
      }
      catch {
        content = this.parser
          .parse(token.tokens)
          .replace(/^<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/, `$1`)
      }

      let styletag: string
      if (ordered) {
        styletag = getStyles(styleMapping, `ol-listitem`) ? `ol-listitem` : `listitem`
        const prefix = styletag === `listitem` ? `${idx}. ` : `${idx}`

        return styledContent(styletag, `<span ${(styles(`ol-listitem .prefix`))}>${prefix}</span> <span>${content}</span>`, `li`)
      }
      else {
        const dot = getStyleValue(styleMapping, `listitem .prefix`, `content`) || ``
        const prefix = dot ? `${dot}` : `• `
        return styledContent(`listitem`, `<span ${removeContentFromStyle(styles(`listitem .prefix`))}>${prefix}</span><span>${content}</span>`, `li`)
      }
    },

    image({ href, title, text }: Tokens.Image): string {
      const subText = styledContent(`figcaption`, transform(opts.legend!, text, title))
      const figureStyles = styles(`figure`)
      const imgStyles = styles(`image`)
      return `<figure ${figureStyles}><img ${imgStyles} src="${href}" title="${title}" alt="${text}"/>${subText}</figure>`
    },

    link({ href, title, text, tokens }: Tokens.Link): string {
      const parsedText = this.parser.parseInline(tokens)
      if (href.startsWith(`https://mp.weixin.qq.com`)) {
        return `<a href="${href}" title="${title || text}" ${styles(`wx_link`)}>${parsedText}</a>`
      }
      if (href === text) {
        return parsedText
      }
      if (opts.citeStatus) {
        const ref = addFootnote(title || text, href)
        return `<span ${styles(`link`)}>${parsedText}<sup>[${ref}]</sup></span>`
      }
      return styledContent(`link`, parsedText, `span`)
    },

    strong({ tokens }: Tokens.Strong): string {
      return styledContent(`strong`, this.parser.parseInline(tokens))
    },

    em({ tokens }: Tokens.Em): string {
      return styledContent(`em`, this.parser.parseInline(tokens), `span`)
    },

    table({ header, rows }: Tokens.Table): string {
      const headerRow = header
        .map(cell => this.tablecell(cell))
        .join(``)
      const body = rows
        .map((row) => {
          const rowContent = row
            .map(cell => this.tablecell(cell))
            .join(``)
          return styledContent(`tr`, rowContent)
        })
        .join(``)
      return `
        <section style="padding:0 8px; max-width: 100%; overflow: auto">
          <table class="preview-table" ${styles(`table`)}>
            <thead ${styles(`thead`)}>${headerRow}</thead>
            <tbody>${body}</tbody>
          </table>
        </section>
      `
    },

    tablecell(token: Tokens.TableCell): string {
      // console.log(token, token.header)
      const text = this.parser.parseInline(token.tokens)

      if (token.header && getStyles(styleMapping, `th`)) {
        return styledContent(`th`, text)
      }

      let align = ``
      if (token.align === `left`) {
        align = `text-align: left;`
      }
      else if (token.align === `center`) {
        align = `text-align: center;`
      }
      else if (token.align === `right`) {
        align = `text-align: right;`
      }

      return styledContent(`td`, text, `td`, align)
    },

    hr(_: Tokens.Hr): string {
      return styledContent(`hr`, ``)
    },
  }

  marked.use({ renderer })
  marked.use(markedSlider({ styles: styleMapping }))
  marked.use(markedAlert({ styles: styleMapping }))
  marked.use(
    MDKatex({ nonStandard: true }, styles(`inline_katex`, `;vertical-align: middle; line-height: 1;`), styles(`block_katex`, `;text-align: center;`),
    ),
  )
  marked.use(markedFootnotes())

  return {
    buildAddition,
    buildFootnotes,
    setOptions,
    reset,
    parseFrontMatterAndContent,
    buildReadingTime,
    generateCSSFromTheme,
    createContainer(content: string) {
      if (getStyles(styleMapping, `md-content`)) {
        const prefixStyles = removeContentFromStyle(styles(`md-content .prefix`))
        const suffixStyles = removeContentFromStyle(styles(`md-content .suffix`))
        const prefixContent = getStyleValue(styleMapping, `md-content .prefix`, `content`)
        const suffixContent = getStyleValue(styleMapping, `md-content .suffix`, `content`)

        const bodyPrefixStyles = removeContentFromStyle(styles(`md-body .prefix`))
        const bodySuffixStyles = removeContentFromStyle(styles(`md-body .suffix`))
        const bodyPrefixContent = getStyleValue(styleMapping, `md-body .prefix`, `content`)
        const bodySuffixContent = getStyleValue(styleMapping, `md-body .suffix`, `content`)

        return styledContent(`container`, [
          // themeName === 'pop' ? `${popTopArea}` : ``,
          // md-content .prefix
          `<section class="prefix" ${prefixStyles}>${prefixContent}</section>`,

          // md-content
          styledContent(`md-content`, [
            // md-body .prefix
            `<section data-website="https://md.vvvtools.com" data-tool="三维md微信编辑器" class="prefix" ${bodyPrefixStyles}>${bodyPrefixContent}</section>`,

            // md-body container
            styledContent(`md-body`, content, `section`),

            // md-body .suffix
            `<section data-website="https://md.vvvtools.com" data-tool="三维md微信编辑器" class="suffix" ${bodySuffixStyles}>${bodySuffixContent}</section>`,
          ].join(``), `section`),

          // md-content .suffix
          `<section class="suffix" ${suffixStyles}>${suffixContent}</section>`,

          // themeName === 'pop' ? `${popBottomArea}` : ``,
        ].join(``), `section`)
      }
      else {
        return styledContent(`container`, content, `section`)
      }
    },
    getOpts,
  }
}
