<template>
  <div id="app" class="container">
    <h1 class="title">Gra zombie</h1>
    <p class="mb-3">Spróbuj odgadnąć hasło, zanim dopadnie Cię zombie!</p>
    <img :src="this.zombie" />
    <b-button @click="startGame">START</b-button>
    <secret-word :secret="secret" />
    <div class="columns">
      <div class="column">
        <letters-table :action="action"/>
      </div>
      <div class="column">
        <p>Pomyłki: 0/6</p>
      </div>
    </div>
  </div>
</template>

<script>
import LettersTable from './components/LettersTable'
import SecretWord from './components/SecretWord'

export default {
  name: 'App',
  components: {
    LettersTable,
    SecretWord
  },
  data: function () {
    return {
      secret: 'apokalipsa zombie',
      zombie: '',
      count: 1,
      zombieId: null
    }
  },
  methods: {
    setZombieIdleAnimation (id) {
      this.zombie = `/assets/images/zombies/zombie${id}/zombie${id}_idle/zombie_${id}_idle_${this.count}.png`
      this.count++

      if (this.count === 13) {
        this.count = 1
      }
    },
    getZombie (animation, id) {
      switch (animation) {
        case 'idle':
          setInterval(this.setZombieIdleAnimation(id), 750)
          break;
        case 'is-hited':
          this.zombieIsHited(id)
          break
        default:
          setInterval(this.setZombieIdleAnimation(id), 1000)
        }
    },
    zombieIsHited (id) {
      this.zombie = `/assets/images/zombies/zombie${id}/zombie${id}_gethit/zombie_${id}_gethit_${this.count}.png`
      this.count++
      this.getZombie('idle')

      if (this.count === 9) {
        this.count = 1
      }
    },
    startGame () {
      this.zombieId = Math.floor(Math.random() * (11 - 6) + 6)
      this.getZombie('idle', this.zombieId)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
