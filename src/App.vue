<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>

import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap')
  body
    margin: 0
  #app
    font-family: 'JetBrains Mono', monospace
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin: 0
    background-color: #35495e
</style>
