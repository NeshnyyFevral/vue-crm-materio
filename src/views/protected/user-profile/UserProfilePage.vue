<template>
  <VOffset :mb="30">
    <UserProfileIntro />
  </VOffset>

  <VFlex>
    <VTabs :data="tabsData" />
  </VFlex>

  <VOffset :mt="30">
    <RouterView />
  </VOffset>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTabs from '@/components/basic/VTabs.vue';
import UserProfileIntro from '@/components/user-profile/UserProfileIntro.vue';
import type { TabsData } from '@/model/components/basic/VTabs';
import { getRandomId } from '@/model/tools/RandomTools';
import { Routes } from '@/router';

const tabsData: TabsData[] = [{
  id: getRandomId(),
  name: 'Profile',
  route: Routes.USER_PROFILE_PROFILE,
  icon: null,
  disabled: false,
}, {
  id: getRandomId(),
  name: 'Teams',
  route: Routes.USER_PROFILE_TEAMS,
  icon: null,
  disabled: false,
}, {
  id: getRandomId(),
  name: 'Projects',
  route: Routes.USER_PROFILE_PROJECTS,
  icon: null,
  disabled: false,
}, {
  id: getRandomId(),
  name: 'Connections',
  route: Routes.USER_PROFILE_CONNECTIONS,
  icon: null,
  disabled: false,
},
];
</script>
