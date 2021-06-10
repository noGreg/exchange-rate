<template>
  <div>
    <ConvertionStarter/>
  </div>
</template>

<script lang="ts">
  // -- Packages
  import { defineComponent } from 'vue'

  // -- Modules
  import ConvertionStarter from './views/pages/ConvertionStarter.vue'
  
  const pages = [
    { component: ConvertionStarter }
  ]

  export default defineComponent({
    name: 'App',
    components: {
      ConvertionStarter
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
