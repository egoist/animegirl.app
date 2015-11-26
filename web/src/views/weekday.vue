<style scoped>
  .anime {
    padding: 10px;
    &:nth-child(2n) {
      background-color: #f9f9f9;
    }
    .anime-title {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .footer-panel {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    line-height: 30px;
    z-index: 1000;
    background-color: rgb(237, 237, 237);
  }
  .left-panel {
    float: left;
  }
  .switch-left, .switch-right {
    height: 30px;
    width: 30px;
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    float: left;
    cursor: pointer;
    opacity: .65;
    &:hover {
      background-color: white;
      opacity: 1;
    }
  }
  .switch-left {
    background-image: url('../assets/images/Back.png');
  }
  .switch-right {
    background-image: url('../assets/images/Forward.png');
  }
  .eof-weekday {
    text-align: center;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    span {
      background-color: #fff;
      position: relative;
      z-index: 999;
      display: inline-block;
      padding: 0 10px;
    }
    &:after {
      height: 1px;
      background-color: #f0f0f0;
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin-top: -0.5px;
    }
  }
</style>

<template>
  <loader></loader>
  <div class="eof-weekday" v-if="weekday !== null">
    <span>{{ weekday | weekdayChinese }}</span>
  </div>

  <div class="animes" v-show="showAnimes">
    <div class="anime" v-for="anime in animes">
      <anime :anime="anime"></anime>
    </div>
  </div>

  <footer class="footer-panel clearfix">
    <div class="container">
      <div class="left-panel clearfix">
        <div class="switch-left" @click="fetchBetween('prev')"></div>
        <div class="switch-right" @click="fetchBetween('next')"></div>
      </div>
    </div>
  </footer>
</template>

<script>
  import bgm from 'bgm-fetch'
  import dateParser from '../helpers/date_parser'
  import weekdayParser from '../helpers/weekday_parser'
  import weekdaySwitch from '../helpers/weekday_switch'
  import weekdayChinese from '../helpers/weekday_chinese'
  import { animeStore } from '../helpers/store'
  export default {
    data () {
      return {
        animes: [],
        weekday: null,
        showAnimes: false
      }
    },
    methods: {
      fetchAnimes (weekday) {
        bgm.get(dateParser(), true)
          .then(animes => {

            this.animes = animes[weekday]
            animeStore.override(animes)
            this.$broadcast('toggleLoader', false)
            this.showAnimes = true
          })
      },
      fetchBetween (type) {
        this.$broadcast('toggleLoader', true)
        this.showAnimes = false
        this.weekday = weekdaySwitch(this.weekday, type)
        console.log(this.weekday)
        this.fetchAnimes(this.weekday)
      }
    },
    ready () {
      this.weekday = weekdayParser(this.$route.params.weekday)
      this.fetchAnimes(this.weekday)
    },
    components: {
      anime: require('../components/anime'),
      loader: require('../components/loader')
    },
    filters: {
      weekdayChinese
    }
  }
</script>
