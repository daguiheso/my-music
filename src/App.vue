<template lang="pug">
  #app
    mm-header

    router-view

    mm-footer
</template>

<script>
import MmFooter from '@/components/layout/Footer'
import MmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: {
    MmFooter,
    MmHeader
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .section {
    ul {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      li {
        width: 100%;
        max-width: 320px;
      }
    }
  }

  .is-active {
    border: 3px solid green !important;
  }
</style>
