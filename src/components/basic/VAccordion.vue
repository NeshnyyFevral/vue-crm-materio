<template>
  <div
    :class="[
      $style.root,
      isOpen && $style.open
    ]"
    @click="isOpen = !isOpen"
  >
    <div
      :class="$style.visible"
    >
      <h6 :class="$style.title">
        {{ props.title }}
      </h6>

      <div :class="$style.icon">
        <div />
        <div />
      </div>
    </div>

    <div :class="$style.desc">
      <div ref="desc">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
  watch,
} from 'vue';

interface PropsType {
  name?: string;
  title?: string;
}

interface EmitsType {
  (e: 'update:name', value: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: 'Untitled',
  name: undefined,
});
const emits = defineEmits<EmitsType>();

const desc = ref<HTMLDivElement | null>(null);
const descHeight = ref<string>('0px');
const isOpen = ref<boolean>(false);

onMounted(() => {
  if (desc?.value) {
    descHeight.value = `${desc.value.getBoundingClientRect().height}px`;
  }
});

watch(() => isOpen.value, () => {
  if (isOpen.value) {
    emits('update:name', props.title);
  }
});

watch(() => props.name, () => {
  if (props.name !== undefined && props.name !== props.title) {
    isOpen.value = false;
  }
});
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

.root {
  padding: 10px 25px;
  background-color: var(--color-card);
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid var(--color-border);

  transition: background-color var(--transition-duration) var(--transition-timing-func);
}

.desc {
  --width-desc: v-bind(descHeight);

  overflow: hidden;
  transition: height var(--transition-duration) var(--transition-timing-func),
    margin var(--transition-duration) var(--transition-timing-func);
  height: 0;

  .open & {
    height: var(--width-desc);
    margin-top: 10px;
  }
}

.visible {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  @include heading6;
}

.icon {
  position: relative;
  height: 15px;

  & div:nth-child(1),
  & div:nth-child(2) {
    position: absolute;
    background-color: var(--color-text);
    width: 2px;
    height: 15px;
    transition: transform 0.1s var(--transition-timing-func);
  }

  & div:nth-child(2) {
    transform: rotateZ(90deg);
  }

  .open & div:nth-child(1),
  .open & div:nth-child(2) {
    transform: rotateZ(270deg);
  }
}
</style>
