<template>
<div class="row center-items">
  <div v-for="bike in bikes" class="col-xs-12">
    <h6>Intersection: {{bike.intersection | capitalize}}</h6>
    <div class="row">
      <div>
        <table class="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th class="mdl-data-table__cell--non-numeric">Day</th>
              <th class="mdl-data-table__cell--non-numeric">Date</th>
              <th>Cyclists</th>
              <th class="mdl-data-table__cell--non-numeric">Time</th>
              <th>Temperature</th>
              <th class="mdl-data-table__cell--non-numeric">Weather Details</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in bike.bike_data">
              <td class="mdl-data-table__cell--non-numeric">{{data.day}}</td>
              <td class="mdl-data-table__cell--non-numeric">{{data.date}}</td>
              <td>{{data.cyclists}}</td>
              <td class="mdl-data-table__cell--non-numeric">{{data.time}}</td>
              <td>{{data.temperature}}</td>
              <td class="mdl-data-table__cell--non-numeric">{{data.details}}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loadInfo: 'You loaded this page on ' + new Date(),
      btnMessage: 'testing the button',
      url: 'http://www.ign.com',
      firstName: 'Jordan',
      lastName: 'Turner',
      bikes: {},
      formatedBikes: {}
    }
  },
  created: function () {
    this.getAllBikes()
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
    arrToObj: function (data) {
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
