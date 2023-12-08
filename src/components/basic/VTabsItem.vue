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
      <span>{{ props.name }}</span>
    </VOffset>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';

interface PropsType {
  name: string;
  route: string;
  disabled?: boolean;
  icon?: any;
  filled?: boolean;
  color?: GlobalColors;
}

interface EmitsType {
  (e: 'clickByItem', v: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  icon: null,
  color: GlobalColors.PRIMARY,
});
const emits = defineEmits<EmitsType>();

const color = computed(() => GlobalColorMap['700'][props.color]);
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

.button {
  --color-button: v-bind(color);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 12px 25px;
  color: var(--color-text);
  transition: color var(--transition-duration) var(--transition-timing-func);
  border-radius: 5px;

  .active & {
    background-color: var(--color-button);
    color: var(--color-card);
  }
}

.link {
  width: 100%;

  &.disabled {
    opacity: 0.7;
    pointer-events: none;
  }
}

.icon {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
