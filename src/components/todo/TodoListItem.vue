<template>
  <div class="todo-wrapper">
    <div class="todo-task-wrapper">
      <input
        :id="todo.id"
        name="task"
        type="checkbox"
        :checked="todo.done"
        @click="toggleTodo"
      />
      <label :for="todo.id" :class="{ strikeout: todo.done }">{{ todo.task }}</label>
    </div>
    <BaseButton className="icon color-error" @click.native="$emit('remove-todo')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </BaseButton>
  </div>
</template>

<script>
import { store, UPDATE_TODO } from '../../store';

import BaseButton from "../ui/BaseButton.vue";

export default {
  name: "TodoListItem",
  components: { BaseButton },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleTodo() {
      store.dispatch(UPDATE_TODO, {
        ...this.todo,
        done: !this.todo.done
      });
    },
  },
};
</script>

<style scoped>
.todo-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  align-items: center;
}

.todo-wrapper:not(:last-child) {
  margin-bottom: 0.5rem;
}

.todo-wrapper > div {
  text-align: left;
  width: 100%;
  padding: 0 1rem;
}

.todo-wrapper > label,
.todo-wrapper > input {
  cursor: pointer;
}

.todo-task-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.todo-task-wrapper > input {
  margin-right: .5rem;
}

.strikeout {
  color: var(--color-strikeout);
  text-decoration: line-through;
}

input[type="checkbox"] {
  accent-color: var(--color-strikeout);
}
</style>
