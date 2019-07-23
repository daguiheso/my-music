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
  * {
    box-sizing: border-box;
  }
  body {
    padding: 5%;
  }
  nav {
    display: flex;
    input {
      height: 45px;
      padding: 12px;
      width: 100%;
      border-radius: 6px;
    }
    a.button {
      height: 45px;
      padding: 0 22px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      cursor: pointer;
      &.info {
        background: rgb(50, 60, 207);
      }
      &.danger {
        background: rgb(233, 38, 71);
      }
    }
  }
</style>
