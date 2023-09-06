<template>
  <div
    v-ripple
    :class="$style.root"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include subtitle1;
  @include ripple-block;

  padding: 10px 20px;
  cursor: pointer;
  background: var(--color-card);
  transition: background-color var(--transition-duration) var(--transition-timing-func);

  &:hover {
    background: var(--color-card-hover);
  }
}
</style>
