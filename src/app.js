import Vue from 'vue';
// Vue.component('v-select', VueSelect.VueSelect);

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    mounted(){
      this.fetchCountries();
    },
    data: {
      countries: [],
      selectedCountry: null,
      favouriteCountries: [],
      seen: false,
      countrySearch: []
    },
    computed: {
      totalPopulation: function() {
        return this.countries.reduce((runningTotal, country) => {
          return runningTotal + country.population
        }, 0)
      },

    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => this.countries = countries)
      },
      addToFavourites: function(){
        this.favouriteCountries.push(this.selectedCountry)
      }
    }
  })
})
