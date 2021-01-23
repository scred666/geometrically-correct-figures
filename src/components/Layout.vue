<template>
  <div class="layout">
    <FiguresSwitcher />
    <div class="figure__wrapper">
      <div class="figure__wrapper-controls">
        <div class="title">figure params</div>
        <Param-input v-for="item in Object.entries(figureFromStore.params)"
                     @updateParam="updateParam"
                     :param="item"
                     :key="`figure-${figureFromStore.name}-param-${item[0]}`"/>
      </div>
      <div class="figure__wrapper-image">
        <Figure/>
      </div>
    </div>
  </div>
</template>

<script>
import FiguresSwitcher from '@/components/FiguresSwitcher'
import ParamInput from '@/components/ParamInput'
import Figure from '@/components/Figure'
import { mapActions, mapMutations, mapState } from 'vuex'
// import { clone } from 'ramda'
import { figures } from '@/utils/figures'
export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  components: {
    FiguresSwitcher,
    ParamInput,
    Figure
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
  .layout
    min-height: 100vh
    color: $green
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 40px 0
  .figure
    &__wrapper
      width: 960px
      max-width: 100%
      +media((flex-direction: (320: column, 576: row)))
      margin: 0 auto
      display: flex
      align-items: center
      justify-content: space-between
      &-controls
        +media((margin: (320: 30px 0, 768: 0)))
        display: flex
        flex-direction: column
        box-sizing: border-box
        width: 250px
        +media((flex: (576: 0 0 250px)))
        +media((padding-left: (576: 40px)))
        .title
          width: 100%
          margin-bottom: 24px
          font-size: 24px
          text-align: left

</style>
