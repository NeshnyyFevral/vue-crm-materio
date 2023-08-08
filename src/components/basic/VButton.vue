<template>
  <button :class="$style.root">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonColor, ButtonVariant } from '@/model/components/VButton';

interface PropsType {
  variant: ButtonVariant;
  color: ButtonColor;
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: ButtonVariant.CONTAINED,
  color: ButtonColor.PRIMARY,
});
</script>

<style module lang="scss">
.root {

}
</style>
