<template lang="pug">
  #app
    mm-header
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
        li(v-for="t in tracks")
          mm-track(:track="t")

    mm-footer

</template>

<script>
import musicService from '@/services/music'
import MmFooter from '@/components/layout/Footer'
import MmHeader from '@/components/layout/Header'
import MmTrack from '@/components/Track'

export default {
  name: 'app',
  components: {
    MmFooter,
    MmHeader,
    MmTrack
  },
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
      if (!this.searchQuery) return

      musicService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
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
</style>
