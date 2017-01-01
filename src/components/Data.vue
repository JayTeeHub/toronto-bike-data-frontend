<template>
  <div>
    <div>
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8">
        <chart :bike-data="bikes"></chart>
      </div>
    </div>
  </div>
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
