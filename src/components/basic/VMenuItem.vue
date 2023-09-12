<template>
  <button
    v-ripple
    :class="$style.root"
    @click="clickHandler"
  >
    <slot />

    <span :class="$style.text">{{ props.name }}</span>
  </button>
</template>

<script setup lang="ts">
interface PropsType {
  name?: string;
}

interface EmitsType {
  (e: 'clickElem', value: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  name: undefined,
});
const emits = defineEmits<EmitsType>();

const clickHandler = () => {
  if (props.name === undefined) return;

  emits('clickElem', props.name);
};
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include subtitle1;
  @include ripple-block;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  color: var(--color-text);
  padding: 5px 10px;
  grid-gap: 10px;
  cursor: pointer;
  border: none;
  width: 100%;
  text-align: left;
  background-color: transparent;
  transition: background-color var(--transition-duration) var(--transition-timing-func);
  white-space: nowrap;

  &:hover {
    background: var(--color-card-hover);
  }

  svg {
    width: 22px;
    height: 22px;
  }
}
</style>
