import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Inicializando estados
const state = {
  todos: [],
  loading: false,
};

// seteando ações (Ações chamam as mutations que alteram os estados)
const actions = {
  // Simulando chamada a API de maneira assincrona
  addTodo({ commit }, todo) {
    commit("setLoading", true);
    return new Promise((resolve) => {
      setTimeout(() => {
        todo.id = Date.now();
        commit("addTodo", todo);
        commit("setLoading", false);
        resolve(todo);
      }, 580);
    });
  },

  toggleTodo({ commit }, todo) {
    commit("toggleTodo", todo);
  },

  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },
};
const getters = {};
const mutations = {
  // recebe o estado atual e o payload que é o estado atualizado para alteracao
  addTodo(state, payload) {
    state.todos.push(payload);
  },

  setLoading(state, payload) {
    state.loading = payload;
  },

  toggleTodo(state, payload) {
    const index = state.todos.findIndex((item) => item.id === payload.id);
    if (index > -1) {
      const checked = !state.todos[index].checked;
      Vue.set(state.todos, index, { ...state.todos[index], checked });
    }
  },

  removeTodo(state, payload) {
    state.todos = state.todos.filter(todo=> todo.id !== payload.id);
  },
};

const store = new Vuex.Store({ state, mutations, actions, getters });

export default store;
