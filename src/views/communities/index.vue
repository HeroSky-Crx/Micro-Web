<template>
    <div id="v-communities-list">
        <c-communities-list-item v-for="(communit, index) in communitiesList" :key="index" :data="communit">
        </c-communities-list-item>
    </div>
</template>

<script>
import { cCommunitiesListItem } from 'components'

export default {
  components: {
    cCommunitiesListItem
  },
  data () {
    return {
      communitiesList: [
        {
          title: 'Dynamic',
          img: '/static/images/communit/dynamic.png'
        },
        {
          title: 'Master',
          img: '/static/images/communit/dynamic.png'
        },
        {
          title: 'Conversation',
          img: '/static/images/communit/dynamic.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
    @import './style.scss' 
</style>
