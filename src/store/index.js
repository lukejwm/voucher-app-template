import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    projectVoteSummary: [],
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    SET_PROJECT_VOTES(state, projectVoteSummary) {
      state.projectVoteSummary = projectVoteSummary
    },
  },
  actions: {
    loadProjectVotesSummary({ commit }) {
      axios
        .get('https://voting-api.alliedoffsets.com/projects/votes-summary/')
        .then((r) => r.data)
        .then((projectVoteSummary) => {
          commit('SET_PROJECT_VOTES', projectVoteSummary)
        })
    },
  },
  modules: {},
})
