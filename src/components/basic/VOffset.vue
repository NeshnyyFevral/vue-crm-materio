<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface PropsType {
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
}

const props = withDefaults(defineProps<PropsType>(), {
  ml: 0,
  mt: 0,
  mr: 0,
  mb: 0,
});

const ML = computed(() => `${props.ml}px`);
const MR = computed(() => `${props.mr}px`);
const MT = computed(() => `${props.mt}px`);
const MB = computed(() => `${props.mb}px`);
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
}
</style>
