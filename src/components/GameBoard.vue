<template>
  <div>
<!--    Zaimportuj i dodaj zombie-->
<!--    WS: Explain v-if/v-else-->
    <secret-word :secret="secret" v-if="isGameStarted" />
<!--    Dodaj wydarzenie po kliku-->
<!--    WS: Explain events (@click, but also @makeGuess below)-->
    <b-button class="my-3" v-else>
      START
    </b-button>
    <p class="mb-3">
      Pomyłki: 0/6
    </p>
    <keyboard @makeGuess="makeGuess" />
  </div>
</template>

<script>
import { EventBus } from './../main.js'
import Keyboard from './Keyboard'
import SecretWord from './SecretWord'

export default {
  name: 'App',
  components: {
    Keyboard,
    SecretWord
  },
  // WS: Explain how data and methods work, explain type of variables
  data: function () {
    return {
      secret: 'apokalipsa zombie',
      zombie: '',
      zombieId: null,
      isGameStarted: false
    }
  },
  methods: {
    startGame() {
      // Zmień isGameStarted
    },
    makeGuess() {
      EventBus.$emit('moveZombie', 'is-hited')
    }
  }
}
</script>
