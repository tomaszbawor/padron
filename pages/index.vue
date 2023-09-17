<script lang="ts" setup>
import PadMenuButton from '~/components/menu/PadMenuButton.vue'
import PadMenu from '~/components/menu/PadMenu.vue'
</script>

<template>
  <header class="mt-10 text-center font-headers text-6xl">
    Padron
  </header>
  <p class="pt-1 text-center font-headers text-2xl">
    Browser Based RPG
  </p>

  <PadMenu>
    <PadMenuButton link="/character/creation">
      New Game
    </PadMenuButton>
    <PadMenuButton link="/game">
      Continue
    </PadMenuButton>
    <PadMenuButton link="/options">
      Options
    </PadMenuButton>
    <PadMenuButton>About</PadMenuButton>
  </PadMenu>
</template>

<style scoped></style>
