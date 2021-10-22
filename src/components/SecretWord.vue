<template>
  <div>
      <span v-for="(letter, idx) in secret" :key="idx">
        {{ letter === ' ' ? '&nbsp;' : '_' }}
      </span>
  </div>
</template>

<script>
export default {
  name: 'SecretWord',
  props: {
    secret: String
  }
}
</script>