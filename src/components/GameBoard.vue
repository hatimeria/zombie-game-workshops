<template>
  <div>
    <zombie-figure v-if="isGameStarted" />
    <secret-word :secret="secret" v-if="isGameStarted" />
    <b-button @click="startGame" class="my-3" v-else>
      START
    </b-button>
    <p class="mb-3">
      Pomyłki: 0/6
    </p>
    <keyboard @action="action" />
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
