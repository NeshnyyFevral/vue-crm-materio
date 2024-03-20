<template>
  <VFlex
    :class="[
      $style.root,
      props.underline && $style.underline
    ]"
    :align="FlexAlign.CENTER"
    :direction="props.direction"
  >
    <VOffset
      v-for="item in props.data"
      :key="item.id"
      :width="props.direction === FlexDirection.COLUMN ? '100%' : '150px'"
    >
      <VTabsItem
        :route="item.route"
        :name="item.name"
        :disabled="item.disabled"
        :icon="item.icon"
        :filled="props.filled"
        :color="props.color"
        :justify-content="props.justifyContent"
        :title="item.title ?? item.name"
        @click-by-item="changeActiveElement"
      />
    </VOffset>

    <div
      v-if="props.underline"
      :class="$style.line"
    />
  </VFlex>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
} from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTabsItem from '@/components/basic/VTabsItem.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from '@/model/components/basic/VFlex';
import type { TabsData } from '@/model/components/basic/VTabs';

interface PropsType {
  data: TabsData[];
  active?: string;
  color?: GlobalColors;
  underline?: boolean;
  filled?: boolean;
  direction?: FlexDirection;
  justifyContent?: FlexJustify;
}

const props = withDefaults(defineProps<PropsType>(), {
  data: () => [],
  active: '',
  color: GlobalColors.PRIMARY,
  underline: false,
  filled: false,
  direction: FlexDirection.ROW,
  justifyContent: FlexJustify.CENTER,
});
const activeElement = ref<number>(0);

const changeActiveElement = (element: string) => {
  activeElement.value = props.data.map((el) => ({ ...el, name: el.name.toLowerCase() })).findIndex((el) => el.name === element.toLowerCase());
};

const lineWidth = computed(() => `${100 / props.data.length}%`);
const offset = computed(() => `${activeElement.value * Number.parseInt(lineWidth.value, 10)}%`);
const colorTabs = computed(() => GlobalColorMap['700'][props.color]);

watch(() => props.active, () => {
  if (props.active) {
    changeActiveElement(props.active);
  }
}, { immediate: true });
</script>

<style module lang="scss">
.root {
  --tabs-color: v-bind(colorTabs);
  --line-width: v-bind(lineWidth);
  --line-offset: v-bind(offset);

  position: relative;
  width: 100%;
}

.line {
  position: absolute;
  width: var(--line-width);
  background-color: var(--tabs-color);
  height: 2px;
  bottom: -10px;
  left: var(--line-offset);

  transition: left var(--transition-duration) var(--transition-timing-func);
}
</style>
