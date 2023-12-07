<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Share Connection" />
      <VMenuItem name="Block Connection" />
      <VSplitter />
      <VMenuItem>
        <VText
          :color="GlobalColorMap['700'].error"
          variant="subtitle1"
        >
          Delete
        </VText>
      </VMenuItem>
    </template>

    <VOffset :mb="10">
      <VAvatar
        :variant="AvatarVariant.CYCLE"
        :size="AvatarSize.EXTRA_LARGE"
        :class="$style.avatar"
      >
        <img
          :src="getPathImg(`${props.avatar}`)"
          :alt="props.avatar"
        >
      </VAvatar>
    </VOffset>

    <VOffset>
      <VTitle
        :align="TextAlign.CENTER"
        variant="heading5"
      >
        {{ props.name }}
      </VTitle>
    </VOffset>

    <VOffset :mb="10">
      <VText
        :align="TextAlign.CENTER"
        :color="GlobalColorMap['400'].default"
        variant="subtitle1"
      >
        {{ props.post }}
      </VText>
    </VOffset>

    <VOffset :mb="20">
      <VFlex
        :justify-content="FlexJustify.CENTER"
        :align="FlexAlign.CENTER"
      >
        <VChip
          v-for="chip in props.chips"
          :key="chip.id"
          :variant="ChipVariant.LIGHT"
          :color="chip.color"
          :class="$style.chip"
        >
          {{ chip.title }}
        </VChip>
      </VFlex>
    </VOffset>

    <VOffset :mb="20">
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.SPACE_AROUND"
      >
        <VOffset>
          <VTitle
            :align="TextAlign.CENTER"
            variant="heading5"
          >
            {{ props.projectsCount }}
          </VTitle>
          <VText
            :color="GlobalColorMap['400'].default"
            :align="TextAlign.CENTER"
            variant="subtitle1"
          >
            Projects
          </VText>
        </VOffset>

        <VOffset>
          <VTitle
            :align="TextAlign.CENTER"
            variant="heading5"
          >
            {{ props.connectionsCount }}
          </VTitle>
          <VText
            :color="GlobalColorMap['400'].default"
            :align="TextAlign.CENTER"
            variant="subtitle1"
          >
            Connections
          </VText>
        </VOffset>

        <VOffset>
          <VTitle
            :align="TextAlign.CENTER"
            variant="heading5"
          >
            {{ props.tasksCount }}
          </VTitle>
          <VText
            :color="GlobalColorMap['400'].default"
            :align="TextAlign.CENTER"
            variant="subtitle1"
          >
            Tasks
          </VText>
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset>
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.CENTER"
      >
        <VOffset :mr="10">
          <VButton :variant="props.connected ? ButtonVariant.CONTAINED : ButtonVariant.OUTLINED">
            <VFlex :align="FlexAlign.CENTER">
              <VOffset :mr="5">
                <ConnectedIcon v-if="props.connected" />
                <AddConnectionIcon v-else />
              </VOffset>

              <VOffset>{{ props.connected ? 'Connected' : 'Connect' }}</VOffset>
            </VFlex>
          </VButton>
        </VOffset>

        <VOffset>
          <VButton
            :size="ButtonSize.SMALL"
            :variant="ButtonVariant.OUTLINED"
            :color="GlobalColors.DEFAULT"
          >
            <MessageIcon :class="$style.messageIcon" />
          </VButton>
        </VOffset>
      </VFlex>
    </VOffset>
  </VCard>
</template>
<script setup lang="ts">
import AddConnectionIcon from '@public/assets/icons/addConnection.svg';
import ConnectedIcon from '@public/assets/icons/connected.svg';
import MessageIcon from '@public/assets/icons/message.svg';

import VAvatar from '@/components/basic/VAvatar.vue';
import VButton from '@/components/basic/VButton.vue';
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AvatarSize, AvatarVariant } from '@/model/components/basic/VAvatar';
import { ButtonSize, ButtonVariant } from '@/model/components/basic/VButton';
import type { Chip } from '@/model/components/basic/VChip';
import { ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { TextAlign } from '@/model/components/basic/VText';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  avatar: string;
  name: string;
  post: string;
  chips: Chip[];
  projectsCount: string;
  tasksCount: string;
  connectionsCount: string;
  connected: boolean;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.avatar {
  margin: 0 auto;
}

.chip {
  & + & {
    margin-left: 15px;
  }
}

.messageIcon {
  width: 15px;
  height: 22px;

  transform: scale(1.5);

  path {
    fill: var(--color-default-400)
  }
}
</style>
