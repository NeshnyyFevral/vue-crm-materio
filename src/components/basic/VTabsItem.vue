<template>
  <RouterLink
    :class="[
      $style.link,
      props.disabled && $style.disabled,
    ]"
    :active-class="props.filled && $style.active"
    :to="{ name: props.route }"
    @click="emits('clickByItem', props.name)"
  >
    <VOffset
      v-ripple
      :class="$style.button"
      width="100%"
    >
      <VOffset :mr="5">
        <component
          :is="props.icon"
          :class="$style.icon"
        />
      </VOffset>
      <VText variant="body1">
        {{ props.title }}
      </VText>
    </VOffset>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import type { FlexJustify } from '@/model/components/basic/VFlex';

interface PropsType {
  name: string;
  route: string;
  disabled?: boolean;
  icon?: any;
  filled?: boolean;
  color?: GlobalColors;
  justifyContent: FlexJustify;
  title?: string;
}

interface EmitsType {
  (e: 'clickByItem', v: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  icon: null,
  color: GlobalColors.PRIMARY,
  title: '',
});
const emits = defineEmits<EmitsType>();

const color = computed(() => GlobalColorMap['700'][props.color]);
const justifyContent = computed(() => props.justifyContent);
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

.button {
  --color-button: v-bind(color);
  --button-jc: v-bind(justifyContent);

  display: flex;
  align-items: center;
  justify-content: var(--button-jc);
  overflow: hidden;
  padding: 12px 25px;
  color: var(--color-text);
  transition: color var(--transition-duration) var(--transition-timing-func);
  border-radius: 5px;

  .icon {
    width: 1.2rem;
    height: 1.2rem;
    fill: var(--color-text);

    transition: fill var(--transition-duration) var(--transition-timing-func);
  }

  .active & {
    background-color: var(--color-button);
    color: var(--color-card);

    .icon {
      fill: var(--color-card);
    }
  }
}

.link {
  width: 100%;

  &.disabled {
    opacity: 0.7;
    pointer-events: none;
  }
}
</style>
