<template>
  <div class="keyboard mx-auto">
    <b-button 
      @click="chooseLetter"
      type="is-dark"
      v-for="letter in polishLetters"
      :key="letter" 
      class="mx-1 my-1 is-uppercase">
      {{ letter }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',
  props: {
    action: Function
  },
  data: function () {
    return {
      polishLetters: ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż']
    }
  },
  methods: {
    chooseLetter () {
      this.$emit('action')
    }
  }
}
</script>

<style>
.keyboard {
  max-width: 500px;
}
</style>