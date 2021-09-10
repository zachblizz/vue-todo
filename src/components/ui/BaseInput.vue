<template>
  <div class="input-wrapper">
    <label>{{ label }}</label>
    <input
      :type="type"
      @keyup="onChange"
      :value="value"
      :placeholder="placeholder"
    />
    <span class="error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: String,
    label: {
      type: String,
      required: false,
      default: "",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    onChange(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
}

input {
  padding: 0.5rem;
  background: var(--input-bg);
  color: var(--color);
  border: none;
}

input::placeholder {
  color: var(--color-strikeout);
}

.error {
  color: var(--error);
  font-size: 0.8rem;
  font-weight: 500;
}
</style>