<template>
    <div class="communit-wrap">
        <p class="communit-title">{{data.title}}</p>
        <div class="communit-content">
            <img :src="data.img">
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

<style lang="scss">
    @import './style.scss'
</style>
