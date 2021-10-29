<template>
  <img :src="this.zombie" class="is-block mx-auto" />
</template>

<script>
import { EventBus } from './../main.js'

export default {
  name: 'ZombieFigure',
  data: function () {
    return {
      zombie: '',
      zombieId: null,
      count: 1,
      imagePath: '/assets/images/zombies/zombie'
    }
  },
  mounted: function () {
    EventBus.$on('moveZombie', this.getZombie)

    this.zombieId = Math.floor(Math.random() * (11 - 6) + 6)
    this.getZombie('idle')
  },
  methods: {
    getZombie (animation) {
      switch (animation) {
          //TODO: need to attach clearInterval as well
        case 'idle':
          setInterval(this.setZombieIdleAnimation(this.zombieId), 750)
          break;
        case 'is-hited':
          this.zombieIsHit(this.zombieId)
          break
        default:
          setInterval(this.setZombieIdleAnimation(this.zombieId), 1000)
      }
    },
    setZombieIdleAnimation (id) {
      this.zombie = `${this.imagePath}${id}/zombie${id}_idle/zombie_${id}_idle_${this.count}.png`
      this.count++

      if (this.count === 13) {
        this.count = 1
      }
    },
    zombieIsHit (id) {
      //TODO: replace string value below with the objects indicator to zombies assets array (need to be created in the nearest future)
      this.zombie = `${this.imagePath}${id}/zombie${id}_gethit/zombie_${id}_gethit_${this.count}.png`
      this.count++
      this.getZombie('idle')

      //TODO: replace 9 with length of an array storing idle images for each zombie
      if (this.count === 9) {
        this.count = 1
      }
    },
  }
}
</script>