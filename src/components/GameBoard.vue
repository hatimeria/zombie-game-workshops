<template>
  <div>
    <secret-word :secret="secret" v-if="isGameStarted" />
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
  data: function () {
    return {
      secret: 'apokalipsa zombie',
      zombie: '',
      zombieId: null,
      isGameStarted: false
    }
  },
  methods: {
    makeGuess() {
      EventBus.$emit('moveZombie', 'is-hited')
    }
  }
}
</script>
