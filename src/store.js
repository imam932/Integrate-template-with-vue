import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topfivecountry: [
      { title: 'Post Title 1' },
      { title: 'Post Title 2' },
      { title: 'Post Title 3' },
      { title: 'Post Title 4' },
      { title: 'Post Title 5' }
    ]
  },
  mutations: {},
  actions: {}
})