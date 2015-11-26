<style scoped>
  .anime-name {
    float: left;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .anime-time {
    float: right;
  }
</style>

<template>
  <h2 class="anime-title clearfix">
    <div class="anime-name">{{ anime.titleCN }}</div>
    <span class="anime-time">{{ anime | time }}</span>
  </h2>
</template>

<script>
  import animeTime from '../helpers/anime_time'
  export default {
    props: ['anime'],
    ready () {
    },
    filters: {
      time: animeTime
    }
  }
</script>
