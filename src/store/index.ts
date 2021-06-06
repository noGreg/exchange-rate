// -- Packages
import { createStore } from 'vuex'

// -- MOdules
import countries from './countries'

console.log({ countries })

export interface Country {
  countryCode: string,
  countryName: string,
  currencyCode: string,
  population: string,
  capital: string,
  continentName: string
}

export interface State {
  countries: Array<Country>
}

// IS REALLY NEEDED AN INJECTION KEY ???

export const store = createStore<State>({
  state() {
    return {
      countries,
      currencyFrom: countries[0],
      currencyTo: countries[1]
    }
  }
})