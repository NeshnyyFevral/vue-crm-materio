<template>
  <table
    v-if="hasHead"
    :class="[
      $style.table,
      maxWidth && $style.tableMaxWidth,
    ]"
  >
    <caption
      v-if="props.caption"
      :class="$style.tableCaption"
    >
      {{ props.caption }}
    </caption>
    <thead :class="$style.tableHead">
      <tr :class="$style.tableRow">
        <th
          v-for="c in props.head"
          :key="c.name"
          :class="[
            $style.tableCell,
            !props.largePadding && $style['tableCell--small'],
            !c.hidden && $style['tableCell--hidden'],
          ]"
          :style="getColumnStyle(c)"
        >
          <VTableSort
            v-if="c.sort"
            :order="currentSort.name === c.name ? currentSort.sort : null"
            @click="changeSortHandle(c.name, $event)"
          >
            <slot
              :name="`${c.name}_head`"
              v-bind="c"
            >
              <span :title="c.label">
                {{ c.label }}
              </span>
            </slot>
          </VTableSort>
          <slot
            v-else
            :name="`${c.name}_head`"
            v-bind="c"
          >
            <span :title="c.label">{{ c.label }}</span>
          </slot>
        </th>
      </tr>
    </thead>

    <tbody
      v-if="hasData"
      :class="$style.tableBody"
    >
      <tr
        v-for="(r, i) in sortedData"
        :key="i"
        :class="[
          $style.tableRow,
          props.clickable && $style['tableRow--hand']
        ]"
        @click="rowClickHandler(r)"
      >
        <td
          v-for="(c, j) in props.head"
          :key="j"
          :class="[
            $style.tableCell,
            !props.largePadding && $style['tableCell--small'] ,
            props.head[j].hidden && $style['tableCell--hidden'],
          ]"
          :style="getColumnStyle(c)"
        >
          <slot
            :name="c.name"
            v-bind="r"
          >
            <span>{{ r[c.name] }}</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { StyleValue } from 'vue';
import { computed, reactive } from 'vue';

import VTableSort from '@/components/basic/VTableSort.vue';
import type { ITableHead, ITableRow } from '@/model/components/basic/VDynamicTable';

interface EmitsType {
  (e: 'rowClick', d: ITableRow): void;
}

type PropsType = {
  head: Array<ITableHead>;
  data: Array<ITableRow>;
  sort?: {
    name: string;
    order: 'desc' | 'asc';
  };
  clickable?: boolean;
  caption?: string;
  largePadding?: boolean;
  maxWidth?: boolean;
};

type CurrentSort = {
  name: string;
  sort: 'asc' | 'desc' | null;
};

const props = withDefaults(defineProps<PropsType>(), {
  clickable: false,
  caption: '',
  sort: undefined,
});

const emit = defineEmits<EmitsType>();

const hasHead = computed(() => props.head.length !== 0);
const hasData = computed(() => props.data.length !== 0);

function descendingComparator<T>(
  a: T & ITableRow,
  b: T & ITableRow,
  orderBy: string,
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getDefaultSort(): CurrentSort {
  if (props.sort !== undefined) {
    return {
      name: props.sort.name,
      sort: props.sort.order,
    };
  }

  return {
    name: '',
    sort: null,
  };
}
const currentSort = reactive<CurrentSort>(getDefaultSort());

const sortedData = computed(() => {
  const cleanData: Array<object & ITableRow> = JSON.parse(
    JSON.stringify(props.data),
  );

  if (currentSort.sort === null) {
    return props.data;
  }

  return cleanData.sort((a, b) => (currentSort.sort === 'desc'
    ? descendingComparator(a, b, currentSort.name)
    : -descendingComparator(a, b, currentSort.name)));
});

function changeSortHandle(name: string, value: 'asc' | 'desc' | null) {
  currentSort.name = name;
  currentSort.sort = value;
}

function rowClickHandler(row: object & ITableRow) {
  if (props.clickable) {
    emit('rowClick', row);
  }
}

function getColumnStyle(c: ITableHead): StyleValue {
  const res: StyleValue = {};

  if (c.width) {
    res.width = c.width;
    res.minWidth = c.width;
    res.maxWidth = c.width;
  }
  if (c.minWidth) {
    res.minWidth = c.minWidth;
  }
  if (c.maxWidth) {
    res.maxWidth = c.maxWidth;
  }
  switch (c.align) {
  case 'center':
    res.textAlign = 'center';
    break;
  case 'right':
    res.textAlign = 'right';
    break;
  default:
  }

  return res;
}
</script>

<style module lang="scss">
.table {
  display: table;

  &MaxWidth {
    width: 100%;
  }

  &Head {
    .tableCell {
      color: var(--dark-color-600);
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
    }
  }

  &Caption {
    text-align: left;
    padding-left: 18px;
    padding-top: 24px;
    padding-bottom: 10px;
  }

  &Body {
    .tableRow {
      &:nth-child(2n) {
        background-color: var(--primary-color-200);
      }
    }
  }

  &Row {
    display: table-row;

    &--hand {
      cursor: pointer;
      transition: transform 0.1s;

      &:hover {
        transform: translateX(-5px);
      }
    }
  }

  &Cell {
    padding: 24px 20px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;

    &--small {
      padding: 5px 10px;
    }

    &--hidden {
      overflow: hidden;
    }

    span {
      white-space: nowrap;
      max-width: 100%;
    }
  }
}
</style>
