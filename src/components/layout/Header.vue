<template lang="pug">
  header.header
    strong My Music
    nav
      ul
        router-link(:to="{ name: 'search' }") Buscar
        router-link(to="about") Nosotros
    mm-player
</template>

<script>
import MmPlayer from '@/components/Player'

export default {
  components: { MmPlayer }
}
</script>

<style lang="scss">
.header {
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #FF5B5F;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 16px;
  z-index: 2;
}
</style>
