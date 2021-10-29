<template>
  <div id="app" class="container">
    <page-title />
    <zombie-figure v-if="isGameStarted" />
    <b-button @click="startGame" class="my-3">
      START
    </b-button>
    <secret-word :secret="secret" v-if="isGameStarted" />
    <p class="mb-3">
      Pomyłki: 0/6
    </p>
    <keyboard @action="action" />
  </div>
</template>

<script>
import { EventBus } from './main.js'
import PageTitle from './components/PageTitle'
import Keyboard from './components/Keyboard'
import SecretWord from './components/SecretWord'
import ZombieFigure from './components/ZombieFigure'

export default {
  name: 'App',
  components: {
    PageTitle,
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
      this.isGameStarted = true
    },
    action() {
      EventBus.$emit('moveZombie', 'is-hited')
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
