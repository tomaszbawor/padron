<script setup lang="ts">
import { useAvailableTabs } from '~/store/availableTabsStore'

const tabsStore = useAvailableTabs()
</script>

<template>
  <nav class="h-16 border-gray-200 bg-white dark:bg-gray-800">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <p class="flex items-center">
        <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Phadron</span>
      </p>

      <div id="navbar-cta" class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
        <ul class="mt-4 flex flex-row  space-x-8 rounded-lg border-gray-700 bg-gray-800 p-0 font-medium md:mt-0">
          <li v-for="tab in tabsStore.tabs" :key="tab.label">
            <GameNavbarLink :link="tab.link" :label="tab.label" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
