<template>
  <div :class="$style.connections">
    <UserProfileConnection
      v-for="connection in connections"
      :key="connection.id"
      :connected="connection.connected"
      :projects-count="connection.projectsCount"
      :post="connection.post"
      :chips="connection.chips"
      :name="connection.name"
      :avatar="connection.avatar"
      :tasks-count="connection.tasksCount"
      :connections-count="connection.connectionsCount"
    />
  </div>
</template>

<script setup lang="ts">
import UserProfileConnection from '@/components/user-profile/UserProfileConnection.vue';
import { GlobalColors } from '@/model/Colors';
import { getRandomId } from '@/model/tools/RandomTools';
import type { Connections } from '@/model/user-profile/Connections';

const connections: Connections[] = [
  {
    id: getRandomId(),
    avatar: 'avatars/1.png',
    name: 'Mark Gilbert',
    post: 'UI Designer',
    chips: [
      { id: getRandomId(), title: 'Figma', color: GlobalColors.DEFAULT },
      { id: getRandomId(), title: 'Sketch', color: GlobalColors.WARNING },
    ],
    projectsCount: '18',
    tasksCount: '834',
    connectionsCount: '129',
    connected: true,
  }, {
    id: getRandomId(),
    avatar: 'avatars/7.png',
    name: 'Eugenia Parsons',
    post: 'Developer',
    chips: [
      { id: getRandomId(), title: 'Angular', color: GlobalColors.ERROR },
      { id: getRandomId(), title: 'React', color: GlobalColors.INFO },
    ],
    projectsCount: '112',
    tasksCount: '2.31k',
    connectionsCount: '1.28k',
    connected: false,
  }, {
    id: getRandomId(),
    avatar: 'avatars/3.png',
    name: 'Francis Byrd',
    post: 'Developer',
    chips: [
      { id: getRandomId(), title: 'HTML', color: GlobalColors.PRIMARY },
      { id: getRandomId(), title: 'React', color: GlobalColors.INFO },
    ],
    projectsCount: '32',
    tasksCount: '1.25k',
    connectionsCount: '890',
    connected: false,
  }, {
    id: getRandomId(),
    avatar: 'avatars/4.png',
    name: 'Leon Lucas',
    post: 'UI/UX Designer',
    chips: [
      { id: getRandomId(), title: 'Figma', color: GlobalColors.DEFAULT },
      { id: getRandomId(), title: 'Sketch', color: GlobalColors.WARNING },
      { id: getRandomId(), title: 'Photoshop', color: GlobalColors.PRIMARY },
    ],
    projectsCount: '86',
    tasksCount: '12.4k',
    connectionsCount: '890',
    connected: false,
  }, {
    id: getRandomId(),
    avatar: 'avatars/2.png',
    name: 'Jayden Rogers',
    post: 'Full Stack Developer',
    chips: [
      { id: getRandomId(), title: 'React', color: GlobalColors.INFO },
      { id: getRandomId(), title: 'HTML', color: GlobalColors.WARNING },
      { id: getRandomId(), title: 'Node.js', color: GlobalColors.SUCCESS },
    ],
    projectsCount: '244',
    tasksCount: '23.8k',
    connectionsCount: '2.14k',
    connected: true,
  }, {
    id: getRandomId(),
    avatar: 'avatars/8.png',
    name: 'Jeanette Powell',
    post: 'SEO',
    chips: [
      { id: getRandomId(), title: 'Analysis', color: GlobalColors.DEFAULT },
      { id: getRandomId(), title: 'Writing', color: GlobalColors.SUCCESS },
    ],
    projectsCount: '32',
    tasksCount: '1.28k',
    connectionsCount: '1.27k',
    connected: false,
  },
];
</script>

<style module lang="scss">
.connections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
