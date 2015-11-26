import Vue from 'vue'
import VueRouter from 'vue-router'

if (location.hostname === 'localhost') {
  Vue.config.debug = true
}

Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/weekday/:weekday': {
    component: require('./views/weekday')
  }
})
router.redirect({
  '*': '/weekday/today'
})

router.start(require('./app'), '#app')
