<template lang="pug">
  #app
    mm-header
    section.section(v-show="!isLoading")
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
          mm-track(:track="t",
          @select="setSelectedTrack"
          :class="{ 'is-active': t.id === selectedTrack }")
    mm-loader(v-show="isLoading")

    mm-footer

</template>

<script>
import musicService from '@/services/music'
import MmFooter from '@/components/layout/Footer'
import MmHeader from '@/components/layout/Header'
import MmTrack from '@/components/Track'
import MmLoader from '@/components/shared/Loader'

export default {
  name: 'app',
  components: {
    MmFooter,
    MmHeader,
    MmTrack,
    MmLoader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
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
      this.isLoading = true

      musicService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
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
