<template>
  <div class="todo-list-wrapper">
    <h2>Todos</h2>
    <div class="todo-list">
      <TodoListAdd />
      <div class="todo-list-container">
        <TodoListItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove-todo="removeTodo(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { store, GET_TODOS, DELETE_TODO } from "../../store";

import TodoListItem from "../todo/TodoListItem.vue";
import TodoListAdd from "../todo/TodoListAdd.vue";

export default {
  name: "TodoList",
  components: { TodoListItem, TodoListAdd },
  computed: mapState(["isLoading", "todos"]),
  mounted() {
    store.dispatch(GET_TODOS);
  },
  methods: {
    removeTodo(id) {
      store.dispatch(DELETE_TODO, id);
    },
  },
};
</script>

<style scoped>
.todo-list-wrapper {
  width: 40em;
}

.todo-list {
  display: flex;
  flex-direction: column;
}

.todo-list-container {
  height: 500px;
  overflow-y: auto;
}
</style>
