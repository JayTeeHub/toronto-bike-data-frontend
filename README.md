# vue-bike-app
This project was created on Novemeber 27th and is super basic right now but over the course of the next 2 months will be built into something more robust and detailed so this README will change

This project takes bike data from the City of Toronto's Open Data catalog (http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=7807e03bb8d1e310VgnVCM10000071d60f89RCRD#B) and displays it in a readable fashion.

For now, the only data being used is the bicycle count data which gives metrics on how many bicyclist moved throughout the city of Toronto in 2014 across different major intersections where electronic tracking equipment was setup

The basic webpage shows this bicycle count data from one intersection in a simple HTML table

The build of this webapp is Vue2, Vue Router, Vue Resource, and MDL

There is a backend to this project that can be found here: https://github.com/JayTeeHub/toronto-bike-data-backend

If you have any questions or feedback feel free to reachout to me at jordanturnergo@gmail.com

## Data Visualization
Started to implement native D3 and native Chartlist into the project.
This build currently has a static set of data being loaded into a D3 (latest version) line chart
The goal is to get a static set of intersection data into a D3 line chart and a Chartlist line chart so that a gh-pages branch can be made and used a demo page.

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
