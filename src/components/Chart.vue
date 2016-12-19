<template>
  <!--<div class='ct-chart ct-golden-section chart'></div>-->
  <svg id='visualization'></svg>
</template>

<script>
export default {
  name: 'chart',
  // props: ['bikeData'],
  data () {
    return {
      bikeSampleData: [
        {
          'timestamp': '00:00:00',
          'cyclists': '5',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '01:00:00',
          'cyclists': '3',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '02:00:00',
          'cyclists': '5',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '03:00:00',
          'cyclists': '1',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '04:00:00',
          'cyclists': '4',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '05:00:00',
          'cyclists': '7',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '06:00:00',
          'cyclists': '19',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '07:00:00',
          'cyclists': '67',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '08:00:00',
          'cyclists': '250',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '09:00:00',
          'cyclists': '226',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '10:00:00',
          'cyclists': '89',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '11:00:00',
          'cyclists': '67',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '12:00:00',
          'cyclists': '71',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '13:00:00',
          'cyclists': '71',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '14:00:00',
          'cyclists': '77',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '15:00:00',
          'cyclists': '59',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '16:00:00',
          'cyclists': '62',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '17:00:00',
          'cyclists': '60',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '18:00:00',
          'cyclists': '44',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '19:00:00',
          'cyclists': '41',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '20:00:00',
          'cyclists': '15',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '21:00:00',
          'cyclists': '30',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '22:00:00',
          'cyclists': '15',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        }, {
          'timestamp': '23:00:00',
          'cyclists': '16',
          'weather': '27',
          'weather_details': 'no rain',
          'date': '2014-08-01'
        },
        {
          'timestamp': '00:00:00',
          'cyclists': '14',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '01:00:00',
          'cyclists': '12',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '02:00:00',
          'cyclists': '3',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '03:00:00',
          'cyclists': '6',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '04:00:00',
          'cyclists': '3',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '05:00:00',
          'cyclists': '3',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '06:00:00',
          'cyclists': '5',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '07:00:00',
          'cyclists': '11',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '08:00:00',
          'cyclists': '20',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '09:00:00',
          'cyclists': '38',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '10:00:00',
          'cyclists': '39',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '11:00:00',
          'cyclists': '45',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '12:00:00',
          'cyclists': '44',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '13:00:00',
          'cyclists': '51',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '14:00:00',
          'cyclists': '70',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '15:00:00',
          'cyclists': '66',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '16:00:00',
          'cyclists': '64',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '17:00:00',
          'cyclists': '49',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '18:00:00',
          'cyclists': '56',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '19:00:00',
          'cyclists': '35',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '20:00:00',
          'cyclists': '16',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '21:00:00',
          'cyclists': '24',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '22:00:00',
          'cyclists': '14',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }, {
          'timestamp': '23:00:00',
          'cyclists': '11',
          'weather': '26',
          'weather_details': 'no rain',
          'date': '2014-08-02'
        }
      ]
    }
  },
  mounted () {
    this.makeChart()
  },
  methods: {
    formatData: function () {

    },
    makeChart: function () {
      console.log(window.d3)
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
          .x(function (d) { return x(d.timestamp) })
          .y(function (d) { return y(d.cyclists) })

      // Adds the svg canvas
      var svg = d3.select('#visualization')
          .append('svg')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
          .append('g')
              .attr('transform',
                    'translate(' + margin.left + ',' + margin.top + ')')

      this.bikeSampleData.forEach(function (d) {
        d.timestamp = parseDate(d.timestamp)
        d.cyclists = +d.cyclists
      })

      // Scale the range of the data
      x.domain(d3.extent(this.bikeSampleData, function (d) { return d.timestamp }))
      y.domain([0, d3.max(this.bikeSampleData, function (d) { return d.cyclists })])

      // Nest the entries by symbol
      var dataNest = d3.nest()
          .key(function (d) { return d.date })
          .entries(this.bikeSampleData)

      // set the colour scale
      var color = d3.scaleOrdinal(d3.schemeCategory10)

      // Loop through each symbol / key
      dataNest.forEach(function (d, i) {
        svg.append('path')
            .attr('class', 'line')
            .style('stroke', function () { // Add the colours dynamically
              d.color = color(d.key)
              return d.color
            })
            .style('fill', 'none')
            .attr('d', cyclistsLine(d.values))

        var y = i * legendSpacing // Set the Y value of the legend for each data set

        var legendDate = new Date(d.key)
        legendDate.setDate(legendDate.getDate() + 1)

        legend = svg.append('g')
           .attr('class', 'legend')
           .attr('transform', 'translate(' + legendX + ',' + y + ')')

        legend.append('rect')
          .attr('x', width - 18)
          .attr('y', 18)
          .attr('width', 18)
          .attr('height', 18)
          .style('fill', d.color)

        legend.append('text')
          .style('font', '14px Roboto')
          .attr('x', width - 24)
          .attr('y', 25)
          .attr('dy', '.35em')
          .style('text-anchor', 'end')
          .text(formatDate(legendDate))
      })

      // Add the X Axis
      svg.append('g')
          .attr('class', 'axis')
          .attr('transform', 'translate(0,' + height + ')')
          .style('font', '11px Roboto')
          .call(d3.axisBottom(x).ticks(d3.timeHour, 1).tickFormat(d3.timeFormat('%-I %p')))

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
        .text('Cyclists vs Time')
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
