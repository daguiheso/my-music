<template lang="pug">
  section
    h1 Track Detail
    mm-track(:track="track")
</template>

<script>
import musicService from '@/services/music'
import MmTrack from '@/components/Track'

export default {
  components: {
    MmTrack
  },
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
