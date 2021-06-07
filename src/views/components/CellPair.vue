<template>  
  <td>{{ qty }}</td>
  <td class="left-arrow">{{ convertion }}</td>
</template>

<script lang="ts">

  import { defineComponent } from 'vue'
  import { mapState } from 'vuex'

  export default defineComponent({
    computed: mapState({
      convertion: function (state : any) {
        return (( 
          this.qty * (
            this.qty / state.DOPRates[this.currencyFromCode]
          ) 
        ) * state.DOPRates[this.currencyToCode]).toLocaleString()
      }
    }),
    props: ['qty', 'currencyFromCode', 'currencyToCode']
  })

</script>

<style scoped>

  td.left-arrow {
    position: relative;
  }

  td.left-arrow::before {
    content: "➠";
    position: absolute;
    left: -7px;
    color: #27ae60;    
  }

</style>