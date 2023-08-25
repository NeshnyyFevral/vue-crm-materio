<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include grid;
}
</style>
