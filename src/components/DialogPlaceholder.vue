<template>
  <div :class="$style.root">
    <h4 :class="$style.title">
      {{ props.title }}
    </h4>

    <p :class="$style.desc">
      {{ props.desc }}
    </p>

    <div :class="$style.actions">
      <VButton
        :class="$style.button"
        :variant="ButtonVariant.TEXT"
        :size="ButtonSize.SMALL"
        @click="modelValue = false"
      >
        close
      </VButton>
      <VButton
        :class="$style.button"
        :variant="ButtonVariant.TEXT"
        :size="ButtonSize.SMALL"
        @click="modelValue = false"
      >
        submit
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from '@/components/basic/VButton.vue';
import { ButtonSize, ButtonVariant } from '@/model/components/basic/VButton';

interface PropsType {
  title?: string;
  desc?: string;
}

const modelValue = defineModel<boolean>({ required: true });
const props = withDefaults(defineProps<PropsType>(), {
  title: 'Lorem ipsum dolor sit amet',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      + ' Animi beatae consequuntur earum eveniet excepturi'
      + ' fuga illum itaque laboriosam magni, mollitia necessitatibus'
      + ' nisi nostrum nulla placeat recusandae repellendus sapiente veniam voluptatem!',
});
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';
.root {}

.title {
  @include heading4;

  color: var(--color-text);
  margin-bottom: 20px;
}

.desc {
  @include body1;
  color: var(--color-text);
  margin-bottom: 20px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.button {
  & + & {
    margin-left: 20px;
  }
}
</style>
