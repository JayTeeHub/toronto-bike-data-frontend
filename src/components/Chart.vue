<template>
  <!--<div class='ct-chart ct-golden-section chart'></div>-->
  <div>
    <svg id='visualization-line-chart'></svg>
    <svg id='visualization-bar-graph'></svg>
  </div>
</template>

<script>
export default {
  name: 'chart',
  data () {
    return {
      bikeSampleData: [
        {
          'date': '8/1/14',
          'timestamp': '00:00:00',
          'cyclists': 5,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '01:00:00',
          'cyclists': 3,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '02:00:00',
          'cyclists': 5,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '03:00:00',
          'cyclists': 1,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '04:00:00',
          'cyclists': 4,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '05:00:00',
          'cyclists': 7,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '06:00:00',
          'cyclists': 19,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '07:00:00',
          'cyclists': 67,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '08:00:00',
          'cyclists': 250,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '09:00:00',
          'cyclists': 226,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '10:00:00',
          'cyclists': 89,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '11:00:00',
          'cyclists': 67,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '12:00:00',
          'cyclists': 71,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '13:00:00',
          'cyclists': 71,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '14:00:00',
          'cyclists': 77,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '15:00:00',
          'cyclists': 59,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '16:00:00',
          'cyclists': 62,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '17:00:00',
          'cyclists': 60,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '18:00:00',
          'cyclists': 44,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '19:00:00',
          'cyclists': 41,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '20:00:00',
          'cyclists': 15,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '21:00:00',
          'cyclists': 30,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '22:00:00',
          'cyclists': 15,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/1/14',
          'timestamp': '23:00:00',
          'cyclists': 16,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '00:00:00',
          'cyclists': 14,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '01:00:00',
          'cyclists': 12,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '02:00:00',
          'cyclists': 3,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '03:00:00',
          'cyclists': 6,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '04:00:00',
          'cyclists': 3,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '05:00:00',
          'cyclists': 3,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '06:00:00',
          'cyclists': 5,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '07:00:00',
          'cyclists': 11,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '08:00:00',
          'cyclists': 20,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '09:00:00',
          'cyclists': 38,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '10:00:00',
          'cyclists': 39,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '11:00:00',
          'cyclists': 45,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '12:00:00',
          'cyclists': 44,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '13:00:00',
          'cyclists': 51,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '14:00:00',
          'cyclists': 70,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '15:00:00',
          'cyclists': 66,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '16:00:00',
          'cyclists': 64,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '17:00:00',
          'cyclists': 49,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '18:00:00',
          'cyclists': 56,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '19:00:00',
          'cyclists': 35,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '20:00:00',
          'cyclists': 16,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '21:00:00',
          'cyclists': 24,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '22:00:00',
          'cyclists': 14,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/2/14',
          'timestamp': '23:00:00',
          'cyclists': 11,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '00:00:00',
          'cyclists': 6,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '01:00:00',
          'cyclists': 9,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '02:00:00',
          'cyclists': 3,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '03:00:00',
          'cyclists': 5,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '04:00:00',
          'cyclists': 0,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '05:00:00',
          'cyclists': 2,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '06:00:00',
          'cyclists': 7,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '07:00:00',
          'cyclists': 13,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '08:00:00',
          'cyclists': 13,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '09:00:00',
          'cyclists': 20,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '10:00:00',
          'cyclists': 40,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '11:00:00',
          'cyclists': 40,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '12:00:00',
          'cyclists': 43,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '13:00:00',
          'cyclists': 52,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '14:00:00',
          'cyclists': 51,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '15:00:00',
          'cyclists': 58,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '16:00:00',
          'cyclists': 48,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '17:00:00',
          'cyclists': 39,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '18:00:00',
          'cyclists': 34,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '19:00:00',
          'cyclists': 35,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '20:00:00',
          'cyclists': 25,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '21:00:00',
          'cyclists': 17,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '22:00:00',
          'cyclists': 6,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/3/14',
          'timestamp': '23:00:00',
          'cyclists': 12,
          'weather': 27,
          'weather_details': 'no rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '00:00:00',
          'cyclists': 9,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '01:00:00',
          'cyclists': 8,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '02:00:00',
          'cyclists': 0,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '03:00:00',
          'cyclists': 4,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '04:00:00',
          'cyclists': 2,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '05:00:00',
          'cyclists': 2,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '06:00:00',
          'cyclists': 3,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '07:00:00',
          'cyclists': 14,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '08:00:00',
          'cyclists': 20,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '09:00:00',
          'cyclists': 29,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '10:00:00',
          'cyclists': 36,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '11:00:00',
          'cyclists': 52,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '12:00:00',
          'cyclists': 55,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '13:00:00',
          'cyclists': 63,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '14:00:00',
          'cyclists': 42,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '15:00:00',
          'cyclists': 44,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '16:00:00',
          'cyclists': 31,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '17:00:00',
          'cyclists': 25,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '18:00:00',
          'cyclists': 26,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '19:00:00',
          'cyclists': 24,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '20:00:00',
          'cyclists': 16,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '21:00:00',
          'cyclists': 16,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '22:00:00',
          'cyclists': 10,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/4/14',
          'timestamp': '23:00:00',
          'cyclists': 5,
          'weather': 27,
          'weather_details': '2mm rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '00:00:00',
          'cyclists': 4,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '01:00:00',
          'cyclists': 5,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '02:00:00',
          'cyclists': 0,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '03:00:00',
          'cyclists': 1,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '04:00:00',
          'cyclists': 3,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '05:00:00',
          'cyclists': 13,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '06:00:00',
          'cyclists': 28,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '07:00:00',
          'cyclists': 77,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '08:00:00',
          'cyclists': 258,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '09:00:00',
          'cyclists': 225,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '10:00:00',
          'cyclists': 76,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '11:00:00',
          'cyclists': 41,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '12:00:00',
          'cyclists': 40,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '13:00:00',
          'cyclists': 45,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '14:00:00',
          'cyclists': 36,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '15:00:00',
          'cyclists': 48,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '16:00:00',
          'cyclists': 46,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '17:00:00',
          'cyclists': 90,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '18:00:00',
          'cyclists': 97,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '19:00:00',
          'cyclists': 51,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '20:00:00',
          'cyclists': 48,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '21:00:00',
          'cyclists': 37,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '22:00:00',
          'cyclists': 23,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/5/14',
          'timestamp': '23:00:00',
          'cyclists': 16,
          'weather': 24,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '00:00:00',
          'cyclists': 5,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '01:00:00',
          'cyclists': 2,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '02:00:00',
          'cyclists': 0,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '03:00:00',
          'cyclists': 3,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '04:00:00',
          'cyclists': 2,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '05:00:00',
          'cyclists': 12,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '06:00:00',
          'cyclists': 33,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '07:00:00',
          'cyclists': 99,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '08:00:00',
          'cyclists': 354,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '09:00:00',
          'cyclists': 254,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '10:00:00',
          'cyclists': 72,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '11:00:00',
          'cyclists': 47,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '12:00:00',
          'cyclists': 53,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '13:00:00',
          'cyclists': 100,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '14:00:00',
          'cyclists': 98,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '15:00:00',
          'cyclists': 96,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '16:00:00',
          'cyclists': 66,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '17:00:00',
          'cyclists': 131,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '18:00:00',
          'cyclists': 75,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '19:00:00',
          'cyclists': 73,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '20:00:00',
          'cyclists': 41,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '21:00:00',
          'cyclists': 38,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '22:00:00',
          'cyclists': 22,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/6/14',
          'timestamp': '23:00:00',
          'cyclists': 17,
          'weather': 26,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '00:00:00',
          'cyclists': 3,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '01:00:00',
          'cyclists': 3,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '02:00:00',
          'cyclists': 1,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '03:00:00',
          'cyclists': 2,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '04:00:00',
          'cyclists': 3,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '05:00:00',
          'cyclists': 11,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '06:00:00',
          'cyclists': 31,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '07:00:00',
          'cyclists': 98,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '08:00:00',
          'cyclists': 324,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '09:00:00',
          'cyclists': 267,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '10:00:00',
          'cyclists': 71,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '11:00:00',
          'cyclists': 74,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '12:00:00',
          'cyclists': 62,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '13:00:00',
          'cyclists': 72,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '14:00:00',
          'cyclists': 53,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '15:00:00',
          'cyclists': 66,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '16:00:00',
          'cyclists': 55,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '17:00:00',
          'cyclists': 94,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '18:00:00',
          'cyclists': 95,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '19:00:00',
          'cyclists': 47,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '20:00:00',
          'cyclists': 39,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '21:00:00',
          'cyclists': 15,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '22:00:00',
          'cyclists': 8,
          'weather': 25,
          'weather_details': 'no rain'
        },
        {
          'date': '8/7/14',
          'timestamp': '23:00:00',
          'cyclists': 9,
          'weather': 25,
          'weather_details': 'no rain'
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

    },
    getSampleBikes: function () {
      this.$http.get('/static/sample_data/toronto_bike_data.json')
        .then(function (data) {
          this.bikeSampleData = data.body // Grab bike data from response
          this.makeLineChart()// Render the D3 Chart
        })
        .catch(function (error) {
          console.log(error)
        })
      this.makeLineChart()// Render the D3 Chart
      this.makeBarGraph()// Render D3JS Bar Graph
    },
    makeBarGraph: function () {
      var d3 = window.d3

      // Set the dimensions of the canvas / graph
      var margin = {top: 30, right: 20, bottom: 70, left: 50}
      var width = 960 - margin.left - margin.right
      var height = 500 - margin.top - margin.bottom

      // Set the ranges
      let x = d3.scaleBand()
          .range([0, width])
          .padding(0.1)
      let y = d3.scaleLinear()
          .range([height, 0])

      // Adds the svg canvas
      var svg = d3.select('#visualization-bar-graph')
          .append('svg')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
          .append('g')
              .attr('transform',
                    'translate(' + margin.left + ',' + margin.top + ')')

      // format the data
      this.bikeSampleData.forEach(function (d) {
        d.cyclists = +d.cyclists
      })

      // Scale the range of the data in the domains
      x.domain(this.bikeSampleData.map(function (d) { return d.date }))
      y.domain([0, d3.max(this.bikeSampleData, function (d) { return d.cyclists })])

      // append the rectangles for the bar chart
      svg.selectAll('.bar')
          .data(this.bikeSampleData)
        .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', function (d) { return x(d.date) })
          .attr('width', x.bandwidth())
          .attr('y', function (d) { return y(d.cyclists) })
          .attr('height', function (d) { return height - y(d.cyclists) })
        .style('fill', '#0065a4')

      // add the x Axis
      svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))

      // text label for the x axis
      svg.append('text')
          .attr('transform',
                'translate(' + (width / 2) + ' ,' +
                               (height + margin.top + 20) + ')')
          .style('text-anchor', 'middle')
          .style('font', '16px Roboto')
          .text('Dates')

      // add the y Axis
      svg.append('g')
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
        .text('Number of Cyclists Each Day -- Adelaide & Brant')
    },
    makeLineChart: function () {
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
      var svg = d3.select('#visualization-line-chart')
          .append('svg')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
          .append('g')
              .attr('transform',
                    'translate(' + margin.left + ',' + margin.top + ')')

      // Format JSON data for the line chart
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
        legendDate.setDate(legendDate.getDate())// The data is one day off for some reason so we add an extra day.

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
  #visualization-line-chart {
    height: 500px;
    width: 960px;
  }
  #visualization-bar-graph {
    height: 500px;
    width: 960px;
  }
  svg:last-child{
    padding-top: 15px;
  }
  .bar { fill: #0065a4; }

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
