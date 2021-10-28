<template>
  <div>
    <b-button 
      @click="action"
      type="is-dark"
      v-for="letter in polishLetters"
      :key="letter" 
      class="mx-1 my-1 is-uppercase">
      {{ letter }}
    </b-button>
  </div>
</template>

<script>
import { EventBus } from './../main.js'
export default {
  name: 'Letters',
  data: function () {
    return {
      polishLetters: ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż']
    }
  },
  methods: {
    action () {
      EventBus.$emit('hitZombie')
    }
  }
}
</script>