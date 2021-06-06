<template>
  <div class="page convertion-starter-page">
    <div class="background-video">
      <video autoplay muted loop>
        <source src="../../assets/video/Stock_footage_1.mp4" type="video/mp4">
      </video>
    </div>
    <div class="convertion-container vh-100 d-flex align-items-center justify-content-center">
      <div class="d-flex flex-column w-100 bg-white">
        <div class="convertion-row mb-4 d-flex align-items-center overflow-hidden">
          <div class="convertion-side d-flex flex-column">
            <div class="title">From currency</div>
            <div class="input-group currency-left d-flex flex-nowrap">
              <input type="number" placeholder="1000">
              <div class="currency d-flex align-items-center pe-2 ms-2">
                <div class="currency-country-flag">
                  <span class="flag-icon flag-icon-us"></span>
                </div>
                <div class="currency-selector ms-2 mr-2">
                  <select name="currencyFrom" id="" class="border-0">
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="convertion-exchange-invert d-flex align-items-center justify-content-center bg-white">
            <font-awesome-icon icon="exchange-alt" />
          </div>
          <div class="convertion-side d-flex flex-column ps-4">
          <div class="title">To currency</div>
            <div class="input-group currency-right d-flex flex-nowrap">
              <input type="number" placeholder="1000">
              <div class="currency d-flex align-items-center pe-2 ms-2">
                <div class="currency-country-flag">
                  <span class="flag-icon flag-icon-us"></span>
                </div>
                <div class="currency-selector ms-2 mr-2">
                  <select name="currencyTo" id="" class="border-0">
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid">
          <button class="btn btn-success">Get started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // -- Packages
  import { defineComponent } from 'vue'
  import { mapState } from 'vuex'

  // -- Modules
  import { store } from "../../store"

  export default defineComponent({
    computed: mapState({
      countries: (state : any) => state.countries,
      currencyFrom: (state : any) => state.currencyFrom,
      currencyTo: (state : any) => state.currencyTo
    })
  })
</script>



<style scoped>

  .background-video {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 0;
  }

  .background-video > video {
    width: 100%;
  }

  .convertion-container {
    position: relative;
    z-index: 1;
    background-color: rgb(0 0 0 / 60%);
  }
  
  .convertion-container > div {
    max-width: 1000px;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0 10px 20px #000;
  }

  .convertion-side {
    border: 1px solid rgb(204 204 204);
    border-radius: 5px;
    padding: 5px 15px;
  }

  .input-group > input {
    border: 0;
    font-size: 25px;
    font-weight: bold;
    width: calc(100% - 110px);
  }

  .currency-country-flag > span {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-size: cover;
  }

  .currency-selector > select {
    font-size: 20px;
  }

  .convertion-exchange-invert {
    border: 1px solid rgb(204 204 204);
    border-top: 0;
    border-bottom: 0;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    min-width: 50px;
    position: relative;
    margin: 0 -15px;
    cursor: pointer;
  }

</style>