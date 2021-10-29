<template>
  <div class="keyboard mx-auto">
  <!--    Dodaj wydarzenie po kliku-->
  <!--    WS: Explain v-for directive-->
  <!--    WS: Explain disabled and includes function-->
  <b-button
    @click="chooseLetter(letter)"
    type="is-dark"
    v-for="letter in polishLetters"
    :key="letter"
    class="mx-1 my-1 is-uppercase"
    :disabled="usedLetters.includes(letter)">
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
    // WS: Explain types of props
    makeGuess: Function,
    usedLetters: Array,
    isGameStarted: Boolean
  },
  data: function () {
    return {
      // WS: Explain what is array and how it works
      polishLetters: ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż']
    }
  },
  methods: {
    // WS: Explain how we pass arguments to functions
    chooseLetter (letter) {
      // WS: Explain emitting event
      if (this.isGameStarted) {
        this.$emit('makeGuess', letter)
      }
    }
  }
}
</script>

<style>
.keyboard {
  max-width: 500px;
}
</style>