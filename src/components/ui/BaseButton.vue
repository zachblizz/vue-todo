<template>
  <button class="btn" :class="className">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    className: {
      type: String,
      required: false,
      default: "primary"
    }
  }
};
</script>

<style scoped>
.btn {
  border: none;
  cursor: pointer;
  color: var(--color);
  transition: color 150ms ease-in-out;
  transition: background 150ms ease-in-out;
}

.primary {
  padding: 0.5rem 1.5rem;
  background: var(--btn-bg);
}

.primary:hover {
  background: var(--btn-bg-hover);
}

.icon {
  width: 2.25rem;
  height: 2.25rem;
}

.color-error:hover {
  color: var(--error);
}
</style>
