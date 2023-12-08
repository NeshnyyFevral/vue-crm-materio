<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Share teams" />
      <VMenuItem name="Suggest edits" />
      <VSplitter />
      <VMenuItem name="Report bug" />
    </template>

    <VOffset :mb="10">
      <VTitle variant="heading6">
        Teams
      </VTitle>
    </VOffset>

    <VOffset :mb="20">
      <UserProfileTeamsCompact
        v-for="team in userProfileTeamsCompactData"
        :key="team.id"
        :members-count="team.membersCount"
        :chip-title="team.chipTitle"
        :chip-color="team.chipColor"
        :name="team.name"
        :avatar="team.avatar"
      />
    </VOffset>

    <VOffset>
      <VFlex :justify-content="FlexJustify.CENTER">
        <VButton :variant="ButtonVariant.TEXT">
          View all teams
        </VButton>
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import VButton from '@/components/basic/VButton.vue';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VTitle from '@/components/basic/VTitle.vue';
import UserProfileTeamsCompact from '@/components/user-profile/profile/units/UserProfileTeamsCompact.vue';
import { GlobalColors } from '@/model/Colors';
import { ButtonVariant } from '@/model/components/basic/VButton';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { getRandomId } from '@/model/tools/RandomTools';
import type { TeamsCompact } from '@/model/user-profile/Teams';

const userProfileTeamsCompactData: TeamsCompact[] = [
  {
    id: getRandomId(),
    avatar: 'react.png',
    name: 'React Developers',
    membersCount: '72',
    chipTitle: 'Developer',
    chipColor: GlobalColors.ERROR,
  }, {
    id: getRandomId(),
    avatar: 'support.png',
    name: 'Support Team',
    membersCount: '122',
    chipTitle: 'Support',
    chipColor: GlobalColors.PRIMARY,
  }, {
    id: getRandomId(),
    avatar: 'figma.png',
    name: 'UI Designer',
    membersCount: '7',
    chipTitle: 'Designer',
    chipColor: GlobalColors.INFO,
  }, {
    id: getRandomId(),
    avatar: 'vue.png',
    name: 'Vue.js Developers',
    membersCount: '289',
    chipTitle: 'Developer',
    chipColor: GlobalColors.ERROR,
  }, {
    id: getRandomId(),
    avatar: 'twitter.png',
    name: 'Digital Marketing',
    membersCount: '72',
    chipTitle: 'Marketing',
    chipColor: GlobalColors.DEFAULT,
  },
];
</script>
