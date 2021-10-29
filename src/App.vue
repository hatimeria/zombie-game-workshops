<!--WS: Explain Vue file structure (template, script, style)-->
<template>
  <div id="app" class="container">
    <page-title />
    <game-board />
  </div>
</template>

<script>
// WS: Explain how components work (importing, registering, adding in template)
import PageTitle from './components/PageTitle'
import GameBoard from './components/GameBoard'

export default {
  name: 'App',
  components: {
    PageTitle,
    GameBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
