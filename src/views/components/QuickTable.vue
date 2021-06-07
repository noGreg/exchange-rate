<template>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">{{ currencyFrom }}</th>
          <th scope="col">{{ currencyTo }}</th>
          <th scope="col">{{ currencyFrom }}</th>
          <th scope="col">{{ currencyTo }}</th>
          <th scope="col">{{ currencyFrom }}</th>
          <th scope="col">{{ currencyTo }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(qtyArray, index) in quickComparationQts" :key="`row-${index}`">
          <cell-pair v-for="(qty, i) in qtyArray" 
            :key="`cell-${i}`" 
            :qty="qty" 
            :currencyFromCode="currencyFrom" 
            :currencyToCode="currencyTo" 
          />
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts">

  // -- Packages
  import { defineComponent } from 'vue'

  // -- Modules
  import CellPair from "./CellPair.vue"

  export default defineComponent({    
    props: {
      currencyFrom: String,
      currencyTo: String
    },
    data: () => ({
      quickComparationQts: [ 
        [1,15,45],
        [2,20,50],
        [3,25,100],
        [4,30,250],
        [5,35,500],
        [10,40,1000]
      ]
    }),
    components: {
      CellPair
    }
  })  

</script>

