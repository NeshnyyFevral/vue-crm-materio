<template>
  <div :class="$style.root">
    <VPreviewComponentCard title="Texts">
      <div>
        <div
          v-for="item in generateItems(COUNT_ITEMS)"
          :key="item.row"
          :class="$style.item"
        >
          <span>{{ item.row }}</span>
          <div>
            <p :class="$style[item.class]">
              {{ item.text }}
            </p>
            <div :class="$style.desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';

const COUNT_ITEMS = 6;

const descriptions = [
  'font-size: 16px / line-height: 28px / font-weight: 400',
  'font-size: 14px / line-height: 21px / font-weight: 500',
  'font-size: 16px / line-height: 24px / font-weight: 400',
  'font-size: 14px / line-height: 21px / font-weight: 400',
  'font-size: 14px / line-height: 17px / font-weight: 500 / text-transform: uppercase',
  'font-size: 12px / line-height: 15px / font-weight: 400',
  'font-size: 12px / line-height: 15px / font-weight: 400 / text-transform: uppercase',
];

const rows = [
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
];

const generateItems = (count: number) => {
  const items = [];
  for (let i = 1; i <= count; i += 1) {
    items.push({
      row: rows[i - 1],
      class: rows[i - 1],
      text: 'Cupcake ipsum dolor sit amet chocolate bar pastry sesame snaps.',
      desc: descriptions[i - 1],
    });
  }

  return items;
};
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root{}

.item {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;

  span {
    margin-right: 200px;
  }

  & + & {
    margin-top: 50px;
  }
}

.desc {
  @include body2;

  opacity: 0.7;
  margin-top: 5px;
}

.subtitle1 { @include subtitle1; }
.subtitle2 { @include subtitle2; }
.body1 { @include body1; }
.body2 { @include body2; }
.button { @include button; }
.caption { @include caption; }
.overline { @include overline; }
</style>
