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
          <VFlex
            :align="FlexAlign.CENTER"
            :justify-content="i !== 0 && props.withKey ? FlexJustify.END : FlexJustify.START"
          >
            <VOffset
              :mr="3"
              :title="t.label"
            >
              {{ t.label }}
            </VOffset>

            <ArrowDown
              v-if="t.sortable"
              :class="[
                $style.thIcon,
                activeSortedTh?.name === t.name && $style.thIconActive,
                sortBy === SortBy.ASK && $style.thIconAsk,
                sortBy === null && $style.thIconDisabled,
              ]"
            />
          </VFlex>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="row in sortedData"
        :key="row"
        :class="$style.item"
      >
        <slot :row="row" />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import ArrowDown from '@public/assets/icons/chevron-down.svg';
import type { VNode } from 'vue';
import {
  computed,
  onMounted,
  ref,
  useSlots,
} from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
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

const headCells = ref<HeadCells[]>([]);
const sortBy = ref<SortBy | null>(SortBy.ASK);
const activeSortedTh = ref<HeadCells | null>(null);

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

  const sortValues: (SortBy | null)[] = [SortBy.DESC, SortBy.ASK, null];
  const currentIndex = sortValues.findIndex((el) => el === sortBy.value);

  if (activeSortedTh.value !== th) {
    activeSortedTh.value = th;
    [sortBy.value] = sortValues;
  } else {
    sortBy.value = currentIndex + 1 >= sortValues.length
      ? sortValues[0]
      : sortValues[currentIndex + 1];

    if (sortBy.value === null) {
      activeSortedTh.value = null;
    }
  }
};

const sortedData = computed(() => {
  if (activeSortedTh.value === null || sortBy.value === null) return props.data;

  const { name } = activeSortedTh.value;

  return sortBy.value === SortBy.ASK
    ? [...props.data].sort((a, b) => a[name].localeCompare(b[name]))
    : [...props.data].sort((a, b) => b[name].localeCompare(a[name]));
});

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
  user-select: none;

  &.thSort {
    cursor: pointer;

    &:hover {
      background-color: var(--color-default-100);
    }
  }

  & .thIcon {
    width: 1.2rem;
    opacity: 0;

    &.thIconActive {
      opacity: 0.7;

      &.thIconAsk {
        transform: rotateZ(180deg);
      }
    }

    path {
      fill: var(--color-default-500);
    }
  }

  &:hover {
    .thIcon {
      opacity: 1;
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
