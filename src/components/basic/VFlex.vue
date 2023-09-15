<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';

interface PropsType {
  align: FlexAlign,
  direction: FlexDirection,
}

const props = withDefaults(defineProps<PropsType>(), {
  align: FlexAlign.SELF_START,
  direction: FlexDirection.ROW,
});

const align = computed(() => props.align);
const direction = computed(() => props.direction);
</script>

<style module lang="scss">
.root {
  --flex-align: v-bind(align);
  --flex-direction: v-bind(direction);

  align-items: var(--flex-align);
  flex-direction: var(--flex-direction);
}
</style>
