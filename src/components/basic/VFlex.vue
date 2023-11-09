<template>
  <div
    :class="[
      $style.root,
      hasChanged && $style.column
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from '@/model/components/basic/VFlex';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

interface PropsType {
  align?: FlexAlign,
  direction?: FlexDirection,
  justifyContent?: FlexJustify,

  directionChangeTrigger?: number,
}

const props = withDefaults(defineProps<PropsType>(), {
  align: FlexAlign.SELF_START,
  direction: FlexDirection.ROW,
  justifyContent: FlexJustify.FLEX_START,
  directionChangeTrigger: undefined,
});

const align = computed(() => props.align);
const direction = computed(() => props.direction);
const jc = computed(() => props.justifyContent);

const hasChanged = props.directionChangeTrigger ? useResizeTrigger(props.directionChangeTrigger) : false;
</script>

<style module lang="scss">
.root {
  --flex-align: v-bind(align);
  --flex-direction: v-bind(direction);
  --flex-jc: v-bind(jc);

  display: flex;
  align-items: var(--flex-align);
  flex-direction: var(--flex-direction);
  justify-content: var(--flex-jc);

  &.column {
    flex-direction: column;
  }
}
</style>
