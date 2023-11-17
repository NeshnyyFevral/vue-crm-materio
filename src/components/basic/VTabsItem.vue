<template>
  <RouterLink
    :class="$style.link"
    :active-class="$style.active"
    :to="{ name: props.route }"
    @click="emits('clickByItem', props.name)"
  >
    <VOffset
      v-ripple
      :class="$style.button"
      width="100%"
    >
      {{ props.name }}
    </VOffset>
  </RouterLink>
</template>

<script setup lang="ts">
import VOffset from '@/components/basic/VOffset.vue';

interface PropsType {
  name: string;
  route: string;
  disabled?: boolean;
  icon?: any;
}

interface EmitsType {
  (e: 'clickByItem', v: string): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

.button {
  text-align: center;
  overflow: hidden;
  padding: 15px 25px;
  color: var(--color-text);
  transition: color var(--transition-duration) var(--transition-timing-func);
  border-radius: 5px;

  .active & {
    /*background-color: var(--color-primary-700);
    color: var(--color-card);*/
  }
}

.link {
  width: 100%;
}
</style>
