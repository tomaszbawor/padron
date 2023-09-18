<script setup lang="ts">
import { useAvailableTabs } from '~/store/availableTabsStore'

const tabsStore = useAvailableTabs()
</script>

<template>
  <nav class="h-16 border-gray-200 bg-white dark:bg-gray-900">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <p class="flex items-center">
        <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Phadron</span>
      </p>

      <div id="navbar-cta" class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
        <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
          <li v-for="tab in tabsStore.tabs" :key="tab.label">
            <GameNavbarLink :link="tab.link" :label="tab.label" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
