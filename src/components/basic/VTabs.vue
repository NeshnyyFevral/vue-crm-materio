<template>
  <VFlex
    :class="$style.root"
    :align="FlexAlign.CENTER"
  >
    <VOffset
      v-for="item in props.data"
      :key="item.id"
      width="150px"
    >
      <VTabsItem
        :route="item.route"
        :name="item.name"
        :disabled="item.disabled"
        :icon="item.icon"
        @click-by-item="changeActiveElement"
      />
    </VOffset>

    <div :class="$style.line" />
  </VFlex>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTabsItem from '@/components/basic/VTabsItem.vue';
import { FlexAlign } from '@/model/components/basic/VFlex';
import type { TabsData } from '@/model/components/basic/VTabs';

interface PropsType {
  data: TabsData[];
  variant?: any;
}

const props = defineProps<PropsType>();
const activeElement = ref<number>(0);

const changeActiveElement = (element: string) => {
  activeElement.value = props.data.findIndex((el) => el.name === element);
};

const lineWidth = computed(() => `${100 / props.data.length}%`);
const offset = computed(() => `${activeElement.value * Number.parseInt(lineWidth.value, 10)}%`);
</script>

<style module lang="scss">
.root {
  --line-width: v-bind(lineWidth);
  --line-offset: v-bind(offset);

  position: relative;
}

.line {
  position: absolute;
  width: var(--line-width);
  background-color: var(--color-primary-700);
  height: 2px;
  bottom: -10px;
  left: var(--line-offset);

  transition: left var(--transition-duration) var(--transition-timing-func);
}
</style>
