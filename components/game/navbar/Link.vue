<script lang="ts" setup>
defineProps<{
  label: string
  link: string
}>()
</script>

<template>
  <NuxtLink
    :to="link"
    class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
    active-class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  >
    {{ label }}
  </NuxtLink>
</template>
