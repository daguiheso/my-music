<template lang="pug">
  header.header
    strong My Music
    nav
      button(@click="selectLang('en')") 🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧
      button(@click="selectLang('es')") 🇨🇴󠁧
      ul
        router-link(to="search") {{ $t('search') }}
        router-link(to="about") {{ $t('about') }}
    mm-player
</template>

<script>
import MmPlayer from '@/components/Player'

export default {
  components: { MmPlayer },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
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
