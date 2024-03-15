<template>
  <div
    :class="[
      $style.root,
      overflowHidden && $style.hidden,
      disabledTopBr && $style.disabledTopBr
    ]"
  >
    <slot />

    <VOffset
      v-if="isMenuSlot"
      :class="$style.menu"
    >
      <VMenu v-model="menuHasOpened">
        <template #body>
          <VIconButton>
            <MoreVertIcon />
          </VIconButton>
        </template>

        <VText variant="body1">
          <slot name="menu" />
        </VText>
      </VMenu>
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import MoreVertIcon from '@public/assets/icons/more-vert.svg';
import {
  computed,
  ref,
  useSlots,
} from 'vue';

import VIconButton from '@/components/basic/VIconButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';

interface PropsType {
  overflowHidden?: boolean;
  disabledTopBr?: boolean;
  overflowX?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  overflowHidden: false,
});

const slots = useSlots();

const menuHasOpened = ref<boolean>(false);
const isMenuSlot = computed(() => !!slots?.menu);
const overflowX = computed(() => (props.overflowX ? 'auto' : 'visible'));
</script>

<style module lang="scss">
.root {
  --overflow-x-card: v-bind(overflowX);

  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--color-card);
  box-shadow: var(--shadow-card);
  border-radius: 12px;
  overflow-x: var(--overflow-x-card);
  overflow-y: visible;

  transition: background-color var(--transition-duration) var(--transition-timing-func),
    box-shadow var(--transition-duration) var(--transition-timing-func);
  animation: opp var(--transition-timing-func) var(--transition-duration);
}

.hidden {
  overflow: hidden;
}

.disabledTopBr {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.menu {
  position: absolute;
  top: 15px;
  right: 15px;

  svg path {
    fill: var(--color-text);
  }
}

@keyframes opp {
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
}
</style>
