<script setup lang="ts">
</script>

<template>
  <aside id="default-sidebar" class="left-0 top-0 z-40 h-[768px] w-64" aria-label="Sidebar">
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

        <li>
          <GameSideBarLink label="Arena" badge="In Fight">
            <template #icon>
              <Icon name="game-icons:axe-sword" />
            </template>
          </GameSideBarLink>
        </li>
        <li>
          <GameSideBarLink label="Configuration">
            <template #icon>
              <Icon name="game-icons:big-gear" />
            </template>
          </GameSideBarLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
