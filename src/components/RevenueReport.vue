<template>
  <div :class="$style.root">
    <div :class="$style.main">
      <div
        v-show="topVisible"
        :class="[
          $style.row,
          !bottomVisible && $style.rowFull,
        ]"
      >
        <div
          v-for="option in optionTop"
          :key="option.id"
          :class="$style.item"
          :style="{ height: `${option.value}%`, animationDelay: `${option.delay}s`, opacity: option.opacity }"
          @animationstart="option.opacity = 1"
        />
      </div>
      <div
        v-show="bottomVisible"
        :class="[
          $style.row,
          !topVisible && $style.rowFull,
        ]"
      >
        <div
          v-for="option in optionBottom"
          :key="option.id"
          :class="$style.item"
          :style="{ height: `${option.value}%`, animationDelay: `${option.delay}s`, opacity: option.opacity }"
          @animationstart="option.opacity = 1"
        />
      </div>
    </div>

    <div :class="$style.legend">
      <span
        :class="[
          $style.button,
          !topVisible && $style.buttonOpacity,
          !bottomVisible && $style.buttonFull,
        ]"
        @click="changeVisible('top')"
      >
        <VText :variant="'body2'">Earning</VText>
      </span>
      <span
        :class="[
          $style.button,
          !bottomVisible && $style.buttonOpacity,
        ]"
        @click="changeVisible('bottom')"
      >
        <VText :variant="'body2'">Expense</VText>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

import VText from '@/components/basic/VText.vue';
import { getRandom, getRandomString } from '@/model/tools/RandomTools';

const ITEMS_COUNT = 8;
interface Option {
  id: string;
  value: number;
  delay: number;
  opacity: number;
}

const optionTop = ref<Option[]>([]);
const optionBottom = ref<Option[]>([]);

const topVisible = ref<boolean>(true);
const bottomVisible = ref<boolean>(true);

const getRandomOptions = (): Option[] => {
  const options: Option[] = [];
  for (let i = 0; i < ITEMS_COUNT; i += 1) {
    const item: Option = {
      id: getRandomString(),
      value: getRandom(10, 75),
      delay: i - 0.95 * i,
      opacity: 0,
    };

    options.push(item);
  }

  return options;
};

const changeVisible = (row: 'top' | 'bottom') => {
  if (row === 'top') {
    topVisible.value = !topVisible.value;
    optionTop.value = optionTop.value.map((opt) => ({ ...opt, opacity: 0 }));
  } else if (row === 'bottom') {
    bottomVisible.value = !bottomVisible.value;
    optionBottom.value = optionBottom.value.map((opt) => ({ ...opt, opacity: 0 }));
  }
};

onBeforeMount(() => {
  optionTop.value = getRandomOptions();
  optionBottom.value = getRandomOptions();
});
</script>

<style module lang="scss">
$height: 292px;

.root {
  display: grid;
  grid-template-rows: auto 1fr;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: $height;
}

.row {
  display: flex;
  align-items: end;
  justify-content: space-around;
  height: calc($height / 2);

  &:nth-child(2) {
    align-items: start;
    margin-top: 10px;

    .item {
      background-color: var(--color-default-600);
    }
  }

  &Full {
    height: $height;
  }
}

.item {
  height: $height;
  background-color: var(--color-success-700);
  width: 15px;
  border-radius: 10px;
  animation: appearance 1s var(--transition-timing-func);

  & + & {
    margin-left: 2px;
  }
}

.legend {
  display: flex;
  justify-content: center;
}

.button {
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;

  &::before {
    content: '';
    margin-right: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-success-700);
  }

  &:nth-child(2) {
    margin-left: 10px;

    &::before {
      background-color: var(--color-default-600);
    }
  }

  &Opacity {
    opacity: 0.3;
  }
}

@keyframes appearance {
  from {
    opacity: 0;
    height: 0;
  }
}
</style>
