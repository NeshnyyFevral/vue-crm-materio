<template>
  <VOffset :mb="10">
    <VFlex
      :align="FlexAlign.CENTER"
      :justify-content="FlexJustify.SPACE_BETWEEN"
    >
      <VOffset>
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="10">
            <VAvatar>
              <img
                :src="getPathImg(`images/user-profile/teams/${props.avatar}`)"
                alt="avatar"
              >
            </VAvatar>
          </VOffset>

          <VOffset :mt="5">
            <VOffset :mb="5">
              <VText
                variant="body2"
                font-weight="600"
              >
                {{ props.name }}
              </VText>
            </VOffset>

            <VOffset :mb="5">
              <VText variant="caption">
                {{ props.membersCount }} Connections
              </VText>
            </VOffset>
          </VOffset>
        </VFlex>
      </VOffset>

      <VOffset>
        <VChip
          :variant="ChipVariant.LIGHT"
          :color="props.chipColor"
        >
          {{ props.chipTitle }}
        </VChip>
      </VOffset>
    </VFlex>
  </VOffset>
</template>

<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import type { GlobalColors } from '@/model/Colors';
import { ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  avatar: string;
  name: string;
  membersCount: string;
  chipTitle: string;
  chipColor: GlobalColors;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.icon {
  width: 5px;
  height: 15px;

  transform: scale(5);
}
</style>
