<template>
  <VCard overflow-x>
    <VOffset :mb="25">
      <VOffset :mb="5">
        <VTitle variant="heading5">
          Profile table
        </VTitle>
      </VOffset>

      <VText variant="caption">
        Description
      </VText>

      <VText variant="caption">
        This table contains information about teams, including the team's name, leader, team members, and status.
      </VText>
    </VOffset>

    <VDynamicTable
      :data="projectsData"
      max-width
      :class="$style.table"
      :head="heads"
    >
      <template #title="{ title, avatar, date }">
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="10">
            <VAvatar
              v-if="avatar"
              :size="AvatarSize.SMALL"
              light
            >
              <img
                :src="getPathImg(`images/user-profile/teams/${avatar}`)"
                :alt="`avatar-${avatar}`"
              >
            </VAvatar>
            <VAvatar
              v-else
              :letter="title"
              :size="AvatarSize.SMALL"
              :color="GlobalColors.SUCCESS"
              light
            />
          </VOffset>

          <VOffset>
            <VText
              variant="body1"
              font-weight="600"
            >
              {{ title }}
            </VText>

            <VText
              :color="GlobalColorMap['400'].default"
              variant="caption"
            >
              {{ date }}
            </VText>
          </VOffset>
        </VFlex>
      </template>

      <template #leader="{ leader }">
        <VText
          variant="body1"
          :color="GlobalColorMap['400'].default"
        >
          {{ leader }}
        </VText>
      </template>

      <template #team="{ team }">
        <VOffset
          height="30px"
          :width="`${18 * 4}px`"
          :mt="-10"
        >
          <VAvatarGroup :data="team" />
        </VOffset>
      </template>

      <template #progress="{ progress }">
        <VFlex :align="FlexAlign.CENTER">
          <VOffset
            width="100%"
            :mr="2"
          >
            <VProgress
              border-radius="5"
              :percentage="progress"
              width="75%"
            />
          </VOffset>

          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            {{ progress }}%
          </VText>
        </VFlex>
      </template>

      <template #actions="{ id, actions }">
        <VMenu
          :model-value="actions"
          :position="MenuPosition.TOP_RIGHT"
          @update:model-value="updateAction(id, $event)"
        >
          <template #body>
            <VIconButton>
              <MoreVertIcon />
            </VIconButton>
          </template>

          <VMenuItem name="Details" />
          <VMenuItem name="Archive" />
          <VSplitter />
          <VMenuItem>
            <VText
              variant="subtitle1"
              :color="GlobalColorMap['700'].error"
            >
              Delete
            </VText>
          </VMenuItem>
        </VMenu>
      </template>
    </VDynamicTable>
  </VCard>
</template>

<script setup lang="ts">
import MoreVertIcon from '@public/assets/icons/more-vert.svg';
import { ref } from 'vue';

import VAvatar from '@/components/basic/VAvatar.vue';
import VAvatarGroup from '@/components/basic/VAvatarGroup.vue';
import VCard from '@/components/basic/VCard.vue';
import VDynamicTable from '@/components/basic/VDynamicTable.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VIconButton from '@/components/basic/VIconButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VProgress from '@/components/basic/VProgress.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AvatarSize } from '@/model/components/basic/VAvatar';
import type { ITableHead } from '@/model/components/basic/VDynamicTable';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { MenuPosition } from '@/model/components/basic/VMenu';
import { TextAlign } from '@/model/components/basic/VText';
import { getPathImg } from '@/model/tools/PathTools';
import { getRandomId } from '@/model/tools/RandomTools';
import type { ProjectsCompact } from '@/model/user-profile/Projects';

const heads: ITableHead[] = [{
  label: 'NAME',
  name: 'title',
  sort: true,
}, {
  label: 'LEADER',
  name: 'leader',
  sort: true,
}, {
  label: 'TEAM',
  name: 'team',
  sort: true,
}, {
  label: 'STATUS',
  name: 'progress',
}, {
  label: 'ACTIONS',
  name: 'actions',
  align: TextAlign.CENTER,
},
];

const projectsData = ref<ProjectsCompact[]>([
  {
    id: getRandomId(),
    avatar: null,
    title: 'Website SEO',
    date: '10 May 2021',
    leader: 'Eileen',
    team: [
      { id: getRandomId(), src: 'avatars/1.png', alt: '' },
      { id: getRandomId(), src: 'avatars/7.png', alt: '' },
      { id: getRandomId(), src: 'avatars/3.png', alt: '' },
      { id: getRandomId(), src: 'avatars/4.png', alt: '' },
    ],
    progress: '38',
    actions: false,
  }, {
    id: getRandomId(),
    avatar: 'social.png',
    title: 'Social Banners',
    date: '03 Jan 2021',
    leader: 'Owen',
    team: [
      { id: getRandomId(), src: 'avatars/2.png', alt: '' },
      { id: getRandomId(), src: 'avatars/8.png', alt: '' },
    ],
    progress: '45',
    actions: false,
  }, {
    id: getRandomId(),
    avatar: 'sketch.png',
    title: 'Logo Designs',
    date: '12 Aug 2021',
    leader: 'Keith',
    team: [
      { id: getRandomId(), src: 'avatars/6.png', alt: '' },
      { id: getRandomId(), src: 'avatars/5.png', alt: '' },
      { id: getRandomId(), src: 'avatars/1.png', alt: '' },
      { id: getRandomId(), src: 'avatars/7.png', alt: '' },
    ],
    progress: '92',
    actions: false,
  }, {
    id: getRandomId(),
    avatar: 'sketch.png',
    title: 'IOS App Design',
    date: '19 Apr 2021',
    leader: 'Merline',
    team: [
      { id: getRandomId(), src: 'avatars/3.png', alt: '' },
      { id: getRandomId(), src: 'avatars/4.png', alt: '' },
      { id: getRandomId(), src: 'avatars/2.png', alt: '' },
      { id: getRandomId(), src: 'avatars/8.png', alt: '' },
    ],
    progress: '56',
    actions: false,
  }, {
    id: getRandomId(),
    avatar: 'figma.png',
    title: 'Figma Dashboards',
    date: '08 Apr 2021',
    leader: 'Harmonia',
    team: [
      { id: getRandomId(), src: 'avatars/6.png', alt: '' },
      { id: getRandomId(), src: 'avatars/5.png', alt: '' },
      { id: getRandomId(), src: 'avatars/1.png', alt: '' },
    ],
    progress: '25',
    actions: false,
  }, {
    id: getRandomId(),
    avatar: 'html.png',
    title: 'Crypto Admin',
    date: '29 Sept 2021',
    leader: 'Allyson',
    team: [
      { id: getRandomId(), src: 'avatars/7.png', alt: '' },
      { id: getRandomId(), src: 'avatars/3.png', alt: '' },
      { id: getRandomId(), src: 'avatars/4.png', alt: '' },
      { id: getRandomId(), src: 'avatars/2.png', alt: '' },
    ],
    progress: '36',
    actions: false,
  }, {
    id: getRandomId(),
    avatar: 'react.png',
    title: 'Crypto Admin',
    date: '20 Mar 2021',
    leader: 'Georgie',
    team: [
      { id: getRandomId(), src: 'avatars/8.png', alt: '' },
      { id: getRandomId(), src: 'avatars/6.png', alt: '' },
      { id: getRandomId(), src: 'avatars/5.png', alt: '' },
      { id: getRandomId(), src: 'avatars/1.png', alt: '' },
    ],
    progress: '36',
    actions: false,
  },
]);

const updateAction = (id: string, action: boolean) => {
  const listItem = projectsData.value.find((el) => el.id === id);

  if (listItem) {
    listItem.actions = action;
  }
};
</script>

<style module lang="scss">
.table {
  min-width: 800px;
}
</style>
