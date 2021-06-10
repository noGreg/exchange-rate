<template>
  <div class="page convertion-starter-page">
    <div class="background-video">
      <video autoplay muted loop>
        <source src="../../assets/video/Stock_footage_1.mp4" type="video/mp4">
      </video>
    </div>
    <div 
      class="convertion-container vh-100 d-flex align-items-center justify-content-center"
      :class="{ 'showing-details' : showDetails }"
    >
      <div class="d-flex flex-column w-100 bg-white">
        <div class="convertion-row mb-4 d-flex align-items-center overflow-hidden">
          <div class="convertion-side d-flex flex-column">
            <div class="title">From currency</div>
            <div class="input-group currency-left d-flex flex-nowrap">
              <input type="number" placeholder="1000" v-model="currencyFromQuantity">
              <div class="currency d-flex align-items-center pe-2 ms-2">
                <div class="currency-country-flag">
                  <span class="flag-icon" :class="`flag-icon-${flagCode(currencyFrom)}`"></span>
                </div>
                <div class="currency-selector ms-2 mr-2">
                  <select 
                    name="currencyFrom" 
                    class="border-0"
                    style="max-width: 65px;"
                    :value="`${currencyFrom.currencyCode}_${currencyFrom.countryName.replace(' ', '_')}`" 
                    @change="fromChange"
                  >
                    <option 
                      v-for="(country, index) in countries" 
                      :value="`${country.currencyCode}_${country.countryName.replace(' ', '_')}`" 
                      :key="index"
                    >
                      {{ country.currencyCode }} - {{ country.countryName }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div 
            class="convertion-exchange-invert d-flex align-items-center justify-content-center bg-white"
            @click="invertExchange"
          >
            <font-awesome-icon icon="exchange-alt" />
          </div>
          <div class="convertion-side d-flex flex-column ps-4">
          <div class="title">To currency</div>
            <div class="input-group currency-right d-flex flex-nowrap">
              <input type="number" placeholder="1000" v-model="convertion">
              <div class="currency d-flex align-items-center pe-2 ms-2">
                <div class="currency-country-flag">
                  <span class="flag-icon" :class="`flag-icon-${flagCode(currencyTo)}`"></span>
                </div>
                <div class="currency-selector ms-2 mr-2">
                  <select 
                    name="currencyTo" 
                    class="border-0"
                    style="max-width: 65px;"
                    :value="`${currencyTo.currencyCode}_${currencyTo.countryName.replace(' ', '_')}`" 
                    @change="toChange"
                  >
                    <option 
                      v-for="(country, index) in countries" 
                      :value="`${country.currencyCode}_${country.countryName.replace(' ', '_')}`" 
                      :key="index"
                    >
                      {{ country.currencyCode }} - {{ country.countryName }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid">
          <button class="btn btn-success d-none" :class="{ active: !showDetails }" @click="revealDetails">Get started</button>
        </div>
        <div class="details-container flex-column" :class="{ active: showDetails }">
          <div class="currencies-details d-flex w-100">
            <div class="d-flex flex-grow-1 justify-content-end pe-5">
              <currency-data-cell :value="currencyFrom.currencyCode" title="Currency"  />
              <currency-data-cell :value="currencyFrom.countryName" title="Country"  />
              <currency-data-cell :value="currencyFrom.continentName" title="Continent"  />
              <currency-data-cell :value="currencyFrom.currencySymbol" title="Symbol"  />
            </div>
            <div class="d-flex flex-grow-1 ps-3">
              <currency-data-cell :value="currencyTo.currencyCode" title="Currency"  />
              <currency-data-cell :value="currencyTo.countryName" title="Country"  />
              <currency-data-cell :value="currencyTo.continentName" title="Continent"  />
              <currency-data-cell :value="currencyTo.currencySymbol" title="Symbol"  />
            </div>
          </div>
          <div class="pocket-guide-wrapper mt-3">
            <h4>Quick guide tables</h4>
            <div class="tables-container d-flex">
              <div class="quick-table d-flex flex-column flex-grow-1">
                <header class="d-flex justify-content-between">
                  <strong>{{ currencyFrom.currencyCode }} / {{ currencyTo.currencyCode }}</strong>
                  <span>Rate date: {{ new Date().toLocaleDateString() }}</span>
                </header>
                <quicktable 
                  :currencyFrom="currencyFrom.currencyCode" 
                  :currencyTo="currencyTo.currencyCode"  
                />
              </div>
              <div class="quick-table d-flex flex-column flex-grow-1 ms-3">
                <header class="d-flex justify-content-between">
                  <strong>{{ currencyTo.currencyCode }} / {{ currencyFrom.currencyCode }}</strong>
                  <span>Rate date: {{ new Date().toLocaleDateString() }}</span>
                </header>
                <quicktable 
                  :currencyFrom="currencyTo.currencyCode" 
                  :currencyTo="currencyFrom.currencyCode"  
                />  
              </div>            
            </div>
          </div>  
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
  import Quicktable from "../components/QuickTable.vue"
  import CurrencyDataCell from "../components/CurrencyDataCell.vue"

  export default defineComponent({
    computed: mapState({
      countries: (state : any) => state.countries,
      currencyFrom: (state : any) => state.currencyFrom,
      currencyTo: (state : any) => state.currencyTo,
      convertion: function (state : any) {
        return ((
          +this.currencyFromQuantity * (1 / state.DOPRates[state.currencyFrom.currencyCode]) 
        ) * state.DOPRates[state.currencyTo.currencyCode]).toFixed(4)
      }
    }),
    data: function () {
      return {
        currencyFromQuantity: 1,
        showDetails: false
      }
    },
    methods: {
      flagCode: function (countryObject : any) {
        return countryObject.continentName === "Europe" ? 'eu' : countryObject.countryCode.toLowerCase()
      },
      revealDetails: function () {
        this.showDetails = true
      },
      fromChange: (ev : any) => store.commit("newCurrencyFrom", ev.target.value.split("_")[0]),
      toChange: (ev : any) => store.commit("newCurrencyTo", ev.target.value.split("_")[0]),
      invertExchange: () => store.commit("invertExchange")
    },
    components: {
      Quicktable,
      CurrencyDataCell
    }
  })
</script>

<style scoped>

  /* #region --- GENERAL STYLE --- */

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
      max-width: 720px;
      border-radius: 5px;
      padding: 30px;
      box-shadow: 0 10px 20px #000;
      -webkit-transition: all .3s;
      transition: all .3s;
    }

    .convertion-container.showing-details > div {
      max-width: 1000px;
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

  /* #endregion */

  /* #region --- DETAILS CONTAINER --- */

    .details-container {
      max-height: 0;
      overflow: hidden;
      -webkit-transition: all .3s;
      transition: all .3s;
    }

    .details-container.active {
      max-height: 458px;
    }

    button.active {
      display: inline-block !important;
    }
    
    .currencies-details > div {
      width: 50%;
    }

    .currencies-details > div:first-child {
      border-right: 1px solid #ccc;
      margin-right: 7px;
    }

  /* #endregion */

</style>