<template>
  <div id="app" class="container">
    <h1 class="title">Gra zombie</h1>
    <p class="mb-3">Spróbuj odgadnąć hasło, zanim dopadnie Cię zombie!</p>
    <zombie-figure v-if="isGameStarted" />
    <b-button @click="startGame">START</b-button>
    <secret-word :secret="secret" v-if="isGameStarted" />
    <div class="columns">
      <div class="column">
        <keyboard @action="action" />
      </div>
      <div class="column">
        <p>Pomyłki: 0/6</p>
      </div>
    </div>
  </div>
</template>

<script>
import Keyboard from './components/Keyboard'
import SecretWord from './components/SecretWord'
import ZombieFigure from './components/ZombieFigure'

export default {
  name: 'App',
  components: {
    Keyboard,
    SecretWord,
    ZombieFigure
  },
  data: function () {
    return {
      secret: 'apokalipsa zombie',
      zombie: '',
      zombieId: null,
      isGameStarted: false
    }
  },
  methods: {
    startGame () {
      //TODO: replace 11 & 6 with length of zombies array, zombies array still needs to be done separately
      this.isGameStarted = true;
    },
    action() {
      console.log('aha')
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
