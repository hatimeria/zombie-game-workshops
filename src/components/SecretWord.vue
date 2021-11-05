<template>
  <div class="mb-6">
      <span
          v-for="(letter, idx) in secret"
          :key="idx"
          class="letter mx-1 is-uppercase has-text-weight-bold is-size-4"
          :class="{ space: letter === ' ' }"
      >
        <span v-if="usedLetters.includes(letter)">{{ letter }}</span>
      </span>
  </div>
</template>

<script>
export default {
  name: 'SecretWord',
  props: {
    secret: String,
    usedLetters: Array
  }
}
</script>

<style>
.letter {
  display: inline-block;
  width: 25px;
  min-height: 36px;
}

.letter:not(.space) {
  border-bottom: 2px solid black;
}
</style>