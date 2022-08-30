<script setup lang="ts">
type Tag = {
  name: string
}

type User = {
  name: string
  profile_image_url: string
  id: string
}

interface Props {
  created_at: string
  tags: Tag[]
  title: string
  url: string
  user: User
  id: string
}


const Props = withDefaults(defineProps<Props>(), {
  created_at: '',
  title: '',
  url: ''
})
</script>

<template>
  <div class="dark:text-gray-100 px-10 py-6 rounded-lg shadow-sm dark:bg-gray-900 mb-6">
    <div class="flex items-center justify-between">
      <span class="text-sm dark:text-gray-400">{{ new Intl.DateTimeFormat('ja-JP').format(new Date(created_at)) }}</span>
    </div>
    <div class="mt-3">
      <NuxtLink rel="noopener noreferrer" :to="`/${id}`" class="text-2xl font-bold hover:underline">{{ title }}</NuxtLink>
    </div>
    <div class="mt-3">
      <span v-for="tag in tags" :key="tag.name" class="px-2 py-1 font-bold mr-2 mb-2 inline-block rounded dark:bg-violet-400 dark:text-gray-900">{{ tag.name }}</span>
    </div>
    <div class="flex items-center justify-between mt-4">
      <NuxtLink rel="noopener noreferrer" :to="`/${id}`" class="hover:underline dark:text-violet-400">Read more</NuxtLink>
      <div class="flex items-center">
        <img :src="user.profile_image_url" alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500">
        <span class="dark:text-gray-400 truncate">{{ user.id }}</span>
      </div>
    </div>
  </div>
</template>
