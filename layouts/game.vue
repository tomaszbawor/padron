<script setup lang="ts">
useSeoMeta({
  title: 'Phadron - RPG',
  description: 'Browser based RPG game',
  ogTitle: 'Phadron - RPG',
  ogDescription: 'Browser based RPG game',
  twitterTitle: 'Phadron - RPG',
  twitterDescription: 'Browser based RPG game',
  twitterCard: 'summary',
  twitterImage: '/social.png',
  ogImage: '/social.png',
  ogUrl: 'https://phadron.xyz',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <GameContainer>
    <GameNavbar />
    <div class="flex flex-row">
      <GameSidebar />
      <div>
        <slot />
      </div>
    </div>
  </GameContainer>
</template>
