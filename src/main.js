import Vue from 'vue'
// import App from './App.vue'
import Demo from './DemoVue.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
