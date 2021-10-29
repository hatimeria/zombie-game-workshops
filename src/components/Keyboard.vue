<template>
  <div class="keyboard mx-auto">
  <!--    Dodaj wydarzenie po kliku-->
  <!--    WS: Explain v-for directive-->
  <b-button
    type="is-dark"
    v-for="letter in polishLetters"
    :key="letter"
    class="mx-1 my-1 is-uppercase">
<!--    WS: Explain what {{}} is for-->
    {{ letter }}
  </b-button>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',
  // WS Explain props
  props: {
    makeGuess: Function
  },
  data: function () {
    return {
      // WS: Explain what is array and how it works
      polishLetters: ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż']
    }
  },
  methods: {
    chooseLetter () {
      // WS: Explain emitting event
      this.$emit('makeGuess')
    }
  }
}
</script>

<style>
.keyboard {
  max-width: 500px;
}
</style>