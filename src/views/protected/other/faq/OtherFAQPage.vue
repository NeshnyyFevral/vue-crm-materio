<template>
  <VOffset :class="$style.root">
    <VOffset :mb="15">
      <OtherFAQHeader v-model="askValue" />
    </VOffset>

    <VOffset>
      <VOffset>
        <VFlex
          :justify-content="FlexJustify.SPACE_BETWEEN"
          :align="FlexAlign.START"
          :direction-change-trigger="breakpoint"
        >
          <VOffset
            :min-width="hasChange ? 'none' : '240px'"
            :width="hasChange ? '100%' : 'auto'"
            :mr="20"
            :mb="hasChange ? 20 : 0"
          >
            <VTabs
              :data="faqStore.tabs"
              :direction="FlexDirection.COLUMN"
              :active="activeRoute"
              :justify-content="FlexJustify.START"
              filled
            />
          </VOffset>

          <VOffset>
            <RouterView />
          </VOffset>
        </VFlex>
      </VOffset>
    </VOffset>
  </voffset>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTabs from '@/components/basic/VTabs.vue';
import OtherFAQHeader from '@/components/other/faq/OtherFAQHeader.vue';
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from '@/model/components/basic/VFlex';
import { useResizeTrigger } from '@/model/tools/ResizeTools';
import { useFAQStore } from '@/stores/faq';

const route = useRoute();
const activeRoute = ref<string>('');
const askValue = ref<string>('');

const faqStore = useFAQStore();

const breakpoint = 580;
const hasChange = useResizeTrigger(breakpoint);

watch(() => route.name, () => {
  if (typeof route.name === 'string') {
    [, activeRoute.value] = route.name.split('/');
  }
}, { immediate: true });
</script>

<style module lang="scss">
.root {}
</style>
