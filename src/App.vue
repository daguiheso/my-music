<template lang="pug">
  #app
    mm-header

    h1 Counter
    p {{ count }} - {{ double }}
    div
      button(@click="increment") +
      button(@click="decrement") -
    button(@click="incrementAsync") + Async

    router-view

    mm-footer
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MmFooter from '@/components/layout/Footer'
import MmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: {
    MmFooter,
    MmHeader
  },
  computed: {
    ...mapState(['count']),
    double () {
      return this.$store.getters.getDouble
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    incrementAsync () {
      this.$store.dispatch('incrementAsync', { number: 2 })
        .then(() => {
          // console.log('Action finish...')
        })
    }
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
