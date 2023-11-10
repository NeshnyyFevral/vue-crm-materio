<template>
  <VOffset>
    <VFlex
      :align="FlexAlign.CENTER"
      :justify-content="FlexJustify.SPACE_BETWEEN"
    >
      <VFlex :align="FlexAlign.CENTER">
        <VOffset
          :mr="10"
          :class="$style.image"
        >
          <slot />
        </VOffset>
        <VOffset>
          <VOffset :mb="8">
            <VText
              variant="body2"
              font-weight="600"
            >
              {{ title }}
            </VText>
          </VOffset>
          <VOffset>
            <VText
              variant="caption"
              :color="GlobalColorMap['500'].default"
            >
              {{ desc }}
            </VText>
          </VOffset>
        </VOffset>
      </VFlex>

      <VOffset :class="$style.value">
        <VOffset :mb="5">
          <VText
            variant="body2"
            font-weight="600"
          >
            {{ value }}
          </VText>
        </VOffset>

        <VOffset>
          <VProgress
            :color="props.color"
            :percentage="props.percentage"
          />
        </VOffset>
      </VOffset>
    </VFlex>
  </VOffset>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VProgress from '@/components/basic/VProgress.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';

interface PropsType {
  title?: string;
  desc?: string;
  value?: string;
  percentage?: string;
  color?: GlobalColors;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  desc: '',
  value: '',
  percentage: '0',
  color: GlobalColors.PRIMARY,
});
</script>

<style module lang="scss">
.root {}
.image {
  background-color: var(--color-default-100);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  img {
    width: 22px;
    height: 22px;
  }
}

.value {
  min-width: 85px;
}
</style>
