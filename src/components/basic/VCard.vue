<template>
  <div
    :class="[
      $style.root,
      overflowHidden && $style.hidden,
      disabledTopBr && $style.disabledTopBr
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  overflowHidden?: boolean;
  disabledTopBr?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  overflowHidden: false,
});
</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--color-card);
  box-shadow: var(--shadow-card);
  position: relative;
  border-radius: 12px;

  transition: background-color var(--transition-duration) var(--transition-timing-func),
    bpx-shadow var(--transition-duration) var(--transition-timing-func);
  animation: opp var(--transition-timing-func) var(--transition-duration);
}

.hidden {
  overflow: hidden;
}

.disabledTopBr {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

@keyframes opp {
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
}
</style>
