<script setup lang="ts">
</script>

<template>
  <GameContainer>
    <div class="flex flex-row">
      <GameSidebar />
      <div>
        <slot />
      </div>
    </div>
  </GameContainer>
</template>
