import type { IConfigOption, Theme } from '@/types'

import { toMerged } from 'es-toolkit'

const defaultTheme: Theme = {
  base: {
    '--md-primary-color': `#000000`,
    'text-align': `left`,
    'line-height': `1.75`,
  },
  block: {
    'container': {},
    // 一级标题
    'h1': {
      'margin': `2em auto 1em`,
      'font-size': `1.3em`,
    },
    'h1 .content': {
      'display': `table`,
      'padding': `0 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'color': `hsl(var(--foreground))`,
      'font-size': `1.3em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 二级标题
    'h2': {
      'margin': `2em auto 1em`,
      'font-size': `1.2em`,
    },
    'h2 .content': {
      'display': `table`,
      'padding': `0 0.2em`,
      'color': `#fff`,
      'background': `var(--md-primary-color)`,
      'font-size': `1.2em`,
      'font-weight': `bold`,
      'text-align': `center`,
    },

    // 三级标题
    'h3': {
      'margin': `2em auto 1em`,
      'font-size': `1.1em`,
    },
    'h3 .content': {
      'padding-left': `8px`,
      'border-left': `3px solid var(--md-primary-color)`,
      'color': `hsl(var(--foreground))`,
      'font-size': `1.1em`,
      'font-weight': `bold`,
      'line-height': `1.2`,
    },

    // 四级标题
    'h4': {
      'margin': `1.5em auto 0.5em`,
      'font-size': `1em`,
      'color': `var(--md-primary-color)`,
    },
    'h4 .content': {
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 五级标题
    'h5': {
      'margin': `1.5em auto 0.5em`,
      'font-size': `1em`,
      'color': `var(--md-primary-color)`,
    },
    'h5 .content': {
      'color': `var(--md-primary-color)`,
      'font-size': `1em`,
      'font-weight': `bold`,
    },

    // 六级标题
    'h6': {
      'margin': `1.5em auto 0.5em`,
      'font-size': `1em`,
      'color': `var(--md-primary-color)`,
    },
    'h6 .content': {
      'font-size': `1em`,
      'color': `var(--md-primary-color)`,
    },

    // 段落
    'p': {
      'margin': `1.5em 8px`,
      'letter-spacing': `0.1em`,
      'color': `var(--foreground)`,
    },

    // 引用
    'blockquote': {
      'font-style': `normal`,
      'padding': `1em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(0,0,0,0.5)`,
      'background': `var(--blockquote-background)`,
      'margin-bottom': `1em`,
    },

    'blockquote .quote-mark': {

    },

    // 引用内容
    'blockquote_p': {
      'display': `block`,
      'font-size': `1em`,
      'letter-spacing': `0.1em`,
      'color': `var(--foreground)`,
    },

    'blockquote_note': {
    },

    'blockquote_tip': {
    },

    'blockquote_important': {
    },

    'blockquote_warning': {
    },

    'blockquote_caution': {
    },

    // GFM 警告块标题
    'blockquote_title': {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'margin-bottom': `0.5em`,
    },

    'blockquote_title_note': {
      color: `#478be6`,
    },

    'blockquote_title_tip': {
      color: `#57ab5a`,
    },

    'blockquote_title_important': {
      color: `#986ee2`,
    },

    'blockquote_title_warning': {
      color: `#c69026`,
    },

    'blockquote_title_caution': {
      color: `#e5534b`,
    },

    'blockquote_p_note': {
    },

    'blockquote_p_tip': {
    },

    'blockquote_p_important': {
    },

    'blockquote_p_warning': {
    },

    'blockquote_p_caution': {
    },

    // 代码块
    'code_pre': {
      'font-size': `14px`,
      'overflow-x': `auto`,
      'border-radius': `8px`,
      'padding': `1em`,
      'line-height': `1.5`,
      'margin': `10px 8px`,
    },

    // 行内代码
    'code': {
      'margin': 0,
      'white-space': `nowrap`,
      'font-family': `Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    // 图片
    'image': {
      'display': `block`,
      'width': `100% !important`,
      'margin': `0.1em auto 0.5em`,
      'border-radius': `4px`,
    },

    // 有序列表
    'ol': {
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `hsl(var(--foreground))`,
    },

    // 无序列表
    'ul': {
      'list-style': `circle`,
      'padding-left': `1em`,
      'margin-left': `0`,
      'color': `hsl(var(--foreground))`,
    },

    'footnotes': {
      'margin': `0.5em 8px`,
      'font-size': `80%`,
      'color': `hsl(var(--foreground))`,
    },

    'figure': {
      margin: `1.5em 8px`,
      color: `hsl(var(--foreground))`,
    },

    'hr': {
      'border-style': `solid`,
      'border-width': `2px 0 0`,
      'border-color': `rgba(0,0,0,0.1)`,
      '-webkit-transform-origin': `0 0`,
      '-webkit-transform': `scale(1, 0.5)`,
      'transform-origin': `0 0`,
      'transform': `scale(1, 0.5)`,
      'height': `0.4em`,
      'margin': `1.5em 0`,
    },
  },
  inline: {
    listitem: {
      'text-indent': `-1em`,
      'display': `block`,
      'margin': `0.2em 8px`,
      'color': `hsl(var(--foreground))`,
    },

    codespan: {
      'font-size': `90%`,
      'color': `#d14`,
      'background': `rgba(27,31,35,.05)`,
      'padding': `3px 5px`,
      'border-radius': `4px`,
      // 'word-break': `break-all`,
    },

    em: {
      'font-style': `italic`,
      'font-size': `inherit`,
    },

    link: {
      color: `#576b95`,
    },

    wx_link: {
      'color': `#576b95`,
      'text-decoration': `none`,
    },

    // 字体加粗样式
    strong: {
      'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
      'font-size': `inherit`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1em 8px`,
      'color': `hsl(var(--foreground))`,
    },

    thead: {
      'background': `rgba(0, 0, 0, 0.05)`,
      'font-weight': `bold`,
      'color': `hsl(var(--foreground))`,
    },

    td: {
      'border': `1px solid #dfdfdf`,
      'padding': `0.25em 0.5em`,
      'color': `#3f3f3f`,
      'word-break': `keep-all`,
    },

    footnote: {
      'font-size': `12px`,
      'color': `hsl(var(--foreground))`,
    },

    figcaption: {
      'text-align': `center`,
      'color': `#888`,
      'font-size': `0.8em`,
    },
  },
}

const graceTheme = toMerged(defaultTheme, {
  base: {
  },
  block: {
    'container': {},
    'h1 .content': {
      'padding': `0.5em 1em`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'font-size': `1.4em`,
      'text-shadow': `2px 2px 4px rgba(0,0,0,0.1)`,
    },

    'h2 .content': {
      'padding': `0.3em 1em`,
      'border-radius': `8px`,
      'font-size': `1.3em`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
    },

    'h3 .content': {
      'padding-left': `12px`,
      'font-size': `1.2em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-bottom': `1px dashed var(--md-primary-color)`,
    },

    'h4 .content': {
      'font-size': `1.1em`,
    },

    'h5 .content': {
      'font-size': `1em`,
    },

    'h6 .content': {
      'font-size': `1em`,
    },

    'p': {
    },

    'blockquote': {
      'font-style': `italic`,
      'padding': `1em 1em 1em 2em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `6px`,
      'color': `rgba(0,0,0,0.6)`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.05)`,
      'margin-bottom': `1em`,
    },

    'blockquote_p': {
    },

    'markdown-alert': {
      'font-style': `italic`,
    },

    'code_pre': {
      'box-shadow': `inset 0 0 10px rgba(0,0,0,0.05)`,
    },

    'code': {
      'white-space': `pre-wrap`,
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    'image': {
      'border-radius': `8px`,
      'box-shadow': `0 4px 8px rgba(0,0,0,0.1)`,
    },

    'ol': {
      'padding-left': `1.5em`,
    },

    'ul': {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    'footnotes': {

    },

    'figure': {

    },

    'hr': {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },

    codespan: {
    },

    em: {
    },

    link: {
    },

    wx_link: {
    },

    strong: {
    },

    table: {
      'border-collapse': `separate`,
      'border-spacing': `0`,
      'border-radius': `8px`,
      'margin': `1em 8px`,
      'color': `hsl(var(--foreground))`,
      'box-shadow': `0 4px 6px rgba(0,0,0,0.1)`,
      'overflow': `hidden`,
    },

    thead: {
      color: `#fff`,
    },

    td: {
      padding: `0.5em 1em`,
    },

    footnote: {
      color: `rgba(0,0,0,0.5)`,
    },

    figcaption: {

    },
  },
})

const simpleTheme = toMerged(defaultTheme, {
  base: {
  },
  block: {
    'container': {},
    'h1 .content': {
      'padding': `0.5em 1em`,
      'font-size': `1.4em`,
      'text-shadow': `1px 1px 3px rgba(0,0,0,0.05)`,
    },

    'h2 .content': {
      'padding': `0.3em 1.2em`,
      'font-size': `1.3em`,
      'border-radius': `8px 24px 8px 24px`,
      'box-shadow': `0 2px 6px rgba(0,0,0,0.06)`,
    },

    'h3 .content': {
      'padding-left': `12px`,
      'font-size': `1.2em`,
      'border-radius': `6px`,
      'line-height': `2.4em`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-right': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-bottom': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border-top': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'background': `color-mix(in srgb, var(--md-primary-color) 8%, transparent)`,
    },

    'h4 .content': {
      'font-size': `1.1em`,
      'border-radius': `6px`,
    },

    'h5 .content': {
      'border-radius': `6px`,
    },

    'h6 .content': {
      'border-radius': `6px`,
    },

    'blockquote': {
      'font-style': `italic`,
      'padding': `1em 1em 1em 2em`,
      'color': `rgba(0,0,0,0.6)`,
      'border-bottom': `0.2px solid rgba(0, 0, 0, 0.04)`,
      'border-top': `0.2px solid rgba(0, 0, 0, 0.04)`,
      'border-right': `0.2px solid rgba(0, 0, 0, 0.04)`,
    },

    'blockquote_note': {
      'font-style': `italic`,
    },

    'blockquote_tip': {
      'font-style': `italic`,
    },

    'blockquote_important': {
      'font-style': `italic`,
    },

    'blockquote_warning': {
      'font-style': `italic`,
    },

    'blockquote_caution': {
      'font-style': `italic`,
    },

    'blockquote_title': {
    },

    'blockquote_title_note': {

    },

    'blockquote_title_tip': {
    },

    'blockquote_title_important': {
    },

    'blockquote_title_warning': {
    },

    'blockquote_title_caution': {
    },

    'blockquote_p_note': {
    },

    'blockquote_p_tip': {
    },

    'blockquote_p_important': {
    },

    'blockquote_p_warning': {
    },

    'blockquote_p_caution': {
    },

    'code_pre': {
      border: `1px solid rgba(0, 0, 0, 0.04)`,
    },

    'code': {
      'white-space': `pre-wrap`,
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    'image': {
      'border-radius': `8px`,
      'border': `1px solid rgba(0, 0, 0, 0.04)`,
    },

    'ol': {
      'padding-left': `1.5em`,
    },

    'ul': {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    'hr': {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },
  },
})

const auroraTheme = toMerged(defaultTheme, {
  base: {

  },
  block: {
    'container': {
      'margin': `0px`,
      'padding': `10px 10px`,
      'background-attachment': `scroll`,
      'background-clip': `border-box`,
      'background-color': `color-mix(in srgb, var(--md-primary-color) 0%, transparent)`,
      'background-image': `linear-gradient(90deg, color-mix(in srgb, var(--md-primary-color) 10%, transparent) 0%, color-mix(in srgb, var(--md-primary-color) 0%, transparent) 6.76%),
        linear-gradient(360deg, color-mix(in srgb, var(--md-primary-color) 10%, transparent) 0%, color-mix(in srgb, var(--md-primary-color) 0%, transparent) 9.46%)`,
      'background-origin': `padding-box`,
      'background-position-x': `left`,
      'background-position-y': `top`,
      'background-repeat': `repeat, repeat`,
      'background-size': `20px 20px, 20px 20px`,
    },
    'h1': {

    },

    'h1 .content': {
      'display': `inline-block`,
      'padding': `0`,
      'border-bottom': `none`,
      'text-align': `left`,
      'background-image': `linear-gradient(0deg, var(--md-primary-color) 40%, transparent 40%)`,
    },

    'h2 .content': {
      'display': `block`,
      'padding-left': `10px`,
      // 'border-radius': `6px`,
      'border-left': `4px solid var(--md-primary-color)`,
      'background': `none`,
      'color': `hsl(var(--foreground))`,
      'text-align': `left`,
    },

    'h2 .content strong': {
      color: `var(--md-primary-color)`,
    },

    'h3': {
      'display': `flex`,
      'align-items': `center`,
      'justify-content': `center`,
    },

    'h3 .prefix': {
      content: ``,
    },

    'h3 .content': {
      'padding-left': `0`,
      'font-size': `1.1em`,
      'line-height': `1.5em`,
      'border-radius': `0`,
      'border-bottom': `2px solid var(--md-primary-color)`,
      'border-left': `none`,
      'border-right': `none`,
      'border-top': `none`,
      'background': `none`,
    },

    'h3 .suffix': {
    },

    'h3 .content strong': {
      color: `var(--md-primary-color)`,
    },

    'h4 .content': {
      'font-size': `1.1em`,
      // 'color': `hsl(var(--foreground))`,
    },

    'h5 .content': {
      // 'color': `hsl(var(--foreground))`,
    },

    'h6 .content': {
      // 'color': `hsl(var(--foreground))`,
    },

    'p': {
      margin: `1.5em 0px`,
    },

    'blockquote': {
      margin: `1em 0px`,
      padding: `1em 1em 1em 1em`,
      color: `hsl(var(--foreground))`,
      background: `color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      border: `1px solid var(--md-primary-color)`,
    },

    'blockquote .quote-mark': {
      'content': `❝`,
      'display': `block`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.5em`,
      'line-height': `1.5em`,
      'letter-spacing': `0em`,
      'text-align': `left`,
      'font-weight': `bold`,
    },

    'blockquote_note': {
      // 'font-style': `italic`,
    },

    'blockquote_p': {

    },

    'blockquote_tip': {
      // 'font-style': `italic`,
    },

    'blockquote_important': {
      // 'font-style': `italic`,
    },

    'blockquote_warning': {
      // 'font-style': `italic`,
    },

    'blockquote_caution': {
      // 'font-style': `italic`,
    },

    'blockquote_title': {
    },

    'blockquote_title_note': {

    },

    'blockquote_title_tip': {
    },

    'blockquote_title_important': {
    },

    'blockquote_title_warning': {
    },

    'blockquote_title_caution': {
    },

    'blockquote_p_note': {
    },

    'blockquote_p_tip': {
    },

    'blockquote_p_important': {
    },

    'blockquote_p_warning': {
    },

    'blockquote_p_caution': {
    },

    'code_pre': {
      margin: `10px 0px`,
      border: `1px solid rgba(0, 0, 0, 0.04)`,
    },

    'code': {
      // 'white-space': `pre-wrap`,
      'font-family': `'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace`,
    },

    'image': {
      border: `1px solid rgba(0, 0, 0, 0.04)`,
    },

    'ol': {
      'padding-left': `1em`,
    },

    'ul': {
      'list-style': `none`,
      'padding-left': `1em`,
    },

    'hr': {
      height: `0.3em`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, 
        transparent,
        var(--md-primary-color),
        transparent
      )`,
    },
  },
  inline: {
    listitem: {
      margin: `0.5em 8px`,
    },
    codespan: {
      color: `hsl(from var(--md-primary-color) h s calc(l * 0.9))`,
    },
    link: {
      color: `var(--md-primary-color)`,
    },
    wx_link: {
      color: `var(--md-primary-color)`,
    },
    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1.5em 0`,
      'color': `hsl(var(--foreground))`,
      'border-radius': `6px`,
      'overflow': `hidden`,
    },

    thead: {
      'background': `color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'font-weight': `bold`,
      'color': `hsl(var(--foreground))`,
    },

    td: {
      border: `1px solid color-mix(in srgb, var(--md-primary-color) 20%, transparent)`,
      padding: `0.5em 1em`,
      color: `hsl(var(--foreground))`,
    },
  },

})

const techTheme = toMerged(defaultTheme, {
  base: {
    // 可以在这里设置 --md-primary-color 的值，或者使用默认值
    '--md-primary-color': `#4286f4`,
  },
  block: {
    'container': {
      'margin': `0px`,
      'padding': `10px`,
      'background-attachment': `scroll`,
      'background-clip': `border-box`,
      'background-color': `color-mix(in srgb, var(--md-primary-color) 0%, transparent)`,
      'background-image': `linear-gradient(90deg, color-mix(in srgb, var(--md-primary-color) 10%, transparent) 0%, color-mix(in srgb, var(--md-primary-color) 0%, transparent) 6.76%),
        linear-gradient(360deg, color-mix(in srgb, var(--md-primary-color) 10%, transparent) 0%, color-mix(in srgb, var(--md-primary-color) 0%, transparent) 9.46%)`,
      'background-origin': `padding-box`,
      'background-position-x': `left`,
      'background-position-y': `top`,
      'background-repeat': `repeat, repeat`,
      'background-size': `20px 20px, 20px 20px`,
      'letter-spacing': `0.3px`,
    },

    'h1': {
      margin: `2em auto 1em`,
    },

    'h1 .content': {
      'display': `inline-block`,
      'padding': `0.4em 0.8em`,
      'background': `var(--md-primary-color)`,
      'color': `white`,
      'font-weight': `600`,
      'letter-spacing': `1px`,
      'border-radius': `4px`,
      'box-shadow': `0 0 8px color-mix(in srgb, var(--md-primary-color) 20%, transparent)`,
      'text-align': `center`,
      'border-bottom': `none`,
    },

    'h2': {
      margin: `1.8em auto 0.8em`,
    },

    'h2 .content': {
      'display': `inline-block`,
      'padding': `0.3em 0.6em`,
      'background': `color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'color': `var(--md-primary-color)`,
      'font-weight': `600`,
      'letter-spacing': `0.5px`,
      'border-left': `3px solid var(--md-primary-color)`,
      'border-radius': `0 4px 4px 0`,
      'text-align': `left`,
    },

    'h3': {
      margin: `1.5em auto 0.8em`,
      display: `block`,
    },

    'h3 .content': {
      'padding-left': `10px`,
      'border-left': `2px solid var(--md-primary-color)`,
      'color': `hsl(var(--foreground))`,
      'font-weight': `500`,
      'letter-spacing': `0.5px`,
      'border-bottom': `none`,
    },

    'h4': {
      margin: `1.2em auto 0.5em`,
    },

    'h4 .content': {
      'color': `var(--md-primary-color)`,
      'font-weight': `700`,
      'position': `relative`,
      'padding-bottom': `5px`,
      'border-bottom': `1px solid rgba(var(--md-primary-color), 0.3)`,
    },

    'h5': {
      margin: `1em auto 0.5em`,
    },

    'h5 .content': {
      'color': `hsl(var(--foreground))`,
      'font-weight': `500`,
    },

    'h6': {
      margin: `0.8em auto 0.5em`,
    },

    'h6 .content': {
      'color': `hsl(var(--foreground))`,
      'font-weight': `400`,
      'font-style': `italic`,
    },

    'p': {
      'margin': `1.2em 0px`,
      'line-height': `1.7`,
      'color': `hsl(var(--foreground))`,
    },

    'blockquote': {
      'background': `rgba(var(--md-primary-color), 0.05)`,
      'border-left': `4px solid var(--md-primary-color)`,
      'border-radius': `0 6px 6px 0`,
      'padding': `1em 1.2em`,
      'margin': `1.5em 0`,
    },

    'blockquote .quote-mark': {
      'content': `❝`,
      'display': `block`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.2em`,
      'line-height': `1.5em`,
      'letter-spacing': `0em`,
      'text-align': `left`,
      'font-weight': `bold`,
    },

    'blockquote_p': {
      'color': `hsl(var(--foreground))`,
      'letter-spacing': `0.3px`,
      'line-height': `1.6`,
    },

    'blockquote_note': {
      'background': `rgba(var(--md-primary-color), 0.05)`,
      'border-left': `4px solid var(--md-primary-color)`,
    },

    'blockquote_tip': {
      'background': `rgba(var(--md-primary-color), 0.05)`,
      'border-left': `4px solid var(--md-primary-color)`,
    },

    'blockquote_important': {
      'background': `rgba(var(--md-primary-color), 0.05)`,
      'border-left': `4px solid var(--md-primary-color)`,
    },

    'blockquote_warning': {
      'background': `rgba(var(--md-primary-color), 0.05)`,
      'border-left': `4px solid var(--md-primary-color)`,
    },

    'blockquote_caution': {
      'background': `rgba(var(--md-primary-color), 0.05)`,
      'border-left': `4px solid var(--md-primary-color)`,
    },

    'blockquote_title': {
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
      'margin-bottom': `0.8em`,
      'font-weight': `600`,
      'letter-spacing': `0.3px`,
      'color': `var(--md-primary-color)`,
    },

    'code_pre': {
      'background': `hsl(var(--muted))`,
      'border-radius': `6px`,
      'padding': `1em`,
      'margin': `1.2em 0`,
      'overflow-x': `auto`,
      'border': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'font-size': `14px`,
    },

    'code': {
      'font-family': `'JetBrains Mono', Menlo, Operator Mono, Consolas, Monaco, monospace`,
      'line-height': `1.5`,
    },

    'image': {
      'display': `block`,
      'max-width': `100%`,
      'margin': `1.5em auto`,
      'border-radius': `6px`,
      'box-shadow': `0 0 10px color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'border': `1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
    },

    'ol': {
      'padding-left': `1.5em`,
      'margin': `1em 0`,
      'color': `hsl(var(--foreground))`,
    },

    'ul': {
      'list-style': `none`,
      'padding-left': `1.5em`,
      'margin': `1em 0`,
      'color': `hsl(var(--foreground))`,
    },

    'hr': {
      height: `1px`,
      border: `none`,
      margin: `2em 0`,
      background: `linear-gradient(to right, 
        transparent,
        var(--md-primary-color),
        transparent
      )`,
      position: `relative`,
    },
  },
  inline: {
    listitem: {
      'margin': `0.5em 0`,
      'color': `hsl(var(--foreground))`,
      'position': `relative`,
      'padding-left': `0.5em`,
    },

    codespan: {
      'font-family': `'JetBrains Mono', monospace`,
      'background': `color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'color': `var(--md-primary-color)`,
      'padding': `2px 5px`,
      'border-radius': `3px`,
      'font-size': `90%`,
    },

    em: {
      'font-style': `italic`,
      'color': `hsl(var(--foreground))`,
    },

    link: {
      'color': `var(--md-primary-color)`,
      'text-decoration': `none`,
      'border-bottom': `1px dashed color-mix(in srgb, var(--md-primary-color) 50%, transparent)`,
    },

    wx_link: {
      'color': `var(--md-primary-color)`,
      'text-decoration': `none`,
      'border-bottom': `1px dashed color-mix(in srgb, var(--md-primary-color) 50%, transparent)`,
    },

    strong: {
      'color': `var(--md-primary-color)`,
      'font-weight': `700`,
    },

    table: {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1.5em 0`,
      'color': `hsl(var(--foreground))`,
      'border-radius': `6px`,
      'overflow': `hidden`,
    },

    thead: {
      'background': `color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'font-weight': `bold`,
      'color': `hsl(var(--foreground))`,
    },

    td: {
      border: `1px solid color-mix(in srgb, var(--md-primary-color) 20%, transparent)`,
      padding: `0.5em 1em`,
      color: `hsl(var(--foreground))`,
    },
  },
})

const symbolTheme = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#8b5cf6`, // 使用紫色作为主色
  },
  block: {
    'container': {
      padding: `10px`,
      background: `hsl(var(--background))`,
    },
    'h1': {
      'margin': `2em auto 1em`,
      'display': `flex`,
      'align-items': `center`,
      'justify-content': `center`, // 添加这行实现水平居中
      'gap': `0.5em`,
      'text-align': `center`,
    },
    'h1 .prefix': {
      'content': `✤`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.2em`,
    },
    'h1 .content': {
      'font-size': `1.6em`,
      'font-weight': `bold`,
      'padding': `0`,
      'border-bottom': `none`,
      'text-align': `center`, // 确保内容文字居中
    },
    'h1 .suffix': {
      'content': `✤`,
      'color': `var(--md-primary-color)`,
      'font-size': `1.2em`,
    },

    'h2': {
      'margin': `1.8em auto 1em`,
      'display': `flex`,
      'align-items': `center`,
      'justify-content': `center`, // 添加这行实现水平居中
      'gap': `0.5em`,
    },
    'h2 .prefix': {
      content: `❋`,
      color: `var(--md-primary-color)`,
    },
    'h2 .content': {
      'font-size': `1.4em`,
      'border-bottom': `none`,
      'background': `none`,
      'color': `var(--foreground)`,
      'padding': `0`,
    },
    'h2 .suffix': {
      content: `❋`,
      color: `var(--md-primary-color)`,
    },

    'h3': {
      'margin': `1.5em auto 1em`,
      'display': `flex`,
      'align-items': `center`,
      'justify-content': `center`, // 添加这行实现水平居中
      'gap': `0.5em`,
    },
    'h3 .prefix': {
      content: `✧`,
      color: `var(--md-primary-color)`,
    },
    'h3 .content': {
      'font-size': `1.2em`,
      'border-radius': `4px`,
      'border-bottom': `none`,
      'background': `none`,
      'border': `none`,
      'padding': `0`,
    },
    'h3 .suffix': {
      content: `✧`,
      color: `var(--md-primary-color)`,
    },

    'h4 .prefix': {
      content: `✦`,
      color: `var(--md-primary-color)`,
    },
    'h5 .prefix': {
      content: `❉`,
      color: `var(--md-primary-color)`,
    },
    'h6 .prefix': {
      content: `◆`,
      color: `var(--md-primary-color)`,
    },

    'blockquote': {
      'background': `color-mix(in srgb, var(--md-primary-color) 5%, transparent)`,
      'border-left': `4px solid var(--md-primary-color)`,
      'padding': `1em`,
      'border-radius': `4px`,
    },

    'code_pre': {
      border: `1px solid color-mix(in srgb, var(--md-primary-color) 30%, transparent)`,
      background: `color-mix(in srgb, var(--md-primary-color) 5%, transparent)`,
    },
  },
  inline: {
    'listitem': {

    },
    'listitem .prefix': {
      content: `◌ `,
      color: `var(--md-primary-color)`,
    },
    // 'ol-listitem': {
    //   display: `flex`,
    //   'align-items': `center`,
    //   'justify-content': `flex-start`,
    //   'gap': `1em`,
    // },
    'ol-listitem .prefix': {
      color: `var(--md-primary-color)`,
    },
    'strong': {
      'color': `var(--md-primary-color)`,
      'font-weight': `bold`,
    },
    'em': {
      'color': `color-mix(in srgb, var(--md-primary-color) 80%, black)`,
      'font-style': `italic`,
    },
    'link': {
      'color': `var(--md-primary-color)`,
      'text-decoration': `none`,
      'border-bottom': `1px dashed var(--md-primary-color)`,
    },
    'wx_link': {
      'color': `var(--md-primary-color)`,
      'text-decoration': `none`,
      'border-bottom': `1px dashed var(--md-primary-color)`,
    },
    'table': {
      'border-collapse': `collapse`,
      'text-align': `center`,
      'margin': `1.5em 0`,
      'color': `hsl(var(--foreground))`,
      'border-radius': `6px`,
      'overflow': `hidden`,
    },

    'thead': {
      'background': `color-mix(in srgb, var(--md-primary-color) 10%, transparent)`,
      'font-weight': `bold`,
      'color': `hsl(var(--foreground))`,
    },

    'td': {
      border: `1px solid color-mix(in srgb, var(--md-primary-color) 20%, transparent)`,
      padding: `0.5em 1em`,
      color: `hsl(var(--foreground))`,
    },
  },
})

const popTheme = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#ff2e63`,
  },
  block: {
    'md-content': {
      'background': `#fff`,
      'padding': `10px`,
      'border': `2px solid #252a34`,
      'z-index': `2`,
      'position': `relative`,
      'box-shadow': `10px 10px 0 rgba(37,42,52,.8)`,
    },
    'md-content .prefix': {
      'position': `absolute`,
      'top': 0,
      'right': 0,
      'width': `80px`,
      'height': `80px`,
      'background-image': `url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'%3E%3Cpath d=\\'M50 10C60 10 70 15 75 25C80 35 80 45 75 55C70 65 60 70 50 70C40 70 30 65 25 55C20 45 20 35 25 25C30 15 40 10 50 10Z\\' fill=\\'%2351bafa\\' stroke=\\'%23252a34\\' stroke-width=\\'3\\'/%3E%3Ctext x=\\'50\\' y=\\'50\\' font-family=\\'Arial\\' font-size=\\'20\\' font-weight=\\'bold\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' fill=\\'%23252a34\\'%3EPOP!%3C/text%3E%3C/svg%3E')`,
      'background-size': `80px 80px`,
      'background-position': `20px -20px`,
      'background-repeat': `no-repeat`,
      'z-index': `1`,
    },
    'md-content .suffix': {
      'bottom': 0,
      'left': 0,
      'width': `100%`,
      'height': `100%`,
      'background-image': `url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\'%3E%3Cpath d=\\'M40 5L47.8 27.1H71.7L52.3 40.8L60.1 62.9L40 49.2L19.9 62.9L27.7 40.8L8.3 27.1H32.2L40 5Z\\' fill=\\'%2351bafa\\' stroke=\\'%23333\\' stroke-width=\\'3\\' /%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\'%3E%3Cpath d=\\'M40 5L47.8 27.1H71.7L52.3 40.8L60.1 62.9L40 49.2L19.9 62.9L27.7 40.8L8.3 27.1H32.2L40 5Z\\' fill=\\'%23ff2e63\\' stroke=\\'%23333\\' stroke-width=\\'3\\' /%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\'%3E%3Cpath d=\\'M40 5L47.8 27.1H71.7L52.3 40.8L60.1 62.9L40 49.2L19.9 62.9L27.7 40.8L8.3 27.1H32.2L40 5Z\\' fill=\\'%23ff2e63\\' stroke=\\'%23333\\' stroke-width=\\'3\\' /%3E%3C/svg%3E')`,
      'background-size': `80px 80px,80px 80px,80px 80px`,
      'background-position': `-20px 100%,-20px 0,105% 100%`,
      'position': `absolute`,
      'background-repeat': `no-repeat`,
      'z-index': `1`,
    },
    'container': {
      'padding': `30px`,
      'background': `#fde041`,
      'background-image': `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\'%3E%3Ccircle cx=\\'2\\' cy=\\'2\\' r=\\'2\\' fill=\\'%23d3b000\\'/%3E%3C/svg%3E')`,
      'background-size': `24px 24px`,
      'background-position': `12px 12px`,
      'position': `relative`,
    },
    'h1': {
      position: `relative`,
    },
    'h1 .content': {
      'font-size': `1.5em`,
      'color': `#252a34`,
      'margin-top': `20px`,
      'margin-bottom': `20px`,
      'text-transform': `uppercase`,
      'letter-spacing': `1px`,
      'text-shadow': `3px 3px 0 #ff2e63`,
      'padding-bottom': `10px`,
      'padding': `0`,
      'border': `none`,
    },
    'h1 .suffix': {
      position: `absolute`,
      bottom: 0,
      left: 0,
      width: `100%`,
      height: `6px`,
      background: `repeating-linear-gradient(45deg,#ff2e63,#ff2e63 10px,#252a34 0,#252a34 20px)`,
    },
    'h2 .content': {
      'font-size': `1.4em`,
      'background-color': `#51bafa`,
      'transform': `rotate(-2deg)`,
      'padding': `2px 10px`,
      'display': `block`,
    },
    'h3 .content': {
      'font-size': `1.3em`,
      'margin-top': `20px`,
      'margin-bottom': `12px`,
      'background-color': `#ff2e63`,
      'border-radius': `4px`,
      'border': `none`,
      'padding': `5px 10px`,
      'display': `block`,
      'color': `#fff`,
    },
    'h4 .content': {
      'font-size': `1.2em`,
      'color': `#ff2e63`,
    },
    'h5 .content': {
      'font-size': `1.1em`,
      'color': `#ff2e63`,
    },
    'h6 .content': {
      color: `#ff2e63`,
    },
    'ul': {
      'background-color': `hsla(0,0%,100%,.7)`,
      'border': `2px solid #252a34`,
      'border-radius': `8px`,
      'padding': `15px`,
      'margin': `20px 0`,
    },
    'ol': {
      'background-color': `hsla(0,0%,100%,.7)`,
      'border': `2px solid #252a34`,
      'border-radius': `8px`,
      'padding': `15px`,
      'margin': `20px 0`,
    },
    'image': {
      'max-width': `100%`,
      'border': `5px solid #252a34`,
      'border-radius': 0,
      'box-shadow': `8px 8px 0 #ff2e63`,
      'transform': `rotate(-1deg)`,
    },
    'blockquote': {
      'padding': `35px 15px `,
      'border-left': `8px solid #ff2e63`,
      'margin': `20px 0 `,
      'color': `#252a34`,
      'font-style': `italic`,
      'background-color': `rgba(255,46,99,.1)`,
      'border-radius': `0 8px 8px 0`,
    },
    'blockquote .quote-mark': {
      'margin-top': `-35px`,
      'content': `“`,
      'font-size': `60px`,
      'font-family': `Georgia,serif`,
      'color': `#ff2e63`,
      'line-height': 1,
    },
    'code_pre': {
      'border': `2px solid #ff2e63`,
      'box-shadow': `5px 5px 0 #252a34`,
    },
    'hr': {
      'border': 0,
      'height': `6px`,
      'background': `repeating-linear-gradient(45deg,#ff2e63,#ff2e63 10px,#252a34 0,#252a34 20px)`,
      'margin': `25px 0`,
      'border-radius': `3px`,
    },
  },
  inline: {
    'listitem .prefix': {
      content: `★ `,
      color: `#ff2e63`,
    },
    'ol-listitem': {
      // position: 'relative',
      // 'padding-left': '45px',
      'text-indent': 0,
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
    },
    'ol-listitem .prefix': {
      'background-color': `#ff2e63`,
      'color': `#fff`,
      'font-weight': 700,
      'width': `20px`,
      'height': `20px`,
      'border-radius': `50%`,
      'text-align': `center`,
      'border': `2px solid #252a34`,
      'display': `flex`,
      // 'padding-left': '12px',
      'justify-content': `center`,
      'align-items': `center`,
      'box-sizing': `border-box`,
      // position: 'absolute',
      // left: 0,
    },
    'strong': {
      color: `var(--foreground)`,
    },
    'codespan': {
      'padding': `3px 6px`,
      'border-radius': `4px`,
      'font-size': `0.9em`,
      'border': `1px solid #ff2e63`,
      'background-color': `#252a34`,
      'color': `#eaeaea`,
    },
    'link': {
      'color': `#ff2e63`,
      'text-decoration': `none`,
      'border-bottom': `3px solid #252a34`,
      'padding': `0 3px`,
      'cursor': `pointer`,
      'transition': `all .3s ease`,
      'font-weight': 700,
    },
    'wx_link': {
      'color': `#ff2e63`,
      'text-decoration': `none`,
      'border-bottom': `3px solid #252a34`,
      'padding': `0 3px`,
      'cursor': `pointer`,
      'transition': `all .3s ease`,
      'font-weight': 700,
    },
    'table': {
      'border': `3px solid #252a34`,
      'box-shadow': `5px 5px 0 #ff2e63`,
      'border-radius': `5px`,
      'border-collapse': `collapse`,
      'border-spacing': 0,
      'margin': `20px 0`,
    },
    'thead': {

    },
    'tr': {

    },
    'th': {
      'background-color': `#252a34`,
      'color': `#eaeaea`,
      'padding': `12px`,
      'text-align': `left`,
      'letter-spacing': `1px`,
    },
    'td': {
      'border': `none`,
      'padding': `0.5em`,
      'border-bottom': `2px solid #252a34`,
    },
  },
})

const cyberTheme = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#0ff`,
    '--foreground': `#e0e0e0`,
    '--cyber-pink': `#ff2d6a`,
    '--cyber-blue': `#0ff`,
    'font-family': `Rajdhani, Orbitron, "PingFang SC", sans-serif`,
  },
  block: {
    'md-content': {
      'position': `relative`,
      'background': `rgba(13,14,25,.7)`,
      'padding': `20px`,
      'border': `1px solid rgba(0,255,255,.2)`,
      'box-shadow': `inset 0 0 10px rgba(0,255,255,.1)`,
    },
    'md-content .prefix': {
      'position': `relative`,
      'height': `5px`,
      'background': `linear-gradient(90deg, var(--cyber-pink), var(--cyber-blue))`,
      'margin-bottom': `20px`,
    },
    'container': {
      'border-radius': `2px`,
      'background': `#0d0e19`,
      'padding': `30px 25px`,
      'position': `relative`,
      'overflow': `hidden`,
      'box-shadow': `0 0 25px rgba(0,255,255,.2), 0 0 5px rgba(255,0,128,.15)`,
      'color': `#e0e0e0`,
      'background-image': `linear-gradient(rgba(18,16,36,.8) 1px, transparent 1px),linear-gradient(90deg, rgba(18,16,36,.8) 1px, transparent 1px)`,
      'background-size': `20px 20px`,
    },
    'h1 .content': {
      'font-size': `2em`,
      'font-weight': `600`,
      'letter-spacing': `2px`,
      'text-transform': `uppercase`,
      'color': `var(--cyber-blue)`,
      'text-shadow': `0 0 10px rgba(0,255,255,.5)`,
      'border-bottom': `2px solid var(--cyber-blue)`,
      'padding': `0.5em 0`,
      'margin-bottom': `1em`,
    },
    'h2 .content': {
      'font-size': `1.6em`,
      'font-weight': `500`,
      'letter-spacing': `1px`,
      'text-transform': `uppercase`,
      'color': `var(--cyber-pink)`,
      'padding': `0.4em 1em`,
      'background': `rgba(255,45,106,.1)`,
      'border': `1px solid var(--cyber-pink)`,
      'box-shadow': `0 0 10px rgba(255,45,106,.2)`,
    },
    'h3 .content': {
      'font-size': `1.3em`,
      'line-height': `2em`,
      'font-weight': `500`,
      'letter-spacing': `1px`,
      'color': `var(--cyber-blue)`,
      'border-left': `3px solid var(--cyber-blue)`,
      'padding': `0.3em 1em`,
      'background': `rgba(0,255,255,.1)`,
    },
    'h4 .content': {
      'font-size': `1.2em`,
      'color': `var(--cyber-blue)`,
    },
    'h5 .content': {
      'font-size': `1.1em`,
      'color': `var(--cyber-blue)`,
    },
    'h6 .content': {
      color: `var(--cyber-blue)`,
    },
    'blockquote': {
      'background': `rgba(0,255,255,.05)`,
      'border': `1px solid var(--cyber-blue)`,
      'border-left': `4px solid var(--cyber-blue)`,
      'padding': `1em 1.2em`,
      'box-shadow': `inset 0 0 10px rgba(0,255,255,.1)`,
    },
    'blockquote .quote-mark': {
      'content': `[CITE]`,
      'color': `var(--cyber-blue)`,
      'font-family': `Orbitron, monospace`,
      'font-size': `0.9em`,
      'letter-spacing': `1px`,
      'display': `block`,
      'margin-bottom': `0.5em`,
    },
    'code_pre': {
      'background': `#151823`,
      'border': `1px solid var(--cyber-pink)`,
      'border-radius': `2px`,
      'padding': `1.2em`,
      'font-family': `\\'Fira Code\\', monospace`,
      'font-size': `0.9em`,
      'box-shadow': `inset 0 0 10px rgba(255,45,106,.1)`,
    },
    'image': {
      'border': `2px solid var(--cyber-blue)`,
      'box-shadow': `0 0 15px rgba(0,255,255,.3)`,
      'border-radius': `2px`,
    },
    'hr': {
      height: `3px`,
      border: `none`,
      background: `linear-gradient(90deg, transparent, var(--cyber-blue), transparent)`,
      margin: `2em 0`,
    },
    'footnotes': {
      color: `var(--foreground)`,
    },
  },
  inline: {
    'listitem .prefix': {
      'content': `*`,
      'color': `var(--cyber-pink)`,
      'font-family': `Orbitron, monospace`,
      'margin-right': `0.5em`,
    },
    'ol-listitem .prefix': {
      'color': `var(--cyber-pink)`,
      'font-family': `Orbitron, monospace`,
      'text-indent': 0,
    },
    'codespan': {
      'background': `rgba(255,45,106,.1)`,
      'color': `var(--cyber-pink)`,
      'padding': `0.2em 0.4em`,
      'border-radius': `2px`,
      'border': `1px solid var(--cyber-pink)`,
      'font-family': `\\'Fira Code\\', monospace`,
    },
    'link': {
      'color': `var(--cyber-blue)`,
      'text-decoration': `none`,
      'border-bottom': `1px solid var(--cyber-blue)`,
      'box-shadow': `0 4px 8px -4px rgba(0,255,255,.3)`,
      'transition': `all 0.3s ease`,
    },
    'wx_link': {
      'color': `var(--cyber-blue)`,
      'text-decoration': `none`,
      'border-bottom': `1px solid var(--cyber-blue)`,
      'box-shadow': `0 4px 8px -4px rgba(0,255,255,.3)`,
      'transition': `all 0.3s ease`,
    },
    'strong': {
      'color': `var(--cyber-pink)`,
      'font-weight': `600`,
      'letter-spacing': `0.5px`,
    },
    'table': {
      'width': `100%`,
      'border-collapse': `separate`,
      'border-spacing': `0`,
      'border': `1px solid var(--cyber-blue)`,
      'background': `rgba(13,14,25,.9)`,
      'box-shadow': `0 0 15px rgba(0,255,255,.2)`,
    },
    'thead': {
      background: `rgba(0,255,255,.1)`,
    },
    'td': {
      padding: `0.8em 1em`,
      border: `1px solid rgba(0,255,255,.2)`,
      color: `#e0e0e0`,
    },
  },
})

const kidsTheme = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#FF6B6B`,
    '--kid-yellow': `#FFD93D`,
    '--kid-blue': `#4DD0E1`,
    '--kid-green': `#6BCB77`,
    '--kid-purple': `#B39DDB`,
    'font-family': `"Comic Sans MS", "Comic Sans", cursive, "PingFang SC", sans-serif`,
  },
  block: {
    'md-content': {
      background: `#FFF`,
      padding: `10px`,
    },
    'container': {
      'background': `#fff`,
      'border-radius': `20px`,
      'border': `3px solid #FFD93D`,
      'box-shadow': `0 8px 0 #FFB562`,
      'padding': `25px`,
      'background-image': `
        radial-gradient(#FF6B6B 3px, transparent 3px),
        radial-gradient(#4DD0E1 3px, transparent 3px)
      `,
      'background-size': `40px 40px`,
      'background-position': `0 0, 20px 20px`,
      'background-attachment': `fixed`,
    },

    'h1': {
      'display': `flex`,
      'gap': `.5em`,
      'align-items': `center`,
    },
    'h1 .prefix': {
      'content': `🌈`,
      'font-size': `1.5em`,
    },
    'h1 .content': {
      'font-size': `1.5em`,
      'color': `#FF6B6B`,
      'text-align': `center`,
      'border': `none`,
      'padding': `10px`,
      'border-radius': `50px`,
      'background': `linear-gradient(45deg, #FFE5E5, #E5F9FF)`,
      'text-shadow': `2px 2px 0 white, 3px 3px 0 #FFB562`,
      'letter-spacing': `2px`,
    },
    'h2': {
      'display': `flex`,
      'gap': `.5em`,
      'align-items': `center`,
    },
    'h2 .prefix': {
      'content': `🎨`,
      'font-size': `1.4em`,
    },
    'h2 .content': {
      'font-size': `1.4em`,
      'background': `var(--kid-yellow)`,
      'color': `#fff`,
      'padding': `8px 20px`,
      'border-radius': `25px`,
      'text-shadow': `1px 1px 0 #FFB562`,
    },

    'h3 .prefix': {
      content: `✨`,
    },
    'h3 .content': {
      'font-size': `1.3em`,
      'color': `var(--kid-blue)`,
      'border-bottom': `3px dotted var(--kid-blue)`,
      'padding': `5px 0`,
      'border-left': `none`,
    },
    'h4 .content': {
      'font-size': `1.2em`,
      'color': `var(--kid-blue)`,
    },
    'h5 .content': {
      'font-size': `1.1em`,
      'color': `var(--kid-blue)`,
    },
    'h6 .content': {
      color: `var(--kid-blue)`,
    },

    'blockquote': {
      'background': `#F8F9FA`,
      'border': `2px dashed var(--kid-purple)`,
      'border-radius': `15px`,
      'padding': `15px 20px`,
    },

    'blockquote .quote-mark': {
      'content': `✎`,
      'font-size': `24px`,
      'color': `var(--kid-purple)`,
      'margin-top': `-20px`,
    },

    'code_pre': {
      'background': `#F8F9FA`,
      'border': `2px solid var(--kid-green)`,
      'border-radius': `15px`,
      'font-family': `\\'Fira Code\\', monospace`,
    },

    'image': {
      'border': `3px solid #FFD93D`,
      'border-radius': `15px`,
      'box-shadow': `0 4px 8px rgba(0,0,0,0.1)`,
    },

    'ul': {
      'list-style': `none`,
      'padding-left': `1.5em`,
    },

    'ol': {
      'padding-left': `1.5em`,
    },

    'hr': {
      border: `none`,
      height: `6px`,
      background: `url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'6\\' viewBox=\\'0 0 40 6\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 3a3 3 0 1 1 6 0 3 3 0 1 1-6 0M10 3a3 3 0 1 1 6 0 3 3 0 1 1-6 0M20 3a3 3 0 1 1 6 0 3 3 0 1 1-6 0M30 3a3 3 0 1 1 6 0 3 3 0 1 1-6 0\\' fill=\\'%23FF6B6B\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'\/%3E%3C\/svg%3E') repeat-x 0 0`,
      margin: `20px 0`,
    },
  },
  inline: {
    'listitem .prefix': {
      'content': `🌟`,
      'margin-right': `8px`,
    },
    'ol-listitem .prefix': {
      'background': `var(--kid-yellow)`,
      'color': `#fff`,
      'width': `24px`,
      'height': `24px`,
      'border-radius': `50%`,
      'display': `inline-flex`,
      'align-items': `center`,
      'justify-content': `center`,
      'margin-right': `8px`,
      'font-weight': `bold`,
      'text-indent': 0,
    },

    'codespan': {
      'background': `#F8F9FA`,
      'border': `2px solid var(--kid-green)`,
      'border-radius': `5px`,
      'padding': `2px 6px`,
      'color': `var(--kid-green)`,
      'font-family': `"Fira Code", monospace`,
    },

    'strong': {
      'color': `var(--kid-blue)`,
      'font-weight': `bold`,
    },

    'link': {
      'color': `var(--kid-purple)`,
      'text-decoration': `none`,
      'border-bottom': `2px solid var(--kid-purple)`,
    },

    'table': {
      'border-collapse': `separate`,
      'border-spacing': `0`,
      'border': `3px solid var(--kid-yellow)`,
      'border-radius': `15px`,
      'overflow': `hidden`,
    },

    'thead': {
      background: `var(--kid-yellow)`,
      color: `#fff`,
    },

    'td': {
      border: `2px solid var(--kid-yellow)`,
      padding: `10px 15px`,
    },
  },
})

const notebookTheme = toMerged(defaultTheme, {
  base: {
    '--md-primary-color': `#2B4B6F`,
    '--notebook-ink': `#1B365C`,
    '--notebook-red': `#CC4B4B`,
    '--notebook-blue': `#2B4B6F`,
    '--notebook-accent': `#FFA41B`,
    'font-family': `"Patrick Hand", "Comic Sans MS", "PingFang SC", sans-serif`,
    'line-height': `1.6`,
    'letter-spacing': `0.5px`,
  },
  block: {
    'container': {
      'border-radius': `8px`,
      'box-shadow': `0 10px 25px rgba(0,0,0,.15)`,
      'background': `#f5f5f5`,
      'padding': `35px 25px 25px`,
      'position': `relative`,
    },
    'md-content .prefix': {
      position: `absolute`,
      left: `20px`,
      background: `repeating-linear-gradient(0deg, transparent, transparent 10px, #e74c3c 0, #e74c3c 15px)`,
      width: `2px`,
      bottom: `0px`,
      top: `0px`,
    },
    'md-content .suffix': {
      'content': `📒`,
      'position': `absolute`,
      'top': `0px`,
      'left': `10px`,
      'font-size': `24px`,
      'transform': `rotate(-10deg)`,
    },
    'md-content': {
      'position': `relative`,
      'background': `#fff`,
      'color': `#34495e`,
      'border': `1px solid #ddd`,
      'padding': `16px 32px 8px 40px`,
      'height': `100%`,
      'background-image': `linear-gradient(#eee 1px, transparent 0)`,
      'background-size': `100% 24px`,
    },
    'md-body .suffix': {
      position: `absolute`,
      width: `4px`,
      height: `100%`,
      top: `0px`,
      left: `30px`,
      background: `rgba(231, 76, 60, .2)`,
    },

    'h1': {
      'margin': `1.5em 0 1em`,
      'color': `#2c3e50`,
      'text-align': `center`,
      'padding-bottom': `5px`,
      'border-bottom': `2px dashed #3498db`,
      'font-size': `1.8em`,
      'font-family': `Caveat,Ma Shan Zheng,cursive`,
    },

    'h1 .content': {
      'font-size': `2em`,
      'color': `var(--notebook-ink)`,
      'border-bottom': `2px solid var(--notebook-red)`,
      'padding': `0.2em 0`,
      'font-family': `"Permanent Marker", cursive`,
      'text-align': `left`,
    },

    'h2': {
      'margin': `1.2em 0 0.8em`,
      'position': `relative`,
      'text-align': `center`,
    },
    'h2 .prefix': {

    },
    'h2 .content': {
      'color': `#7f8c8d`,
      'letter-spacing': `.5px`,
      'text-align': `center`,
      'font-style': `italic`,
      'background': `none`,
      'display': `inline-block`,
    },
    'h2 .suffix': {
      position: `absolute`,
      bottom: `-8px`,
      left: `50%`,
      transform: `translateX(-50%)`,
      width: `40px`,
      height: `2px`,
      background: `#3498db`,
    },

    'h3': {
      'margin': `1em 0 0.6em`,
      'display': `flex`,
      'align-items': `center`,
      'gap': `0.5em`,
    },
    'h3 .prefix': {
      content: `✎`,
    },
    'h3 .content': {
      'font-size': `1.3em`,
      'color': `var(--notebook-ink)`,
      'padding-left': `0.5em`,
      'border-left': `3px solid var(--notebook-accent)`,
    },

    'blockquote': {
      'background': `#FFFBE6`,
      'border-left': `3px solid var(--notebook-accent)`,
      'padding': `1em`,
      'margin': `1em 0`,
      'font-style': `italic`,
      'box-shadow': `2px 2px 5px rgba(0,0,0,0.05)`,
    },

    'blockquote .quote-mark': {
      'content': `"Note:"`,
      'color': `var(--notebook-accent)`,
      'font-family': `"Permanent Marker", cursive`,
      'font-size': `1.1em`,
      'font-style': `normal`,
    },

    'code_pre': {
      'background': `#F8F9FA`,
      'border': `1px solid #E1E4E8`,
      'border-radius': `4px`,
      'padding': `1em`,
      'font-size': `0.9em`,
      'font-family': `"Fira Code", monospace`,
      'box-shadow': `2px 2px 5px rgba(0,0,0,0.05)`,
    },

    'image': {
      'border': `2px solid #FFF`,
      'box-shadow': `0 2px 5px rgba(0,0,0,0.1)`,
      'border-radius': `4px`,
      'margin': `1em 0`,
      'transform': `rotate(-1deg)`,
    },

    'hr': {
      'border': `none`,
      'height': `20px`,
      'background-image': `url('data:image/svg+xml,%3Csvg width="100" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 10 Q 25 5, 50 10 T 100 10" fill="none" stroke="%232B4B6F" stroke-width="2" stroke-dasharray="5,5"/%3E%3C/svg%3E')`,
      'background-repeat': `repeat-x`,
      'margin': `2em 0`,
    },
  },
  inline: {
    'listitem .prefix': {
      'content': `✓`,
      'color': `var(--notebook-blue)`,
      'margin-right': `0.5em`,
      'font-weight': `bold`,
    },

    'ol-listitem .prefix': {
      'color': `var(--notebook-ink)`,
      'font-family': `"Permanent Marker", cursive`,
      'margin-right': `0.5em`,
    },

    'codespan': {
      'background': `#F3F4F6`,
      'color': `var(--notebook-red)`,
      'padding': `0.2em 0.4em`,
      'border-radius': `3px`,
      'font-family': `"Fira Code", monospace`,
      'font-size': `0.9em`,
    },

    'link': {
      'color': `var(--notebook-blue)`,
      'text-decoration': `none`,
      'border-bottom': `1px solid var(--notebook-blue)`,
      'transition': `all 0.2s ease`,
    },

    'strong': {
      'color': `var(--notebook-ink)`,
      'font-weight': `bold`,
      'text-decoration': `underline`,
      'text-decoration-color': `var(--notebook-accent)`,
      'text-decoration-thickness': `2px`,
      'text-underline-offset': `2px`,
    },

    'table': {
      'border-collapse': `collapse`,
      'width': `100%`,
      'margin': `1em 0`,
      'background': `#FFF`,
      'box-shadow': `0 2px 5px rgba(0,0,0,0.05)`,
    },

    'thead': {
      'background': `#F3F4F6`,
      'border-bottom': `2px solid var(--notebook-blue)`,
    },

    'td': {
      padding: `0.8em`,
      border: `1px solid #E1E4E8`,
      color: `var(--notebook-ink)`,
    },
  },
})

export const themeMap = {
  default: defaultTheme,
  grace: graceTheme,
  simple: simpleTheme,
  aurora: auroraTheme,
  tech: techTheme,
  symbol: symbolTheme,
  pop: popTheme,
  cyber: cyberTheme,
  kids: kidsTheme,
  notebook: notebookTheme,
}

export const themeOptions: IConfigOption<keyof typeof themeMap>[] = [
  {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  {
    label: `极光`,
    value: `aurora`,
    desc: `@dotSpecs`,
  },
  {
    label: `科技`,
    value: `tech`,
    desc: `@dotSpecs`,
  },
  {
    label: `符号`,
    value: `symbol`,
    desc: `@dotSpecs`,
  },
  {
    label: `波普`,
    value: `pop`,
    desc: `@dotSpecs`,
  },
  {
    label: `赛博朋克`,
    value: `cyber`,
    desc: `@dotSpecs`,
  },
  {
    label: `儿童`,
    value: `kids`,
    desc: `@dotSpecs`,
  },
  {
    label: `笔记本`,
    value: `notebook`,
    desc: `@dotSpecs`,
  },
]
