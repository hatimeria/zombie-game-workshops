<template>
  <div id="app" class="container">
    <h1 class="title">Gra zombie</h1>
    <p class="mb-3">Spróbuj odgadnąć hasło, zanim dopadnie Cię zombie!</p>
    <secret-word :secret="secret" />
    <div class="columns">
      <div class="column">
        <letters-table />
      </div>
      <div class="column">
        <p>Pomyłki: 0/6</p>
      </div>
    </div>
  </div>
</template>

<script>
import LettersTable from './components/LettersTable'
import SecretWord from './components/SecretWord'

export default {
  name: 'App',
  components: {
    LettersTable,
    SecretWord
  },
  data: function () {
    return {
      secret: 'apokalipsa zombie'
    }
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
