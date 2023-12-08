<template>
  <VCard>
    <UserProfileList :data="overviewData" />
  </VCard>
</template>

<script setup lang="ts">
import PeopleIcon from '@public/assets/icons/people.svg';
import ProjectIcon from '@public/assets/icons/projectAdd.svg';
import SuccessIcon from '@public/assets/icons/success.svg';

import VCard from '@/components/basic/VCard.vue';
import UserProfileList from '@/components/user-profile/profile/units/UserProfileList.vue';
import { getRandomId } from '@/model/tools/RandomTools';
import type { UserData } from '@/model/user-profile/Profile';

const overviewData: UserData[] = [
  {
    id: getRandomId(),
    title: 'OVERVIEW',
    fields: [
      {
        id: getRandomId(),
        icon: SuccessIcon,
        name: 'Task Compiled',
        value: '13.5k',
      }, {
        id: getRandomId(),
        icon: PeopleIcon,
        name: 'Connections',
        value: '897',
      }, {
        id: getRandomId(),
        icon: ProjectIcon,
        name: 'Projects Compiled',
        value: '146',
      },
    ],
  },
];
</script>
