<script lang="ts" setup>
const route = useRoute()
const slug: string | string[] = route.params.id
const { data: article, pending, error } = await useLazyFetch(`https://qiita.com/api/v2/items/${slug}`)
</script>

<template>
  <div>
    <button
      class="inline-block px-6 py-2 border-2 mb-5 border-violet-400 text-violet-400 font-medium text-xs leading-tight uppercase rounded focus:outline-none focus:ring-0"
      @click="$router.go(-1)"
    >
      Back
    </button>
    <div class="dark:text-gray-100 break-words">
      <h3 class="text-3xl font-semibold mb-10">{{ article.title }}</h3>
      <div v-html="article.rendered_body" />
    </div>
  </div>
</template>
