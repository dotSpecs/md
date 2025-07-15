<script setup lang="ts">
import { useStore } from '@/stores'

const store = useStore()
const { readingTime } = storeToRefs(store)
</script>

<template>
  <footer
    class="flex select-none items-center justify-between px-5 py-2 text-xs"
  >
    <div class="flex items-center gap-2">
      <a href="https://vvvtools.com/" target="_blank" class="hover:text-primary">VVV Tools 工具站</a>
    </div>
    <div class="space-x-2">
      <span> {{ readingTime.words }} 个词 </span>
      <span> {{ readingTime.chars }} 个字符 </span>
      <span> 阅读大约需 {{ readingTime.minutes }} 分钟 </span>
    </div>
  </footer>
</template>
