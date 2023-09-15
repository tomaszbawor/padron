<script lang="ts" setup>
import PadMenuButton from '~/components/menu/PadMenuButton.vue'
import PadMenu from '~/components/menu/PadMenu.vue'
</script>

<template>
  <header class="text-6xl text-center mt-10 font-headers">
    Padron
  </header>
  <p class="text-center text-xl pt-1 font-headers">
    Browser Based RPG
  </p>

  <PadMenu>
    <PadMenuButton link="/character/creation">
      New Game
    </PadMenuButton>
    <PadMenuButton>Continue</PadMenuButton>
    <PadMenuButton>Options</PadMenuButton>
    <PadMenuButton>About</PadMenuButton>
  </PadMenu>
</template>

<style scoped></style>
