import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      hungerLevel: 0
    },
    mutations: {
      INCREASE_HUNGER_LEVEL(state) {
        state.hungerLevel++
      }
    },
    actions: {
      eatSandwich(context) {
        return context.commit('INCREASE_HUNGER_LEVEL')
      }
    }
})


new Vue({
  render: h => h(App),
  store
}).$mount('#app')


