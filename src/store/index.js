import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const UPDATE_MUTATION = "UPDATE_MUTATION";

export const TYPE_DATA = "DATA";
export const TYPE_LOADING = "LOADING";

export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const store = new Vuex.Store({
  state: {
    todos: [],
    isLoading: false,
  },
  mutations: {
    [UPDATE_MUTATION](state, { type, payload }) {
      switch(type) {
        case TYPE_DATA:
          state.todos = payload;
          state.isLoading = false;
          break;
        case TYPE_LOADING:
          state.todos = [];
          state.isLoading = true;
          break;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    }
  },
  actions: {
    async [GET_TODOS]({ commit }) {
      commit(UPDATE_MUTATION, { type: TYPE_LOADING });
      const response = await instance.get("/todo-mdb");
      commit(UPDATE_MUTATION, { type: TYPE_DATA, payload: response.data });
    },
    async [ADD_TODO]({ commit }, todo) {
      commit(UPDATE_MUTATION, { type: TYPE_LOADING });
      const response = await instance.put("/todo-mdb", todo);
      commit(UPDATE_MUTATION, { type: TYPE_DATA, payload: response.data });
    },
    async [UPDATE_TODO]({ commit }, todo) {
      commit(UPDATE_MUTATION, { type: TYPE_LOADING });
      const response = await instance.patch(`/todo-mdb/${todo.id}`, todo);
      commit(UPDATE_MUTATION, { type: TYPE_DATA, payload: response.data });
    },
    async [DELETE_TODO]({ commit }, id) {
      commit(UPDATE_MUTATION, { type: TYPE_LOADING });
      const response = await instance.delete(`/todo-mdb/${id}`);
      commit(UPDATE_MUTATION, { type: TYPE_DATA, payload: response.data });
    }
  },
});