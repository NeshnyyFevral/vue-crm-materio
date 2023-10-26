<template>
  <div :class="$style.root">
    <VPreviewComponentCard
      title="Tooltip colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VTooltip> component for different colored tooltips"
    >
      <VTooltip
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :color="GlobalColors[color]"
        :title="GlobalColors[color]"
        :position="TooltipPosition.BOTTOM"
      >
        <VButton
          :variant="ButtonVariant.OUTLINED"
          :size="ButtonSize.SMALL"
          :color="GlobalColors[color]"
        >
          {{ GlobalColors[color] }}
        </VButton>
      </VTooltip>
    </VPreviewComponentCard>
    <VPreviewComponentCard
      title="Tooltip positions"
      desc="Use position={'top-start' | 'top' | 'top-end'
           | 'right-start' | 'right' | 'right-end'
           | 'bottom-start' | 'bottom' | 'bottom-end'
           | 'left-start' | 'left' | 'left-end'} prop with <VTooltip for different positioned tooltips.>"
    >
      <div :class="$style.positions">
        <div :class="$style.top">
          <VTooltip
            v-for="pos in topPos"
            :key="pos"
            :position="pos"
            :title="pos"
            :class="$style.tooltip"
          >
            <VButton :variant="ButtonVariant.TEXT">
              {{ pos }}
            </VButton>
          </VTooltip>
        </div>

        <div :class="$style.aside">
          <div :class="$style.left">
            <VTooltip
              v-for="pos in leftPos"
              :key="pos"
              :position="pos"
              :title="pos"
              :class="$style.tooltip"
            >
              <VButton :variant="ButtonVariant.TEXT">
                {{ pos }}
              </VButton>
            </VTooltip>
          </div>
          <div :class="$style.right">
            <VTooltip
              v-for="pos in rightPos"
              :key="pos"
              :position="pos"
              :title="pos"
              :class="$style.tooltip"
            >
              <VButton :variant="ButtonVariant.TEXT">
                {{ pos }}
              </VButton>
            </VTooltip>
          </div>
        </div>
        <div :class="$style.bottom">
          <VTooltip
            v-for="pos in bottomPos"
            :key="pos"
            :position="pos"
            :title="pos"
            :class="$style.tooltip"
          >
            <VButton :variant="ButtonVariant.TEXT">
              {{ pos }}
            </VButton>
          </VTooltip>
        </div>
      </div>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import VButton from '@/components/basic/VButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VTooltip from '@/components/basic/VTooltip.vue';
import { GlobalColors } from '@/model/Colors';
import { ButtonSize, ButtonVariant } from '@/model/components/basic/VButton';
import { TooltipPosition } from '@/model/components/basic/VTooltip';

const topPos: TooltipPosition[] = [
  TooltipPosition.TOP_START,
  TooltipPosition.TOP,
  TooltipPosition.TOP_END,
];

const rightPos: TooltipPosition[] = [
  TooltipPosition.RIGHT_START,
  TooltipPosition.RIGHT,
  TooltipPosition.RIGHT_END,
];

const bottomPos: TooltipPosition[] = [
  TooltipPosition.BOTTOM_START,
  TooltipPosition.BOTTOM,
  TooltipPosition.BOTTOM_END,
];

const leftPos: TooltipPosition[] = [
  TooltipPosition.LEFT_START,
  TooltipPosition.LEFT,
  TooltipPosition.LEFT_END,
];
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-gap: 30px;
}

.positions {
  margin: 40px auto 0;
  max-width: 700px;
  width: 100%;

  & .top,
  & .bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & .tooltip + .tooltip {
      margin-left: 10px;
    }
  }

  & .aside {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .tooltip + .tooltip {
      margin-top: 10px;
    }

    & .right {
      text-align: end;
    }
  }
}
</style>
