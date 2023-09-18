<script setup lang="ts">
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
