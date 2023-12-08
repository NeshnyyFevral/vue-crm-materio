<template>
  <VCard overflow-x>
    <VTable
      v-slot="{ row }"
      :data="projectsData"
      max-width
      small-paddings
      :class="$style.table"
    >
      <VTableColumn
        name="title"
        label="NAME"
        :row="row"
        sortable
      >
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="10">
            <VAvatar
              v-if="row.avatar"
              :size="AvatarSize.SMALL"
              light
            >
              <img
                :src="getPathImg(`images/user-profile/teams/${row.avatar}`)"
                :alt="`avatar-${row.avatar}`"
              >
            </VAvatar>
            <VAvatar
              v-else
              :letter="row.title"
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
              {{ row.title }}
            </VText>

            <VText
              :color="GlobalColorMap['400'].default"
              variant="caption"
            >
              {{ row.date }}
            </VText>
          </VOffset>
        </VFlex>
      </VTableColumn>

      <VTableColumn
        name="leader"
        label="LEADER"
        :row="row"
        sortable
      >
        <VText
          variant="body1"
          :color="GlobalColorMap['400'].default"
        >
          {{ row.leader }}
        </VText>
      </VTableColumn>

      <VTableColumn
        name="team"
        label="TEAM"
        :row="row"
      >
        <VOffset
          height="30px"
          :width="`${18 * 4}px`"
          :mt="-10"
        >
          <VAvatarGroup :data="row.team" />
        </VOffset>
      </VTableColumn>

      <VTableColumn
        name="progress"
        label="STATUS"
        :row="row"
        sortable
      >
        <VFlex :align="FlexAlign.CENTER">
          <VOffset
            width="100%"
            :mr="2"
          >
            <VProgress
              border-radius="5"
              :percentage="row.progress"
              width="75%"
            />
          </VOffset>

          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            {{ row.progress }}%
          </VText>
        </VFlex>
      </VTableColumn>

      <VTableColumn
        name="actions"
        label="ACTIONS"
        :row="row"
        :style="{'textAlign': 'center'}"
      >
        <VMenu
          v-model="row.actions"
          :position="MenuPosition.TOP_RIGHT"
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
      </VTableColumn>
    </VTable>
  </VCard>
</template>
<script setup lang="ts">
import MoreVertIcon from '@public/assets/icons/more-vert.svg';
import { ref } from 'vue';

import VAvatar from '@/components/basic/VAvatar.vue';
import VAvatarGroup from '@/components/basic/VAvatarGroup.vue';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VIconButton from '@/components/basic/VIconButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VProgress from '@/components/basic/VProgress.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VTable from '@/components/basic/VTable.vue';
import VTableColumn from '@/components/basic/VTableColumn.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AvatarSize } from '@/model/components/basic/VAvatar';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { MenuPosition } from '@/model/components/basic/VMenu';
import { getPathImg } from '@/model/tools/PathTools';
import { getRandomId } from '@/model/tools/RandomTools';
import type { ProjectsCompact } from '@/model/user-profile/Projects';

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
</script>

<style module lnag="scss">
.table {
  min-width: 800px;
}
</style>
