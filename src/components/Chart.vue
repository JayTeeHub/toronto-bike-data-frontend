<template>
  <!--<div class='ct-chart ct-golden-section chart'></div>-->
  <svg id='visualization'></svg>
</template>

<script>
export default {
  name: 'chart',
  data () {
    return {
      bikeSampleData: [
        {
          'timeline': '00:00:00',
          'cyclists': '5',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '01:00:00',
          'cyclists': '3',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '02:00:00',
          'cyclists': '5',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '03:00:00',
          'cyclists': '1',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '04:00:00',
          'cyclists': '4',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '05:00:00',
          'cyclists': '7',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '06:00:00',
          'cyclists': '19',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '07:00:00',
          'cyclists': '67',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '08:00:00',
          'cyclists': '250',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '09:00:00',
          'cyclists': '226',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '10:00:00',
          'cyclists': '89',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '11:00:00',
          'cyclists': '67',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '12:00:00',
          'cyclists': '71',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '13:00:00',
          'cyclists': '71',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '14:00:00',
          'cyclists': '77',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '15:00:00',
          'cyclists': '59',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '16:00:00',
          'cyclists': '62',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '17:00:00',
          'cyclists': '60',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '18:00:00',
          'cyclists': '44',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '19:00:00',
          'cyclists': '41',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '20:00:00',
          'cyclists': '15',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '21:00:00',
          'cyclists': '30',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '22:00:00',
          'cyclists': '15',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timeline': '23:00:00',
          'cyclists': '16',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        },
        {
          'timeline': '00:00:00',
          'cyclists': '14',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '01:00:00',
          'cyclists': '12',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '02:00:00',
          'cyclists': '3',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '03:00:00',
          'cyclists': '6',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '04:00:00',
          'cyclists': '3',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '05:00:00',
          'cyclists': '3',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '06:00:00',
          'cyclists': '5',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '07:00:00',
          'cyclists': '11',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '08:00:00',
          'cyclists': '20',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '09:00:00',
          'cyclists': '38',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '10:00:00',
          'cyclists': '39',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '11:00:00',
          'cyclists': '45',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '12:00:00',
          'cyclists': '44',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '13:00:00',
          'cyclists': '51',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '14:00:00',
          'cyclists': '70',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '15:00:00',
          'cyclists': '66',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '16:00:00',
          'cyclists': '64',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '17:00:00',
          'cyclists': '49',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '18:00:00',
          'cyclists': '56',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '19:00:00',
          'cyclists': '35',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '20:00:00',
          'cyclists': '16',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '21:00:00',
          'cyclists': '24',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '22:00:00',
          'cyclists': '14',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timeline': '23:00:00',
          'cyclists': '11',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }
      ]
    }
  },
  created () {

  },
  mounted () {
    this.getSampleBikes()
  },
  methods: {
    formatData: function () {
      window.alert('test')
    },
    getSampleBikes: function () {
      this.$http.get('/static/sample_data/toronto_bike_data.json')
        .then(function (data) {
          this.bikeSampleData = data.body // Grab bike data from response
          this.makeChart()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    makeChart: function () {
      var d3 = window.d3

      // Set the dimensions of the canvas / graph
      var margin = {top: 30, right: 20, bottom: 70, left: 50}
      var width = 960 - margin.left - margin.right
      var height = 500 - margin.top - margin.bottom

      var legendSpacing = 25 // Used to apply spacing between each legen entry
      var legendX = 0 // Set the x value of the legend

      let legend = null // Initialize the legend

      let parseDate = d3.timeParse('%H:%M:%S') // Parse the date / time
      let formatDate = d3.timeFormat('%A, %B %-d, %Y')

      // Set the ranges
      let x = d3.scaleTime().range([0, width])
      let y = d3.scaleLinear().range([height, 0])

      // Define the line
      var cyclistsLine = d3.line()
          .x(function (d) { return x(d.timeline) })
          .y(function (d) { return y(d.cyclists) })

      // Adds the svg canvas
      var svg = d3.select('#visualization')
          .append('svg')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
          .append('g')
              .attr('transform',
                    'translate(' + margin.left + ',' + margin.top + ')')

      // Call to JSON file to grab sample toronto bike data

      // Format JSON data for the line chart
      this.bikeSampleData.forEach(function (d) {
        d.timeline = parseDate(d.timeline)
        d.cyclists = +d.cyclists
      })

      // Scale the range of the data
      x.domain(d3.extent(this.bikeSampleData, function (d) { return d.timeline }))
      y.domain([0, d3.max(this.bikeSampleData, function (d) { return d.cyclists })])

      // Nest the entries by symbol
      var dataNest = d3.nest()
          .key(function (d) { return d.date })
          .entries(this.bikeSampleData)

      // set the colour scale
      var color = d3.scaleOrdinal(d3.schemeCategory10)

      // Loop through each value / key
      dataNest.forEach(function (d, i) {
        console.log(d)
        svg.append('path')
            .attr('class', 'line')
            .style('stroke', function () { // Add the colours dynamically
              d.color = color(d.key)
              return d.color
            })
            .style('fill', 'none')
            .attr('d', cyclistsLine(d.values))

        var y = i * legendSpacing // Set the Y value of the legend for each data set

        var legendDate = new Date(d.key)// Get a date object with the date from the current key
        legendDate.setDate(legendDate.getDate() + 1)// The data is one day off for some reason so we add an extra day.

        legend = svg.append('g')// Create a g within the legend and assign it a position
           .attr('class', 'legend')
           .attr('transform', 'translate(' + legendX + ',' + y + ')')

        legend.append('rect')// Create a rectangle within the legend
          .attr('x', width - 18)
          .attr('y', 18)
          .attr('width', 18)
          .attr('height', 18)
          .style('fill', d.color)// Assign the rectangle the colour of the line it's assoicated with

        legend.append('text')// Create a text within the legend
          .style('font', '14px Roboto')
          .attr('x', width - 24)
          .attr('y', 25)
          .attr('dy', '.35em')
          .style('text-anchor', 'end')
          .text(formatDate(legendDate))// Assign the legendDate which will correlate to the current key and rectangle
      })

      // Add the X Axis
      svg.append('g')
          .attr('class', 'axis')
          .attr('transform', 'translate(0,' + height + ')')
          .style('font', '11px Roboto')
          .call(d3.axisBottom(x).ticks(d3.timeHour, 1).tickFormat(d3.timeFormat('%-I %p')))// Adjust the time format in the X Axis

      // text label for the x axis
      svg.append('text')
          .attr('transform',
                'translate(' + (width / 2) + ' ,' +
                               (height + margin.top + 20) + ')')
          .style('text-anchor', 'middle')
          .style('font', '16px Roboto')
          .text('Time Range')

      // Add the Y Axis
      svg.append('g')
          .attr('class', 'axis')
          .style('font', '11px Roboto')
          .call(d3.axisLeft(y))

      // text label for the y axis
      svg.append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - margin.left)
          .attr('x', 0 - (height / 2))
          .attr('dy', '1em')
          .style('font', '16px Roboto')
          .style('text-anchor', 'middle')
          .text('Cyclists')

      // Add title to graph
      svg.append('text')
        .attr('x', (width / 2))
        .attr('y', 0 - (margin.top / 2))
        .attr('text-anchor', 'middle')
        .style('font', ' 16px Roboto')
        .style('text-decoration', 'underline')
        .text('Cyclists vs Time -- Adelaide & Brant')
    }
  }
}
</script>
<style scoped>
  #visualization {
    height: 500px;
    width: 960px;
  }
  .axis path {
      fill: none;
      stroke: #777;
      shape-rendering: crispEdges;
  }
  .axis text {
      font-size: 13px;
  }
  .legend {
    font-size: 12px;
  }
</style>
