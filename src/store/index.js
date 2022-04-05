import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "Faire une todo list",
        createdAt: new Date(Date.now()).toLocaleDateString(),
        isDone: false,
      },
      {
        id: 2,
        title: "finir la todo list",
        createdAt: new Date(Date.now()).toLocaleDateString(),
        isDone: false,
      },
    ],
  },
  getters: {
    getTodos: (state) => state.todos,
    getDoneTodos: (state) => state.todos.filter((t) => t.isDone),
  },
  mutations: {
    TOGGLE_DONE: (state, todo) => {
      const idx = state.todos.findIndex((t) => t.id === todo.id);
      state.todos[idx].isDone = !state.todos[idx].isDone;
    },
    DELETE: (state, todo) => {
      const idx = state.todos.findIndex((t) => t.id === todo.id);
      state.todos.splice(idx, 1);
    },
  },
  actions: {},
  modules: {},
});
