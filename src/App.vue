<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/todo/TodoList.vue";
export default {
  name: "App",
  components: { TodoList },
};
</script>

<style>
:root {
  --bg: #2c3e50;
  --color: #fff;
  --secondary-color: #ccc;
  --btn-bg: #415c77;
  --btn-bg-hover: #55718d;
  --color-strikeout: #5d7996;
  --input-bg: #415c77;
  --error: #ff5252;
}

*,
html {
  background: var(--bg);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color);
  margin-top: 60px;
}
</style>
