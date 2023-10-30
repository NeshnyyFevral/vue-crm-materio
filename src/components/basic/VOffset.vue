<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface PropsType {
  ml?: number | 'auto';
  mt?: number | 'auto';
  mr?: number | 'auto';
  mb?: number | 'auto';
  maxWidth?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  ml: 0,
  mt: 0,
  mr: 0,
  mb: 0,
  maxWidth: undefined,
  width: undefined,
  height: undefined,
  minHeight: undefined,
  maxHeight: undefined,
});

const ML = computed(() => (props.ml === 'auto' ? props.ml : `${props.ml}px`));
const MR = computed(() => (props.mr === 'auto' ? props.mr : `${props.mr}px`));
const MT = computed(() => (props.mt === 'auto' ? props.mt : `${props.mt}px`));
const MB = computed(() => (props.mb === 'auto' ? props.mb : `${props.mb}px`));
const maxWidth = computed(() => props.maxWidth);
const width = computed(() => props.width);
const height = computed(() => props.height);
const minHeight = computed(() => props.minHeight);
const maxHeight = computed(() => props.maxHeight);
</script>

<style module lang="scss">
.root {
  --margin-left: v-bind(ML);
  --margin-right: v-bind(MR);
  --margin-top: v-bind(MT);
  --margin-bottom: v-bind(MB);
  --max-width: v-bind(maxWidth);
  --width: v-bind(width);
  --height: v-bind(height);
  --min-height: v-bind(minHeight);
  --max-height: v-bind(maxHeight);

  line-height: 0.7;

  margin: var(--margin-top)
    var(--margin-right)
    var(--margin-bottom)
    var(--margin-left);
  max-width: var(--max-width);
  width: var(--width);
  height: var(--height);
  min-height: var(--min-height);
  max-height: var(--max-height);
}
</style>
