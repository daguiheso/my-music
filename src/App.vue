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

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search () {
      console.log(this.searchQuery)
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
