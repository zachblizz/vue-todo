<template>
  <form class="todo-list-add" @submit.prevent="addTodoItem">
    <BaseInput
      @input="updateTask"
      label="new todo"
      :value="task"
      :error="error"
      placeholder="Task Description"
    />
    <BaseButton type="submit">add todo</BaseButton>
  </form>
</template>

<script>
import BaseInput from "./ui/BaseInput.vue";
import BaseButton from "./ui/BaseButton.vue";

export default {
  name: "TodoListAdd",
  components: { BaseInput, BaseButton },
  data: function () {
    return {
      task: "",
      error: "",
    };
  },
  methods: {
    updateTask(task) {
      this.task = task;

      if (task.length) {
        this.error = "";
      }
    },
    addTodoItem() {
      if (this.task && this.task.length > 0) {
        this.$emit("add-todo-item", { task: this.task, done: false });
        this.task = "";
      } else {
        this.error = "Please enter a task";
      }
    },
  },
};
</script>

<style scoped>
.todo-list-add {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
}
</style>