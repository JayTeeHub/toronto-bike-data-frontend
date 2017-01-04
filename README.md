# vue-bike-app
Link to website https://toronto-bike-visualization.firebaseapp.com/#/

For now, the only data being used is the bicycle count data which gives metrics on how many bicyclist moved throughout the city of Toronto in 2014 across different major intersections where electronic tracking equipment was setup

The basic webpage shows this bicycle count data from one intersection in a simple HTML table

The build of this webapp is Vue2, Vue Router, Vue Resource, and MDL

The Home route now has a blurb about the webpage

There is a backend to this project that can be found here: https://github.com/JayTeeHub/toronto-bike-data-backend

If you have any questions or feedback feel free to reach out to me at jordanturnergo@gmail.com

## Data Visualization
D3JS has been implemented into the Data page showing a D3 line chart and a D3 bar graph, both of which visualize 7 days worth of bike data traffic.

Planning on using MapBox for the Map page

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
