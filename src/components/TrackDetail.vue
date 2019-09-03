<template lang="pug">
  section
    h1 Track Detail
    figure
      img(:src="track.album.images[0].url")
    div
      button(@click="selectTrack")
        span ▶️
    h3 {{ track.name }}
    ul
      li(v-for="(v, k) in track")
        strong {{ k }}:&nbsp;
        span {{ v }}
</template>

<script>
import musicService from '@/services/music'
import trackMixin from '@/mixins/track'

export default {
  mixins: [
    trackMixin
  ],
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    musicService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>
