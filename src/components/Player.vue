<template lang="pug">
  .content(v-if="track.album")
    p
      img(:src="track.album.images[2].url")
    p
      strong {{ track.name}}
      small {{ track.duration_ms | ms-to-mm }}
    p
     audio(controls, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="scss">
.content {
  text-align: center;
  audio {
    border: none;
    &:hover {
      outline: none;
    }
  }
}
</style>
