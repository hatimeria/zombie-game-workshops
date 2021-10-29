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
        //TODO: need to attach clearInterval as well
        case 'idle':
          setInterval(this.setZombieIdleAnimation(id), 750)
          break;
        case 'is-hited':
          this.zombieIsHit(id)
          break
        default:
          setInterval(this.setZombieIdleAnimation(id), 1000)
        }
    },
    zombieIsHit (id) {
      //TODO: replace string value below with the objects indicator to zombies assets array (need to be created in the nearest future)
      this.zombie = `/assets/images/zombies/zombie${id}/zombie${id}_gethit/zombie_${id}_gethit_${this.count}.png`
      this.count++
      this.getZombie('idle')

      //TODO: replace 9 with length of an array storing idle images for each zombie 
      if (this.count === 9) {
        this.count = 1
      }
    },
    startGame () {
      //TODO: replace 11 & 6 with length of zombies array, zombies array still needs to be done separately
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
