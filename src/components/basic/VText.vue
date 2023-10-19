<template>
  <div
    :class="[
      $style.root,
      $style[`text-${props.variant}`],
    ]"
  >
    <component :is="'p'">
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { VTextTextAlign } from '@/model/components/basic/VText';

type TextType = 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';

interface PropsType {
  variant: TextType;
  fontWeight?: '400' | '500' | '600' | '700';
  color?: string;
  align?: VTextTextAlign;
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: 'body1',
  fontWeight: undefined,
  color: undefined,
  align: VTextTextAlign.START,
});

const fontWeight = computed(() => props.fontWeight);
const color = computed(() => props.color);
const textAlign = computed(() => props.align);
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

.root {
  --font-weight: v-bind(fontWeight);
  --text-color: v-bind(color);
  --text-align: v-bind(textAlign);

  color: var(--text-color);

  &.text-body1 { @include body1; }
  &.text-body2 { @include body2; }
  &.text-button { @include button; }
  &.text-caption { @include caption; }
  &.text-overline { @include overline; }
  &.text-subtitle1 { @include subtitle1; }
  &.text-subtitle2 { @include subtitle2; }

  & p {
    font-weight: var(--font-weight);
    text-align: var(--text-align);
  }
}
</style>
