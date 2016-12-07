<template>
  <!--<div class='ct-chart ct-golden-section chart'></div>-->
  <svg id='visualization'></svg>
</template>

<script>
export default {
  name: 'chart',
  props: ['bikeData'],
  data () {
    return {
      bike_data: this.bikeData,
      data: [{
        'creat_time': '2013-03-12 15:09:04',
        'record_status': 'ok',
        'roundTripTime': '16'
      }, {
        'creat_time': '2013-03-12 14:59:06',
        'record_status': 'ok',
        'roundTripTime': '0'
      }, {
        'creat_time': '2013-03-12 14:49:04',
        'record_status': 'ok',
        'roundTripTime': '297'
      }, {
        'creat_time': '2013-03-12 14:39:06',
        'record_status': 'ok',
        'roundTripTime': '31'
      }, {
        'creat_time': '2013-03-12 14:29:03',
        'record_status': 'ok',
        'roundTripTime': '0'
      }]
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
      var margin = {top: 20, right: 20, bottom: 30, left: 50}
      var width = 960 - margin.left - margin.right
      var height = 500 - margin.top - margin.bottom
      var parseDate = window.d3.timeParse('%Y-%m-%d %H:%M:%S')
      var x = window.d3.scaleTime()
        .range([0, width])

      var y = window.d3.scaleLinear()
        .range([height, 0])

      var xAxis = window.d3.axisBottom()
        .scale(x)
        .tickFormat(window.d3.timeFormat('%H:%m'))

      var yAxis = window.d3.axisLeft()
        .scale(y)

      var line = window.d3.line()
        .x(function (d) { return x(d.creat_time) })
        .y(function (d) { return y(d.roundTripTime) })

      var svg = window.d3.select('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      this.data.forEach(function (d) {
        d.creat_time = parseDate(d.creat_time)
        d.roundTripTime = +d.roundTripTime
      })

      x.domain(window.d3.extent(this.data, function (d) { return d.creat_time }))
      y.domain(window.d3.extent(this.data, function (d) { return d.roundTripTime }))

      svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis)

      svg.append('g')
          .attr('class', 'y axis')
          .call(yAxis)
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '.71em')
          .style('text-anchor', 'end')
          .text('return time(ms)')

      svg.append('path')
          .datum(this.data)
          .attr('class', 'line')
           .style('fill', 'none')
      .style('stroke', 'blue')
          .attr('d', line)
      /* new window.Chartist.Line('.chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      }) */
    }
  }
}
</script>
<style scoped>
  #visualization {
    height: 500px;
    width: 100%;
  }
</style>
