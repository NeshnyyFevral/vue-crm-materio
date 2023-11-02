<template>
  <VFlex
    :align="FlexAlign.CENTER"
    :justify-content="FlexJustify.SPACE_BETWEEN"
  >
    <VOffset>
      <VFlex>
        <VOffset :mr="10">
          <VAvatar
            light
            :letter="props.name"
          />
        </VOffset>

        <VOffset>
          <VOffset>
            <StatisticBase
              :icon="ArrowIcon"
              :type="props.type"
            >
              <template #value>
                <VText
                  variant="body1"
                  font-weight="600"
                >
                  {{ props.value }}
                </VText>
              </template>
              <template #suffix="{color, prefix}">
                <VText
                  variant="body2"
                  :color="color"
                >
                  {{ prefix }}{{ props.percentage }}%
                </VText>
              </template>
            </StatisticBase>
          </VOffset>
          <VOffset>
            <VText
              variant="caption"
              :color="GlobalColorMap['400'].default"
            >
              {{ props.name }}
            </VText>
          </VOffset>
        </VOffset>
      </VFlex>
    </VOffset>
    <VOffset>
      <VOffset>
        <VText
          variant="body2"
          font-weight="600"
        >
          {{ props.count }}
        </VText>
      </VOffset>
      <VOffset>
        <VText variant="caption">
          {{ props.desc }}
        </VText>
      </VOffset>
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import ArrowIcon from '@/assets/icons/chevron-up.svg';
import VAvatar from '@/components/basic/VAvatar.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import StatisticBase from '@/components/dashboards/StatisticBase.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';

interface PropsType {
  name: string;
  count: string;
  desc: string;
  type: StatisticBasicType;
  value: string;
  percentage: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  name: '',
  count: '',
  desc: '',
  type: StatisticBasicType.UP,
  value: '$0',
  percentage: '',
});
</script>
