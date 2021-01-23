<template>
  <div class="figure__switcher">
    <div class="figure__switcher-title">
      Select figure shape
    </div>
    <div class="figure__switcher-items">
      <label :for="figure.name"
             class="item"
             v-for="figure in figures"
             :key="figure.name">
        <input type="radio"
               :value="figure.name"
               :id="figure.name"
               class="item__input"
               v-model="currentFigure">
        <img :src="figure.src"
             alt=""
             class="item__pic">
      </label>
    </div>
  </div>
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex'
// import { clone } from 'ramda'
import { figures } from '@/utils/figures'

export default {
  name: 'FiguresSwitcher',
  data: () => ({}),
  components: {
  },
  methods: {
    ...mapActions({
      setFigureParam: 'setFigureParam'
    }),
    ...mapMutations({
      UPDATE_FIGURE: 'UPDATE_FIGURE'
    }),
    updateParam (param) {
      this.setFigureParam({
        param: param.key,
        value: param.value
      })
    }
  },
  computed: {
    figures: () => figures,
    ...mapState({
      figureFromStore: state => state.figure
    }),
    currentFigure: {
      get () {
        return this.figureFromStore.name
      },
      set (value) {
        this.UPDATE_FIGURE(this.figures.find(p => p.name === value))
      }
    }
  }
}
</script>

<style scoped lang="sass">
  .figure
    &__switcher
      width: 100%
      &-title, &-items
        width: 960px
        max-width: 100%
        padding: 0 40px
        box-sizing: border-box
      &-title
        font-size: 36px
        font-weight: bold
        margin: auto
        text-align: left
      &-items
        width: 960px
        max-width: 100%
        margin: 40px auto
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(68px, 1fr))
        gap: 20px
        .item
          width: 100%
          display: flex
          cursor: pointer
          line-height: 0
          &__input
            display: none
            &:checked
              + .item__pic
                  opacity: 1
                  filter: grayscale(0)
          &__pic
            transition: .5s
            filter: grayscale(1)
            opacity: .5
            max-width: 100%
          @media (any-hover: hover)
            &:hover
              .item__pic
                opacity: .7
                filter: grayscale(0)
</style>
