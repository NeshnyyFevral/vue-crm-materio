<template>
  <div :class="$style.root">
    <VPreviewComponentCard title="Headings">
      <div>
        <div
          v-for="item in generateItems(COUNT_ITEMS)"
          :key="item.row"
          :class="$style.item"
        >
          <span>{{ item.row }}</span>
          <div>
            <component
              :is="item.tag"
              :class="$style[item.class]"
            >
              {{ item.text }}
            </component>
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
  'font-size: 96px / line-height: 112px / font-weight: 500',
  'font-size: 60px / line-height: 72px / font-weight: 500',
  'font-size: 48px / line-height: 56px / font-weight: 500',
  'font-size: 32px / line-height: 40px / font-weight: 500',
  'font-size: 24px / line-height: 32px / font-weight: 500',
  'font-size: 20px / line-height: 32px / font-weight: 500',
];

const generateItems = (count: number) => {
  const items = [];
  for (let i = 1; i <= count; i += 1) {
    items.push({
      tag: `h${i}`,
      row: `H${i}`,
      class: `heading${i}`,
      text: `Heading ${i}`,
      desc: descriptions[i - 1],
    });
  }

  return items;
};
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {}

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

.heading1 { @include heading1; }
.heading2 { @include heading2; }
.heading3 { @include heading3; }
.heading4 { @include heading4; }
.heading5 { @include heading5; }
.heading6 { @include heading6; }
</style>
