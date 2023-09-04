<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      :class="$style.root"
    >
      <div
        :class="[
          $style.dialog,
          $style[`size-${props.size}`],
          fullscreen && $style.fullscreen,
          persistent && persistentCancel && $style.persistent,
        ]"
        @animationend="persistentCancel = false"
      >
        <slot />
      </div>

      <div
        :class="$style.backdrop"
        @click="close()"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { DialogSize } from '@/model/components/basic/VDialog';

interface PropsType {
  modelValue: boolean;
  size?: DialogSize;
  fullscreen?: boolean;
  persistent?: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  size: DialogSize.MEDIUM,
  fullscreen: false,
  persistent: false,
});
const emits = defineEmits<EmitsType>();

const calcScrollWidth = () => window.innerWidth - document.documentElement.clientWidth;
const persistentCancel = ref<boolean>(false);
const close = () => {
  if (props.persistent) {
    persistentCancel.value = true;
  } else {
    emits('update:modelValue', false);
  }
};

watch(() => props.modelValue, () => {
  const scrollWidth = calcScrollWidth();

  if (props.modelValue) {
    document.body.style.overflow = 'hidden';
    if (document.body.offsetWidth > 1270) { document.body.style.marginRight = `${scrollWidth}px`; }
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = '0px';
  }
});
</script>

<style module lang="scss">
$sizes: (
  small: 7px 10px,
  medium: 14px 20px,
  large: 30px 35px,
);

.root {
  position: relative;
}

.dialog {
  position: fixed;
  max-width: 1000px;
  max-height: 98vh;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-card);
  z-index: 10001;
  border-radius: 15px;
}

.size {
  @each $key, $size in $sizes {
    &-#{$key} {
      padding: $size;
    }
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
}

.persistent {
  transform-origin: 0 0;
  animation: persistentCancel var(--transition-duration);
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  max-width: none;
  transform: none;
  border-radius: 0;
}

@keyframes open {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes persistentCancel {
  33% {
    transform: scale(1) translate3d(-50%, -50%, 0);
  }

  66% {
    transform: scale(1.05) translate3d(-50%, -50%, 0);
  }

  100% {
    transform: scale(1) translate3d(-50%, -50%, 0);
  }
}
</style>
