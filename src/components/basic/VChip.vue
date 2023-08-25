<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      clickable && $style.clickable,
      rectangle && $style.rectangle
    ]"
  >
    <div
      v-if="isVisiblePrepend"
      :class="$style.prepend"
    >
      <slot name="iconPrepend" />
    </div>
    <slot />
    <div
      v-if="isVisibleAppend"
      :class="$style.append"
    >
      <slot name="iconAppend" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  ChipMapColor,
  ChipMapColorHover,
  ChipMapColorLight,
  ChipSize,
  ChipVariant,
} from '@/model/components/basic/VChip';

interface PropsType {
  variant?: ChipVariant;
  color?: GlobalColors;
  size?: ChipSize;
  clickable?: boolean;
  rectangle?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: ChipVariant.BASIC,
  color: GlobalColors.PRIMARY,
  size: ChipSize.DEFAULT,
});

const slots = useSlots();

const isVisiblePrepend = computed<boolean>(() => !!slots.iconPrepend);
const isVisibleAppend = computed<boolean>(() => !!slots.iconAppend);
const chipColor = computed<string>(() => ChipMapColor[props.color]);
const chipColorHover = computed<string>(() => ChipMapColorHover[props.color]);
const chipColorLight = computed<string>(() => ChipMapColorLight[props.color]);
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

.root {
  @include body2;

  --color-chip: v-bind(chipColor);
  --color-chip-hover: v-bind(chipColorHover);
  --color-chip-light: v-bind(chipColorLight);

  display: flex;
  align-items: center;
  border: 1px solid var(--color-chip);
  border-radius: 16px;
  background-color: var(--color-chip);
  color: var(--color-button-text);

  transition: background-color 0.2s,
    color 0.2s, border-color 0.2s;
}

.clickable {
  cursor: pointer;

  &.variant-basic:hover {
    background-color: var(--color-chip-hover);
    border-color: var(--color-chip-hover);
  }

  &.variant-outlined:hover {
    background-color: var(--color-chip-hover);
    color: var(--color-button-text);
  }

  &.variant-light:hover {
    background-color: var(--color-chip-hover);
    color: var(--color-button-text);
  }
}

.rectangle {
  border-radius: 0;
}

.variant {
  &-outlined {
    background-color: transparent;
    color: var(--color-chip);
  }

  &-light {
    background-color: var(--color-chip-light);
    border-color: var(--color-chip-light);
    color: var(--color-chip);
  }
}

.size {
  &-default {
    padding: 4px 11px;
  }

  &-small {
    padding: 2px 7px;
  }
}

.prepend,
.append {
  display: flex;
  width: 16px;
  cursor: pointer;
  fill: var(--color-button-text);

  transition: fill 0.2s;

  &:hover {
    fill: var(--color-chip-hover);
  }
}

.prepend {
  margin-right: 5px;
}

.append {
  margin-left: 5px;
}
</style>
