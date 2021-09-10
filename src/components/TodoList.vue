<template>
  <div class="todo-list-wrapper">
    <h2>Todos</h2>
    <div class="todo-list">
      <TodoListAdd @add-todo-item="addTodoItem" />
      <div class="todo-list-container">
        <TodoListItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle-todo="toggleTodo(todo)"
          @remove-todo="removeTodo(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import TodoListAdd from "./TodoListAdd.vue";

const TODO_ITEMS = "todo-items";
export default {
  name: "TodoList",
  components: { TodoListItem, TodoListAdd },
  data: function () {
    return {
      todos: [],
      nextId: 0,
    };
  },
  created() {
    const rawLocalTodos = localStorage.getItem(TODO_ITEMS);

    if (rawLocalTodos) {
      this.todos = JSON.parse(rawLocalTodos);
      this.nextId = this.todos.length;
    }
  },
  methods: {
    addTodoItem(todo) {
      todo.id = ++this.nextId;
      console.log(todo);
      this.todos.push(todo);

      localStorage.setItem(TODO_ITEMS, JSON.stringify(this.todos));
    },
    toggleTodo(todo) {
      this.todos = this.todos.map((t) => {
        if (todo.id === t.id) {
          t.done = !t.done;
        }
        return t;
      });

      localStorage.setItem(TODO_ITEMS, JSON.stringify(this.todos));
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
      localStorage.setItem(TODO_ITEMS, JSON.stringify(this.todos));
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
