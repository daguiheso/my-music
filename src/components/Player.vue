<template lang="pug">
  .content
    p
      img()
    p
      strong {{}}
      small {{}}
    p
     audio(controls)
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  }
}
</script>

<style lang="scss">

</style>
