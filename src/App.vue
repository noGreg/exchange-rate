<template>
  <div>
    <component v-bind:is="currentPage.component"></component>
  </div>
</template>

<script lang="ts">
  // -- Packages
  import { defineComponent } from 'vue'

  // -- Modules
  import ConvertionStarter from './views/pages/ConvertionStarter.vue'
  // import ConvertionTable from './views/pages/QuickTable.vue'

  const pages = [
    { component: ConvertionStarter },
    // { component: ConvertionTable }
  ]

  export default defineComponent({
    name: 'App',
    data: () => ({
      currentPage: pages[0]
    }),
    components: {
      ConvertionStarter,
      // ConvertionTable
    }
  })
</script>

<style>
  #app {
    overflow: hidden;
    position: absolute;
    height: 100vh;
    width: 100%;
  }
</style>
