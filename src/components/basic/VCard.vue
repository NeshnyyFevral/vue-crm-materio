<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style module lang="scss">
.root {
  width: 100%;
  padding: 20px;
  background-color: var(--color-card);
  box-shadow: var(--shadow-card);
  position: relative;
  border-radius: 12px;

  transition: background-color var(--transition-duration) var(--transition-timing-func),
    bpx-shadow var(--transition-duration) var(--transition-timing-func);
}
</style>
