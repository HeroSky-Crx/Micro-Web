<template>
  <div class="c-video-list-item__wrap">
    <div class="c-video-list-item__left">
      <img :src="data.img" />
    </div>
    <div class="c-video-list-item__right">
      <span class="c-video-list-item__name">{{data.name}}</span>
      <div class="c-video-list-item__play"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
