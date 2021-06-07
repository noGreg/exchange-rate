<template>
  <div class="d-flex flex-column align-items-center ms-3">
      <span class="badge bg-primary">{{ value }}</span>
      <span class="text-secondary">{{ title }}</span>
    </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      title: String,
      value: String
    }
  })

</script>
