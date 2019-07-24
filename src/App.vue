<template lang="pug">
  #app
    section.section
      nav
        input(
          type="text",
          placeholder="search songs",
          v-model="searchQuery"
        )
        a.button.info(@click="search") Buscar
        a.button.danger &times;

    p
      small {{ searchMessage }}

    ul
      li(v-for="t in tracks") {{ t.name }} - {{ t.artist }}

</template>

<script>
import musicService from './services/music'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `${this.tracks.length} results`
    }
  },
  methods: {
    search () {
      musicService.search(this.searchQuery)
        .then(res => {
          console.log(res.tracks)
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
