<template>
  <div>
<!--    Zaimportuj i dodaj zombie-->
<!--    WS: Explain v-if/v-else-->
    <zombie-figure v-if="isGameStarted" />
    <secret-word :secret="secret" v-if="isGameStarted" />
<!--    Dodaj wydarzenie po kliku-->
<!--    WS: Explain events (@click, but also @makeGuess below)-->
    <b-button @click="startGame" class="my-3" v-else>
      START
    </b-button>
    <p class="mb-3">
      Pomyłki: 0/6
    </p>
    <keyboard @makeGuess="makeGuess" :used-letters="usedLetters" :is-game-started="isGameStarted" />
  </div>
</template>

<script>
import { EventBus } from './../main.js'
import Keyboard from './Keyboard'
import SecretWord from './SecretWord'
import ZombieFigure from './ZombieFigure'

export default {
  name: 'App',
  components: {
    Keyboard,
    SecretWord,
    ZombieFigure
  },
  // WS: Explain how data and methods work, explain type of variables
  data: function () {
    return {
      secret: 'apokalipsa zombie',
      zombie: '',
      zombieId: null,
      isGameStarted: false,
      usedLetters: []
    }
  },
  methods: {
    startGame() {
      this.isGameStarted = true
    },
    makeGuess(letter) {
      // WS: Explain push function
      this.usedLetters.push(letter)
      EventBus.$emit('moveZombie', 'is-hited')
    }
  }
}
</script>
