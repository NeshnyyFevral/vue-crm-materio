<template>
  <VOffset
    v-for="item in props.data"
    :key="item.id"
    :mb="25"
    :class="$style.listItem"
  >
    <VOffset :mb="15">
      <VText
        font-weight="600"
        variant="caption"
      >
        {{ item.title }}
      </VText>
    </VOffset>

    <VOffset
      v-for="field in item.fields"
      :key="field.id"
      :mb="10"
    >
      <VFlex :align="FlexAlign.CENTER">
        <VOffset :mr="7">
          <component :is="field.icon" />
        </VOffset>

        <VOffset :mr="7">
          <VText
            variant="subtitle1"
            font-weight="600"
          >
            {{ field.name }}:
          </VText>
        </VOffset>

        <VOffset>
          <VText variant="subtitle1">
            {{ field.value }}
          </VText>
        </VOffset>
      </VFlex>
    </VOffset>
  </VOffset>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { FlexAlign } from '@/model/components/basic/VFlex';
import type { UserData } from '@/model/user-profile/Profile';

interface PropsType {
  data: UserData[];
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.listItem {
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
