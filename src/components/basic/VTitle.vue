<template>
  <div
    :class="[
      $style.root,
      $style[`heading-${tagName}`]
    ]"
  >
    <component :is="tagName">
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { TextAlign } from '@/model/components/basic/VText';
import type { TitleVariant } from '@/model/components/basic/VTitle';

interface PropsType {
  variant: TitleVariant;
  color?: string;
  fontWeight?: '400' | '500' | '600' | '700';
  align?: TextAlign;
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: 'heading1',
  color: undefined,
  fontWeight: undefined,
  align: TextAlign.START,
});

const tagName = computed<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'>(() => {
  switch (props.variant) {
  case 'heading1': return 'h1';
  case 'heading2': return 'h2';
  case 'heading3': return 'h3';
  case 'heading4': return 'h4';
  case 'heading5': return 'h5';
  case 'heading6': return 'h6';
  default: return 'div';
  }
});

const fontWeight = computed(() => props.fontWeight);
const color = computed(() => props.color);
const textAlign = computed(() => props.align);
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

$tags: h1, h2, h3, h4, h5, h6;

.root {
  --text-color: v-bind(color);
  --font-weight: v-bind(fontWeight);
  --text-align: v-bind(textAlign);

  color: var(--text-color);

  &.heading-h1 { @include heading1; }
  &.heading-h2 { @include heading2; }
  &.heading-h3 { @include heading3; }
  &.heading-h4 { @include heading4; }
  &.heading-h5 { @include heading5; }
  &.heading-h6 { @include heading6; }

  @each $tag in $tags {
    & #{$tag} {
      font-weight: var(--font-weight);
      text-align: var(--text-align);
    }
  }
}
</style>
