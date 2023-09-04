<template>
  <div
    :class="[
      $style.root,
      transparent && $style.transparent
    ]"
  >
    <h4 :class="$style.title">
      {{ props.title }}
    </h4>
    <p
      v-if="props.desc"
      :class="$style.desc"
    >
      {{ props.desc }}
    </p>
    <div
      :class="[
        $style.group,
        direction === PreviewDirection.ROW ? $style.row : $style.column
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { PreviewDirection } from '@/model/components/basic/VPreviewComponentCard';

interface PropsType {
  title?: string;
  desc?: string;
  direction?: PreviewDirection;
  transparent?: boolean;
  gap?: number;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: 'Untitled',
  direction: PreviewDirection.ROW,
  transparent: false,
  desc: undefined,
  gap: 15,
});

const gapElement = computed(() => `${props.gap}px`);
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  --gap-card: v-bind(gapElement);

  background-color: var(--color-card);
  width: 100%;
  padding: 20px 20px 25px;
  border-radius: 12px;
  min-height: 150px;
  box-shadow: var(--shadow-preview-card);

  transition: background-color var(--transition-duration) var(--transition-timing-func);
}

.transparent {
  background-color: transparent;
  box-shadow: none;
  border: 1px solid var(--color-border);
}

.title {
  @include heading4;

  color: var(--color-text);
  margin-bottom: 10px;
}

.desc {
  @include subtitle2;

  margin-bottom: 15px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-card);
  align-items: center;

  &.row {
    flex-direction: row;
  }

  &.column {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
