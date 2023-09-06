<template>
  <nav
    :class="[
      $style.root,
      modelValue && $style.hasOpened
    ]"
  >
    <div
      :class="$style.container"
      @click="clickHandler"
    >
      <slot />
    </div>
  </nav>
</template>

<script setup lang="ts">
interface PropsType {
  modelValue: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const clickHandler = (value: boolean) => {
  console.log(1);
  emits('update:modelValue', value);
};
</script>

<style module lang="scss">
.root {
  width: 100%;
  display: inline-block;
  margin-top: 10px;
}

.container {
  border: 1px solid var(--color-border);
  transform: scale(0);
  transform-origin: 0 0;
  box-shadow: var(--shadow-switch);
  opacity: 0;

  transition: transform var(--transition-duration) var(--transition-timing-func),
    opacity var(--transition-duration) var(--transition-timing-func);

  .hasOpened & {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
