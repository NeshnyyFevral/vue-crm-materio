<template>
  <VOffset :class="$style.root">
    <VOffset>
      <VFlex
        :align="props.align"
        :justify-content="props.justifyContent"
      >
        <sup :class="$style.pre">$</sup>
        <span :class="$style.value">{{ props.value }}</span>
        <sup :class="$style.suf">/month</sup>
      </VFlex>
    </VOffset>

    <VOffset
      v-show="props.desc"
      :class="$style.desc"
    >
      <VText
        :align="TextAlign.CENTER"
        variant="body2"
        :color="GlobalColorMap['400'].default"
      >
        {{ props.desc }}
      </VText>
    </VOffset>
  </VOffset>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap } from '@/model/Colors';
import type { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { TextAlign } from '@/model/components/basic/VText';

interface PropsType {
  value: number;
  align?: FlexAlign;
  justifyContent?: FlexJustify;
  desc: string | undefined;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.root {
  position: relative;
}

.desc {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}

.pre {
  align-self: flex-start;
}

.value {
  font-size: 40px;
  color: var(--color-primary-700);
  font-weight: 500;
}

.suf {
  margin-top: 30px;
  align-self: flex-end;
}
</style>
