import * as types from '../mutation-types'

const state = {
  name: 'YoBitch',
  count: 0
}

const getters = {}

// actions 用于异步提交 mutations
const actions = {
  [types.ADD_COUNT_ASYNC] ({ commit, state }) {
    setTimeout(() => {
      commit(types.ADD_COUNT)
    }, 1000)
  }
}

const mutations = {
  [types.ADD_COUNT] (state, payload) {
    state.count += 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
