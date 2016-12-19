<template>
  <div>
    <div>
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8">
        <chart></chart>
      </div>
    </div>
    <!--<div v-for="(bike, index) in bikes" class="row">
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8">
        <h6>Intersection: {{bike.intersection | capitalize}}</h6>
        <chart :bike-data="bike.bike_data"></chart>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1">
        <mdl-button id="menu-example-2" icon>
          <i class="material-icons">more_vert</i>
        </mdl-button>
        <mdl-menu for="menu-example-2">
          <mdl-menu-item>Option 1</mdl-menu-item>
          <mdl-menu-item disabled="disabled">Disabled Action</mdl-menu-item>
          <mdl-menu-item>Other Action</mdl-menu-item>
        </mdl-menu>
      </div>
    </div>-->
  </div>
    <!--<div v-for="bike in bikes" class="col-xs">
      <h6>Intersection: {{bike.intersection | capitalize}}</h6>
      <div class="row">
        <div class="bar">
          <mdl-button id="menu-example-2" icon>
            <i class="material-icons">more_vert</i>
          </mdl-button>
          <mdl-menu for="menu-example-2">
            <mdl-menu-item>Option 1</mdl-menu-item>
            <mdl-menu-item disabled="disabled">Disabled Action</mdl-menu-item>
            <mdl-menu-item>Other Action</mdl-menu-item>
          </mdl-menu>
        </div>
        <div id="example-1">
          <button v-on:click="makeChart()">Add 1</button>
        </div>
      </div>
    </div>-->
</template>

<script>
import Chart from 'src/components/Chart.vue' // Chart component

export default {
  name: 'Data',
  components: {
    Chart
  },
  data () {
    return {
      bikes: {}
    }
  },
  created: function () {
    // this.getAllBikes()
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      if (value.indexOf(' ') !== -1) {
        let capitalizedValue = ''
        var valArr = value.split(' ')
        for (var i = 0; i < valArr.length; i++) {
          capitalizedValue += valArr[i].charAt(0).toUpperCase() + valArr[i].slice(1)
          if (i !== valArr.length - 1) {
            capitalizedValue += ' '
          }
        }
        return capitalizedValue
      }
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    reverseMessage: function () {
      this.btnMessage = "Testing the Vue 'once' directive"
    },
    nameChange: function () {
      this.fullName = 'John Doe'
    },
    getAllBikes: function () {
      this.$http.get('http://localhost:3000/bikes')
        .then(function (data) {
          this.arrToObj(data.body)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    arrToObj: function (data, callback) {
      var rv = {}
      for (var i = 0; i < data.length; ++i) {
        rv[i] = data[i]
      }
      this.bikes = rv
    }
  },
  computed: {
    reversedMessage: function () {
      return this.msg.split('').reverse().join('')
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var name = newValue.split(' ')
        this.firstName = name[0]
        this.lastName = name[name.length - 1]
      }
    }
  }
}
</script>

<style scoped>
  h6 {text-align: center;}
  #lang-switcher {
  	position: absolute;
  	top: 20px;
  	right: 90px;
  }
  .center-items{
    flex-direction: column;
    align-items: center;
  }
  .bar {
    float: left;
    background: transparent;
    color: white;
  }
</style>
