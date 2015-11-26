<style>
  .loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>

<template>
  <div class="loader" v-show="show">
    <img src="../assets/images/dance.gif" alt="" width="180">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      toggleLoader (val) {
        this.show = val
      }
    },
    ready () {
      this.$on('toggleLoader', this.toggleLoader)
    }
  }
</script>
