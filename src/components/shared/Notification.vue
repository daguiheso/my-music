<template lang="pug">
  div
    ul
      li.notification
        slot(name="body") Algo anduvo mal
</template>

<style lang="scss">
.notification {
  box-shadow: 0px 0px 6px 1px #fa7d96;
  border-radius: 8px;
  padding: 16px;
  background: #f5d7d7;
  color: #696767;
}
</style>
