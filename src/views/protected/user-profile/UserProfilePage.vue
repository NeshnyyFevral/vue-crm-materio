<template>
  <VOffset :mb="30">
    <UserProfileIntro />
  </VOffset>

  <VFlex>
    <VTabs
      :active="activeRoute"
      :data="tabsData"
      filled
    />
  </VFlex>

  <VOffset :mt="30">
    <RouterView />
  </VOffset>
</template>

<script setup lang="ts">
import ConnectionIcon from '@public/assets/icons/connection.svg';
import ProfileIcon from '@public/assets/icons/people.svg';
import ProjectsIcon from '@public/assets/icons/projects.svg';
import TeamsIcon from '@public/assets/icons/team.svg';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTabs from '@/components/basic/VTabs.vue';
import UserProfileIntro from '@/components/user-profile/UserProfileIntro.vue';
import type { TabsData } from '@/model/components/basic/VTabs';
import { getRandomId } from '@/model/tools/RandomTools';
import { Routes } from '@/router';

const route = useRoute();
const activeRoute = ref<string>('');

watch(() => route.name, () => {
  if (typeof route.name === 'string') {
    [, activeRoute.value] = route.name.split('/');
  }
}, { immediate: true });

const tabsData: TabsData[] = [{
  id: getRandomId(),
  name: 'Profile',
  route: Routes.USER_PROFILE_PROFILE,
  icon: ProfileIcon,
  disabled: false,
}, {
  id: getRandomId(),
  name: 'Teams',
  route: Routes.USER_PROFILE_TEAMS,
  icon: TeamsIcon,
  disabled: false,
}, {
  id: getRandomId(),
  name: 'Projects',
  route: Routes.USER_PROFILE_PROJECTS,
  icon: ProjectsIcon,
  disabled: false,
}, {
  id: getRandomId(),
  name: 'Connections',
  route: Routes.USER_PROFILE_CONNECTIONS,
  icon: ConnectionIcon,
  disabled: false,
},
];
</script>
