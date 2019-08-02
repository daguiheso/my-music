<template lang="pug">
  .card
    .card-image
      figure.image
        img(:src="track.album.images[0].url")
    .card-body
      .media
        figure.image
          img(:src="track.album.images[2].url")
        .media-content
          h4.title {{track.name}}
          h5.subtitle {{track.artists[0].name}}
      .content
        small {{duration_ms}}
        nav.level
          a(@click="selectTrack")
            span ▶️

</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
    }
  }
}
</script>

<style lang="scss">
  .card {
    border: 1px solid #f9f3f3;
    border-radius: 6px;
    background: #fbfbfb;
    &-image {
      figure.image {
        border-radius: 6px;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    &-body {
      padding: 15px;
      position: relative;
      .media {
        display: flex;
        justify-content: space-between;
        align-items: center;
        figure.image {
          border-radius: 50%;
          overflow: hidden;
          width: 60px;
          height: 60px;
          img {
            width: 100%;
            height: auto;
          }
        }
        &-content {
          width: calc(100% - 75px);
          .title {
            font-size: 15px;
            color: #525252;
          }
          .subtitle {
            color: #bbb9b9;
            font-weight: 100;
          }
        }
      }
      .content {
        position: absolute;
        top: 15px;
        right: 10px;
        .level {
          cursor: pointer;
        }
      }
    }
  }
</style>
