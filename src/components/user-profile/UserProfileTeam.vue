<template>
  <VCard :class="$style.root">
    <template #menu>
      <VMenuItem name="Rename Team" />
      <VMenuItem name="View Details" />
      <VMenuItem name="Add to Favorites" />
      <VSplitter />
      <VMenuItem>
        <VText
          :color="GlobalColorMap['700'].error"
          variant="subtitle1"
        >
          Delete Team
        </VText>
      </VMenuItem>
    </template>

    <VOffset :mb="10">
      <VFlex :align="FlexAlign.CENTER">
        <img
          :src="getPathImg(`images/user-profile/teams/${props.avatar}`)"
          :alt="props.avatar"
          :class="$style.image"
        >

        <VOffset :ml="10">
          <VTitle variant="heading6">
            {{ props.title }}
          </VTitle>
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset :mb="15">
      <VText
        :color="GlobalColorMap['500'].default"
        variant="subtitle1"
      >
        {{ props.desc }}
      </VText>
    </VOffset>

    <VFlex
      :align="hasChanged ? FlexAlign.START : FlexAlign.CENTER"
      :justify-content="hasChanged ? FlexJustify.CENTER : FlexJustify.SPACE_BETWEEN"
      :direction-change-trigger="breakpoint"
    >
      <VAvatarGroup
        :style="{'height': `35px`}"
        :data="props.avatarGroup"
      />

      <VFlex :align="FlexAlign.CENTER">
        <VOffset
          v-for="chip in props.chips"
          :key="chip.id"
          :mr="10"
          :mt="hasChanged ? 10 : 0"
        >
          <VChip
            :variant="ChipVariant.LIGHT"
            :color="chip.color"
            :size="ChipSize.DEFAULT"
          >
            {{ chip.title }}
          </VChip>
        </VOffset>
      </VFlex>
    </VFlex>
  </VCard>
</template>

<script setup lang="ts">
import VAvatarGroup from '@/components/basic/VAvatarGroup.vue';
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap } from '@/model/Colors';
import type { AvatarGroup } from '@/model/components/basic/VAvatar';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getPathImg } from '@/model/tools/PathTools';
import { useResizeTrigger } from '@/model/tools/ResizeTools';
import type { ChipsGroup } from '@/model/user-profile/Teams';

interface PropsType {
  avatar: any;
  title: string;
  desc: string;
  avatarGroup: AvatarGroup[];
  chips: ChipsGroup[];
}

const props = defineProps<PropsType>();

const breakpoint = 400;
const hasChanged = useResizeTrigger(breakpoint);
</script>

<style module lang="scss">
.root {
}

.image {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
</style>
