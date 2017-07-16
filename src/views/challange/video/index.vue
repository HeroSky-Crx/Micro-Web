<template>
  <div id="v-challange-video">
    <c-video-list-item v-for="(video, index) in videoList" :key="index" :data="video"></c-video-list-item>
  </div>
</template>

<script>
  import * as components from 'components'

  export default {
    components,
    data () {
      return {
        videoList: [
          {
            name: 'Single Challange1',
            img: '/static/images/challanges/video/single.png'
          },
          {
            name: 'Single Challange2',
            img: '/static/images/challanges/video/single.png'
          },
          {
            name: 'Single Challange3',
            img: '/static/images/challanges/video/single.png'
          },
          {
            name: 'Single Challange4',
            img: '/static/images/challanges/video/single.png'
          },
          {
            name: 'Single Challange5',
            img: '/static/images/challanges/video/single.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import './style.scss';
</style>
