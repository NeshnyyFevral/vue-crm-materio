<template>
  <table
    :class="[
      $style.table,
      withKey && $style.withKey,
      maxWidth && $style.withMaxWidth,
      smallPaddings && $style.withSmallPaddings,
    ]"
  >
    <thead>
      <tr
        v-if="headCells.length"
        :class="$style.headItem"
      >
        <th
          v-for="(t, i) in headCells"
          :key="`${t.label}_${i}`"
          :class="[
            $style.th,
            t.sortable && $style.thSort,
          ]"
          @click="sortData(t)"
        >
          <span :title="t.label">
            {{ t.label }}
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(row, i) in formattingData"
        :key="i"
        :class="$style.item"
      >
        <slot :row="row" />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { VNode } from 'vue';
import {
  computed,
  markRaw,
  onMounted,
  ref,
  useSlots,
} from 'vue';

import type { HeadCells } from '@/model/components/basic/VTable';
import { SortBy } from '@/model/components/basic/VTable';

interface PropsType {
  data: any[];
  withKey?: boolean;
  maxWidth?: boolean;
  smallPaddings?: boolean;
}

const props = defineProps<PropsType>();
const slots = useSlots();

const formattingData = ref<any[]>(props.data);
const headCells = ref<HeadCells[]>([]);
const sortBy = ref<SortBy>(SortBy.ASK);

const getSlots = computed(() => {
  if (slots.default === undefined) return [];

  return slots.default({});
});

const registerTableCell = () => {
  getSlots.value.forEach((node: VNode) => {
    const nodeProp = node.props;

    headCells.value.push({
      label: nodeProp!.label,
      sortable: nodeProp?.sortable === '',
      name: nodeProp!.name,
    });
  });
};

const sortData = (th: HeadCells) => {
  if (!th.sortable) return;

  formattingData.value.sort((a, b) => a[th.name].localeCompare(b[th.name]));
};

onMounted(() => {
  registerTableCell();
});
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

$sizes: (
  small: 5px,
  normal: 15px,
);

.table {
  &.withKey {
    .th,
    .item td {
      &:not(:first-child) {
        text-align: end;
      }
    }
  }

  &.withMaxWidth {
    width: 100%;
  }

  &.withSmallPaddings {
    .th,
    .item td {
      padding: map-get($sizes, small);
    }
  }
}

.th {
  @include subtitle2;

  font-size: 12px;
  font-weight: 600;
  text-align: start;
  padding: map-get($sizes, normal);
  transition: background-color var(--transition-duration) var(--transition-timing-func);

  &.thSort {
    cursor: pointer;

    &:hover {
      background-color: var(--color-default-100);
    }

  }
}

.item {
  border-top: 1px solid var(--color-border);
  vertical-align: center;
  transition: background-color var(--transition-duration) var(--transition-timing-func);

  & td {
    @include body2;

    color: var(--color-text);
    padding: map-get($sizes, normal);
  }

  &:hover {
    background-color: var(--color-default-100);
  }
}
</style>
