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
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Creep', artist: 'Radiohead' },
  { name: 'The Verve', artist: 'The Symphony' }
]

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
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
