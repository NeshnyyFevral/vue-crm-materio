<template>
  <div :class="$style['lds-ring']">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface PropsType {
  size?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  size: '16px',
});

const size = computed(() => props.size);
</script>

<style module lang="scss">
.lds-ring {
  --size-loader: v-bind(size);

  display: inline-block;
  position: relative;
  width: var(--size-loader);
  height: var(--size-loader);

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--size-loader);
    height: var(--size-loader);
    border: 3px solid var(--color-button-text);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--color-button-text) transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
