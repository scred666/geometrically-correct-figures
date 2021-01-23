<template>
  <div class="param-input">
    <label :for="computedParam.key">
      <span class="name">{{ computedParam.key }}:</span>
      <input type="number"
             v-model.number="value"
             class="input"
             step="0.1"
             min="0"
             :id="computedParam.key">
    </label>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'ParamInput',
  props: {
    param: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // ...mapMutations({
    //   UPDATE_FIGURE_PARAM: 'UPDATE_FIGURE_PARAM'
    // }),
    // updateParam (e) {
    //   const value = e.target.valueAsNumber
    //   if ((!isNaN(parseFloat(value)) && value >= 0)) {
    //     this.$emit('updateParam', {
    //       key: this.computedParam.key,
    //       value: value
    //     })
    //   }
    // }
  },
  computed: {
    computedParam () {
      const [key, value] = this.param
      return { key, value }
    },
    value: {
      get () {
        return this.computedParam.value
      },
      set (value) {
        if ((!isNaN(parseFloat(value)) && value >= 0)) {
          this.$emit('updateParam', {
            key: this.computedParam.key,
            value: value
          })
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">
.param-input
  font-size: 18px
  width: 100%
  &:not(:last-child)
    margin-bottom: 16px
  label
    display: grid
    grid-template-columns: 1fr 1fr
    align-items: center
  .name
    text-align: left
  .input
    font-family: $main-font
    width: 100px
    text-overflow: ellipsis
    background: rgba(255, 255, 255, 0.09)
    border: none
    border-radius: 4px
    padding: 4px 10px
    font-size: 24px
    color: $green
    transition: .5s
    outline: none
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button
      -webkit-appearance: none
      margin: 0
    -moz-appearance: textfield
    &:focus
      box-shadow: inset 0 -1px 0 $green
</style>
