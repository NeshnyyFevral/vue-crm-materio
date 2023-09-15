<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface PropsType {
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
}

const props = withDefaults(defineProps<PropsType>(), {
  marginLeft: 0,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
});

const ML = computed(() => `${props.marginLeft}px`);
const MR = computed(() => `${props.marginRight}px`);
const MT = computed(() => `${props.marginTop}px`);
const MB = computed(() => `${props.marginBottom}px`);
</script>

<style module lang="scss">
.root {
  --margin-left: v-bind(ML);
  --margin-right: v-bind(MR);
  --margin-top: v-bind(MT);
  --margin-bottom: v-bind(MB);

  margin: var(--margin-top)
    var(--margin-right)
    var(--margin-bottom)
    var(--margin-left);
  padding: 20px;
  background-color: var(--color-card);
  box-shadow: var(--shadow-card);
  position: relative;
  border-radius: 12px;

  transition: background-color var(--transition-duration) var(--transition-timing-func),
    bpx-shadow var(--transition-duration) var(--transition-timing-func);
}
</style>
