<script setup lang="ts">
</script>

<template>
  <aside id="default-sidebar" class="left-0 top-0 z-40 h-[calc(768px-theme('spacing.16'))] w-64" aria-label="Sidebar">
    <div class="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
      <GameHeroSheet />

      <ul class="space-y-2 font-medium">
        <li>
          <GameSideBarLink label="Stats">
            <template #icon>
              <Icon name="game-icons:yin-yang" />
            </template>
          </GameSideBarLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
