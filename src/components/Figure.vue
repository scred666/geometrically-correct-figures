<template>
  <svg width="680"
       height="480"
       viewBox="0 0 680 480"
       class="image">
    <path :d="path" fill="url(#gradient)" stroke="#41b883" stroke-width="2"
          style="stroke-linecap: round;"></path>
    <defs>
      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
        <stop style="stop-color: var(--green)" offset="0%" stop-opacity="0.6"></stop>
        <stop style="stop-color: var(--green)" offset="50%" stop-opacity="0.3"></stop>
        <stop style="stop-color: var(--green)" offset="100%" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { mapState } from 'vuex'
import { getPath } from '@/utils/drawing'

export default {
  name: 'Figure',
  computed: {
    ...mapState({
      currentFigure: state => state.figure
    }),
    path () {
      return getPath(this.currentFigure)
    }
  }
}
</script>

<style scoped lang="sass">
  .image
    --green: #{$green}
    max-width: 100%
    height: auto
</style>
