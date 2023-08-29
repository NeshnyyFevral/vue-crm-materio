<template>
  <table
    :class="[
      $style.table,
      withKey && $style.hasWithKey,
      maxWidth && $style.hasMaxWidth,
      smallPaddings && $style.hasSmallPaddings,
    ]"
  >
    <thead>
      <tr v-if="headCells.length">
        <th
          v-for="(t, i) in headCells"
          :key="`${t.label}_${i}`"
          :class="$style.th"
        >
          <span :title="t.label">
            {{ t.label }}
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(row, i) in props.data"
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
  onMounted,
  ref,
  useSlots,
} from 'vue';

interface HeadCells {
  label: string;
}

interface PropsType {
  data: any[];
  withKey?: boolean;
  maxWidth?: boolean;
  smallPaddings?: boolean;
}

const slots = useSlots();
const props = defineProps<PropsType>();
const headCells = ref<HeadCells[]>([]);

const getSlots = computed(() => {
  if (slots.default === undefined) return [];

  return slots.default({});
});

const registerTableCell = () => {
  getSlots.value.forEach((node: VNode) => {
    const nodeProp = node.props;

    headCells.value.push({
      label: nodeProp!.label,
    });
  });
};

onMounted(() => {
  registerTableCell();
});
</script>

<style module lang="scss">
$sizes: (
  small: 5px,
  normal: 15px,
);

@import '@/scss/mixins/typography';

.table {
  &.hasWithKey {
    .th,
    .item td {
      &:not(:first-child) {
        text-align: end;
      }
    }
  }

  &.hasMaxWidth {
    width: 100%;
  }

  &.hasSmallPaddings {
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
}

.item {
  border-top: 1px solid var(--color-border);

  & td {
    @include body2;

    color: var(--color-text);
    padding: map-get($sizes, normal);
  }
}
</style>
