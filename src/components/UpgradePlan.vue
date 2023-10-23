<template>
  <div :class="$style.root">
    <VFlex
      :align="FlexAlign.CENTER"
      :justify-content="FlexJustify.SPACE_BETWEEN"
    >
      <VOffset>
        <VFlex>
          <VAvatar
            :color="GlobalColors[color] as GlobalColors"
            :variant="AvatarVariant.ROUNDED"
            outlined
          >
            <div v-if="props.icon">
              <component :is="icon" />
            </div>

            <div v-else>
              <slot />
            </div>
          </VAvatar>

          <VOffset :ml="10">
            <VText
              variant="body2"
              font-weight="500"
            >
              {{ props.title }}
            </VText>
            <VText
              :color="GlobalColorMap['700'][props.color]"
              variant="caption"
              font-weight="500"
              link
            >
              {{ props.desc }}
            </VText>
          </VOffset>
        </VFlex>
      </VOffset>

      <VOffset :class="$style.price">
        <VText
          variant="caption"
          :class="$style.prefix"
          font-weight="600"
        >
          $
        </VText>
        <VTitle
          variant="heading4"
          :class="$style.value"
        >
          {{ formatNumber(props.price) }}
        </VTitle>
        <VOffset :mt="'auto'">
          <VText
            variant="caption"
            :class="$style.suffix"
            :color="GlobalColorMap['400'].default"
          >
            /{{ props.timeframe }}
          </VText>
        </VOffset>
      </VOffset>
    </VFlex>
  </div>
</template>

<script setup lang="ts">
import { type Component, computed } from 'vue';

import VAvatar from '@/components/basic/VAvatar.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AvatarVariant } from '@/model/components/basic/VAvatar';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { formatNumber } from '@/model/tools/NumberTools';

interface PropsType {
  color?: GlobalColors;
  icon?: Component;
  title?: string;
  desc?: string;
  price?: string;
  timeframe?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  icon: undefined,
  title: '',
  desc: 'Buy',
  price: '0',
  timeframe: 'Year',
});

const color = computed(() => GlobalColorMap['100'][props.color]);
</script>

<style module lang="scss">
.root {
  --color-plan: v-bind(color);

  background-color: var(--color-plan);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
}

.price {
  display: flex;
}

.prefix {
  line-height: 1rem;
}
</style>
