import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    mounted(){
      this.fetchCountries();
    },
    data: {
      countries: [],
    },
    computed: {
      totalPopulation: function() {
        return this.countries.reduce((total, country) => {
          return total += country.population
        }, 0)
      },
    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.setCountries(data))
      },
      setCountries: function(data){
        this.countries = data
      },
      viewMore: function(){
        var checkBox = document.getElementById("view");
        var text = document.getElementById("countryDetails");

          if (checkBox.checked == true) {
            text.style.display = "block";
          } else {
            text.style.display = "none";
          }
        }
      }
  })
})
