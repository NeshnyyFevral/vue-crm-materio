<template>
  <div :class="$style.root">
    <h4 :class="$style.title">
      {{ props.title }}
    </h4>
    <p
      v-if="props.desc"
      :class="$style.desc"
    >
      {{ props.desc }}
    </p>
    <div :class="$style.group">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  title?: string;
  desc?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: 'Untitled',
});
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  background-color: var(--color-card);
  width: 100%;
  padding: 20px 20px 25px;
  border-radius: 12px;
  min-height: 150px;
  box-shadow: 0px 3px 32px rgba(0, 0, 0, .08);

}

.title {
  @include heading4;

  color: var(--color-text);
  margin-bottom: 10px;
}

.desc {
  @include subtitle2;

  margin-bottom: 15px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
}
</style>
