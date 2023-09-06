<template>
  <td :class="$style.td">
    <slot>
      {{ props.row[props.name] }}
    </slot>
  </td>
</template>

<script setup lang="ts">
interface PropsType {
  name: string;
  label: string;
  row: any;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

.td {
  @include body2;

  color: var(--color-text);
  padding: 15px;
}
</style>
