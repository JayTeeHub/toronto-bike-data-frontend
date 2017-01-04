<template>
  <div id="app">
    <img src="./assets/logo.png">
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Welcome</h2>
        </div>
        <div class="mdl-card__supporting-text">
        This website is dedicated to visualizing bike data supplied by the City of Toronto. Specifically, this website
          visualizes bicycle traffic throughout the downtown core. It is visualized in two ways; through charts/graphs
          using D3JS and by using a map (coming soon).
        </div>
        <div class="mdl-card__supporting-text">
        The purpose of visualizing this data is to help better understand the amount of bike traffic the City of Toronto
        has on its roads, when it occurs the most, and where it occurs the most. Check out the visualization below.
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to="/data">
            <i class="material-icons">timeline</i>
          </router-link>
          <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to="/map">
            <i class="material-icons">explore</i>
          </router-link>
        </div>
        <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">share</i>
          </button>
        </div>
      </div>
  </div>
</template>

<style scoped>
  body{
    font-family: 'Avenir', 'Helvetica', sans-serif;
  }
  .demo-card-wide.mdl-card {
    width: 600px;
    display: table;
    margin: 0 auto;
  }
  .demo-card-wide > .mdl-card__title {
    color: #fff;
    height: 176px;
    background: url('https://getmdl.io/assets/demos/welcome_card.jpg') center / cover;
  }
  .demo-card-wide > .mdl-card__menu {
    color: #fff;
  }
</style>
