import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {}
const actions = {}
const getters = {}
const mutations= {}

const store = new Vuex.Store({state, mutations, actions, getters})

export default store;