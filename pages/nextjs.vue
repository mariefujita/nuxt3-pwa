<script setup lang="ts">
  const { data: articles } = await useFetch('https://qiita.com/api/v2/items?page=1&per_page=10&query=Next.js')
</script>

<template>
  <div>
    <NuxtLink
      class="inline-block px-6 py-2 border-2 mb-5 border-violet-400 text-violet-400 font-medium text-xs leading-tight uppercase rounded focus:outline-none focus:ring-0"
      to="/"
    >
    Back
    </NuxtLink>
    <h2 class="dark:text-gray-100 font-bold text-3xl mb-5">Next.js</h2>
    <template v-for="article in articles" :key="article.id">
      <ArticleCard :article="article" />
    </template>
  </div>
</template>
