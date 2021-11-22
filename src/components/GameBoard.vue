<template>
  <div>
<!--    Zaimportuj i dodaj zombie-->
<!--    WS: Explain v-if/v-else-->
    <zombie-figure v-if="isGameStarted" />
    <secret-word :secret="secret" :used-letters="usedLetters" v-if="isGameStarted" />
<!--    Dodaj wydarzenie po kliku-->
<!--    WS: Explain events (@click, but also @makeGuess below)-->
    <b-button @click="startGame" class="my-3" v-else>
      START
    </b-button>
    <p class="mb-3">
      Pomyłki: {{ mistakeCounter }}/6
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
      usedLetters: [],
      mistakeCounter: 0
    }
  },
  methods: {
    // WS: Shortly explain async and await
    async startGame() {
      // Get total number of records (can be omitted during workshops)
      const responseTotal = await fetch("/api/words?_page=1")
      const total = responseTotal.headers.get('X-Total-Count')

      // WS: Explain getting random number
      const rand = Math.floor(Math.random() * total)
      // WS: Explain fetching data from API
      // WS: Optionally (if there is time) add and explain try/catch
      const response = await fetch(`/api/words/${rand}`)
      // WS: Explain status of the response and error handling
      if (response.status === 200) {
        const data = await response.json()
        this.secret = data.value
        this.isGameStarted = true
      } else {
        console.log(response);
      }
    },
    makeGuess(letter) {
      // WS: Explain push function
      this.usedLetters.push(letter)
      if (this.secret.includes(letter)) {
        EventBus.$emit('moveZombie', 'is-hited')
      } else {
        this.mistakeCounter = this.mistakeCounter + 1
      }
    }
  }
}
</script>
