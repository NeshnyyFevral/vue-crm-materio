<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Rename Project" />
      <VMenuItem name="View Details" />
      <VMenuItem name="Add to Favorites" />
      <VSplitter />
      <VMenuItem>
        <VText
          :color="GlobalColorMap['700'].error"
          variant="subtitle1"
        >
          Leave Project
        </VText>
      </VMenuItem>
    </template>

    <VOffset :mb="10">
      <VFlex :align="FlexAlign.START">
        <img
          :src="getPathImg(`images/user-profile/teams/${props.avatar}`)"
          :alt="props.avatar"
          :class="$style.image"
        >

        <VOffset :ml="10">
          <VOffset>
            <VTitle variant="heading6">
              {{ props.title }}
            </VTitle>
          </VOffset>

          <VOffset>
            <VFlex :align="FlexAlign.CENTER">
              <VOffset :mr="5">
                <VText
                  variant="body2"
                  font-weight="600"
                  :color="GlobalColorMap['400'].default"
                >
                  Client:
                </VText>
              </VOffset>
              <VText
                variant="body2"
                :color="GlobalColorMap['400'].default"
              >
                {{ props.client }}
              </VText>
            </VFlex>
          </VOffset>
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset :mb="20">
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.SPACE_BETWEEN"
        :direction-change-trigger="breakpoint"
      >
        <VOffset :class="$style.totalBudget">
          <VOffset>
            <VFlex :align="FlexAlign.CENTER">
              <VOffset>
                <VText
                  variant="subtitle1"
                  font-weight="600"
                >
                  {{ props.totalBudgetGot }}
                </VText>
              </VOffset>
              <VOffset>
                <VText
                  variant="subtitle1"
                  :color="GlobalColorMap['500'].default"
                >
                  /{{ props.totalBudgetNeed }}
                </VText>
              </VOffset>
            </VFlex>
          </VOffset>

          <VOffset>
            <VText
              variant="subtitle1"
              :color="GlobalColorMap['500'].default"
            >
              Total Budget
            </VText>
          </VOffset>
        </VOffset>

        <VOffset>
          <VOffset>
            <VFlex :align="FlexAlign.CENTER">
              <VOffset :mr="5">
                <VText
                  variant="subtitle1"
                  font-weight="600"
                >
                  Start Date:
                </VText>
              </VOffset>
              <VText
                variant="subtitle1"
                :color="GlobalColorMap['400'].default"
              >
                {{ props.startDate }}
              </VText>
            </VFlex>
          </VOffset>

          <VOffset>
            <VFlex
              :justify-content="FlexJustify.END"
              :align="FlexAlign.CENTER"
            >
              <VOffset :mr="5">
                <VText
                  variant="subtitle1"
                  font-weight="600"
                >
                  Deadline
                </VText>
              </VOffset>
              <VText
                variant="subtitle1"
                :color="GlobalColorMap['400'].default"
              >
                {{ props.deadline }}
              </VText>
            </VFlex>
          </VOffset>
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset :mb="20">
      <VText
        variant="subtitle1"
        :color="GlobalColorMap['400'].default"
      >
        {{ props.desc }}
      </VText>
    </VOffset>

    <VSplitter />

    <VOffset
      :mt="20"
      :mb="10"
    >
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.SPACE_BETWEEN"
        :direction-change-trigger="breakpoint"
      >
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="5">
            <VText
              variant="subtitle1"
              font-weight="600"
            >
              All Hours:
            </VText>
          </VOffset>

          <VText
            variant="subtitle1"
            :color="GlobalColorMap['400'].default"
          >
            {{ props.allHours }}
          </VText>
        </VFlex>
        <VChip
          :variant="ChipVariant.LIGHT"
          :color="props.daysLeftColor"
        >
          {{ props.daysLeft }} days left
        </VChip>
      </VFlex>
    </VOffset>

    <VOffset :mb="10">
      <VOffset :mb="7">
        <VFlex
          :align="FlexAlign.CENTER"
          :justify-content="FlexJustify.SPACE_BETWEEN"
        >
          <VText
            variant="caption"
            :color="GlobalColorMap['400'].default"
          >
            Tasks: {{ taskComplete }}/{{ props.taskNeed }}
          </VText>

          <VText
            variant="caption"
            :color="GlobalColorMap['400'].default"
          >
            {{ perc }}% Completed
          </VText>
        </VFlex>
      </VOffset>

      <VProgress
        border-radius="5"
        height="10px"
        weight="8"
        :percentage="perc"
        width="100%"
      />
    </VOffset>

    <VOffset>
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.SPACE_BETWEEN"
      >
        <VFlex :align="FlexAlign.CENTER">
          <VOffset
            height="30px"
            width="90px"
            :mr="5"
          >
            <VAvatarGroup :data="props.avatarGroup" />
          </VOffset>
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            {{ props.membersCount }} members
          </VText>
        </VFlex>

        <VFlex>
          <VOffset :mr="5">
            <CommentsIcon :class="$style.commentsIcon" />
          </VOffset>

          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            {{ props.comments }}
          </VText>
        </VFlex>
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import CommentsIcon from '@public/assets/icons/comments.svg';
import { computed } from 'vue';

import VAvatarGroup from '@/components/basic/VAvatarGroup.vue';
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VProgress from '@/components/basic/VProgress.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import type { AvatarGroup } from '@/model/components/basic/VAvatar';
import { ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  avatar: string;
  title: string;
  client: string;
  totalBudgetGot: string;
  totalBudgetNeed: string;
  startDate: string;
  deadline: string;
  desc: string;
  allHours: string;
  daysLeft: number;
  daysLeftColor: GlobalColors;
  taskComplete: number;
  taskNeed: number;
  avatarGroup: AvatarGroup[];
  membersCount: string;
  comments: number;
}

const props = defineProps<PropsType>();
const perc = computed(() => `${Math.round((props.taskComplete / props.taskNeed) * 100)}`);

const breakpoint = 365;
</script>

<style module lang="scss">
.root {
}

.image {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}

.totalBudget {
  background-color: var(--color-default-100);
  padding: 5px 10px;
  border-radius: 5px;
}

.commentsIcon {
  path {
    fill: var(--color-default-500);
  }
}
</style>
