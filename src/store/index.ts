// -- Packages
import { InjectionKey } from 'vue'
import { Store, createStore } from 'vuex'

// -- MOdules
import countries from './countries'
import rates from './rates'

export interface Country {
  countryCode: string,
  countryName: string,
  currencyCode: string,
  population: string,
  capital: string,
  continentName: string
}

export interface State {
  countries: Array<Country>,
  currencyFrom: Country | undefined,
  currencyTo: Country | undefined  
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      countries,      
      currencyFrom: countries[232],
      currencyTo: countries[56],
      DOPRates: rates
    }
  },
  mutations: {
    newCurrencyFrom(state, currencyCode) {
      state.currencyFrom = state.countries.find((c : any) => c.currencyCode === currencyCode)
    },
    newCurrencyTo(state, currencyCode) {
      state.currencyTo = state.countries.find((c : any) => c.currencyCode === currencyCode)
    },
    invertExchange(state) {
      let to = JSON.parse(JSON.stringify(state.currencyTo))
      let from  = JSON.parse(JSON.stringify(state.currencyFrom))

      state.currencyFrom = to
      state.currencyTo = from
    }
  }
})