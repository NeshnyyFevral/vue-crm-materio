<template>
  <VOffset>
    <VTitle variant="heading5">
      Projects
    </VTitle>
  </VOffset>

  <div :class="$style.projects">
    <UserProfileProject
      v-for="proj in projects"
      :key="proj.id"
      :task-complete="proj.taskComplete"
      :members-count="proj.membersCount"
      :comments="proj.comments"
      :all-hours="proj.allHours"
      :avatar="proj.avatar"
      :title="proj.title"
      :total-budget-need="proj.totalBudgetNeed"
      :task-need="proj.taskNeed"
      :total-budget-got="proj.totalBudgetGot"
      :client="proj.client"
      :days-left="proj.daysLeft"
      :deadline="proj.deadline"
      :avatar-group="proj.avatarGroup"
      :start-date="proj.startDate"
      :desc="proj.desc"
      :days-left-color="proj.daysLeftColor"
    />
  </div>
</template>

<script setup lang="ts">
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import UserProfileProject from '@/components/user-profile/UserProfileProject.vue';
import { GlobalColors } from '@/model/Colors';
import { getRandomId } from '@/model/tools/RandomTools';
import type { Projects } from '@/model/user-profile/Projects';

const projects: Projects[] = [
  {
    id: getRandomId(),
    avatar: 'social.png',
    title: 'Social Banners',
    client: 'Christian Jimenez',
    totalBudgetGot: '$24.8k',
    totalBudgetNeed: '$18.2k',
    startDate: '14/2/21',
    deadline: '28/2/22',
    desc: 'We are Consulting, Software Development and Web Development Services.',
    allHours: '380/244',
    daysLeft: 28,
    daysLeftColor: GlobalColors.SUCCESS,
    taskComplete: 328,
    taskNeed: 344,
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/1.png',
        alt: '1',
        tooltip: 'Vinnie Mostowy',
      },
      {
        id: getRandomId(),
        src: 'avatars/7.png',
        alt: '1',
        tooltip: 'Allen Rieske',
      },
      {
        id: getRandomId(),
        src: 'avatars/3.png',
        alt: '1',
        tooltip: 'Julee Rossignol',
      },
    ],
    membersCount: '280',
    comments: 15,
  }, {
    id: getRandomId(),
    avatar: 'react.png',
    title: 'Admin Template',
    client: 'Jeffrey Phillips',
    totalBudgetGot: '$2.4k',
    totalBudgetNeed: '$1.8k',
    startDate: '18/8/21',
    deadline: '21/6/22',
    desc: 'Time is our most valuable asset, that\'s why we want to help you save it by creating…',
    allHours: '98/135',
    daysLeft: 15,
    daysLeftColor: GlobalColors.WARNING,
    taskComplete: 38,
    taskNeed: 90,
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/4.png',
        alt: '1',
        tooltip: 'Kaith D`souza',
      },
      {
        id: getRandomId(),
        src: 'avatars/2.png',
        alt: '1',
        tooltip: 'Jhon Doe',
      },
      {
        id: getRandomId(),
        src: 'avatars/8.png',
        alt: '1',
        tooltip: 'Alan Walker',
      },
    ],
    membersCount: '1.1k',
    comments: 236,
  }, {
    id: getRandomId(),
    avatar: 'vue.png',
    title: 'App Design',
    client: 'Ricky McDonald',
    totalBudgetGot: '$980',
    totalBudgetNeed: '$420',
    startDate: '24/7/21',
    deadline: '8/10/21',
    desc: 'App design combines the user interface (UI) and user experience (UX).',
    allHours: '880/421',
    daysLeft: 45,
    daysLeftColor: GlobalColors.ERROR,
    taskComplete: 95,
    taskNeed: 140,
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/6.png',
        alt: '1',
        tooltip: 'Jimmy Ressula',
      },
      {
        id: getRandomId(),
        src: 'avatars/5.png',
        alt: '1',
        tooltip: 'Krisi Lawker',
      },
      {
        id: getRandomId(),
        src: 'avatars/1.png',
        alt: '1',
        tooltip: 'Danny Paul',
      },
    ],
    membersCount: '458',
    comments: 98,
  }, {
    id: getRandomId(),
    avatar: 'html.png',
    title: 'Create Website',
    client: 'Hulda Wright',
    totalBudgetGot: '$8.5k',
    totalBudgetNeed: '$2.43k',
    startDate: '10/2/19',
    deadline: '12/9/22',
    desc: 'Your domain name should reflect your products or services so that your...',
    allHours: '1.2k/820',
    daysLeft: 126,
    daysLeftColor: GlobalColors.WARNING,
    taskComplete: 302,
    taskNeed: 420,
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/7.png',
        alt: '1',
        tooltip: 'Rishi Swaat',
      },
      {
        id: getRandomId(),
        src: 'avatars/3.png',
        alt: '1',
        tooltip: 'Andrew Tye',
      },
      {
        id: getRandomId(),
        src: 'avatars/4.png',
        alt: '1',
        tooltip: 'Rossie Kim',
      },
    ],
    membersCount: '137',
    comments: 120,
  }, {
    id: getRandomId(),
    avatar: 'figma.png',
    title: 'Figma Dashboard',
    client: 'Jerry Greene',
    totalBudgetGot: '$52.7k',
    totalBudgetNeed: '$28.4k',
    startDate: '12/12/20',
    deadline: '25/12/21',
    desc: 'Use this template to organize your design project. Some of the key features are…',
    allHours: '142/420',
    daysLeft: 5,
    daysLeftColor: GlobalColors.ERROR,
    taskComplete: 100,
    taskNeed: 285,
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/2.png',
        alt: '1',
        tooltip: 'Kim Merchent',
      },
      {
        id: getRandomId(),
        src: 'avatars/8.png',
        alt: '1',
        tooltip: 'Sam D`souza',
      },
      {
        id: getRandomId(),
        src: 'avatars/6.png',
        alt: '1',
        tooltip: 'Nurvi Karlos',
      },
    ],
    membersCount: '82',
    comments: 20,
  }, {
    id: getRandomId(),
    avatar: 'xd.png',
    title: 'Logo Design',
    client: 'Olive Strickland',
    totalBudgetGot: '$1.3k',
    totalBudgetNeed: '$655',
    startDate: '17/8/21',
    deadline: '02/11/21',
    desc: 'Premium logo designs created by top logo designers. Create the branding of business.',
    allHours: '580/445',
    daysLeft: 4,
    daysLeftColor: GlobalColors.SUCCESS,
    taskComplete: 290,
    taskNeed: 290,
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/5.png',
        alt: '1',
        tooltip: 'Kim Karlos',
      },
      {
        id: getRandomId(),
        src: 'avatars/1.png',
        alt: '1',
        tooltip: 'Katy Turner',
      },
      {
        id: getRandomId(),
        src: 'avatars/7.png',
        alt: '1',
        tooltip: 'Peter Adward',
      },
    ],
    membersCount: '16',
    comments: 16,
  },
];
</script>

<style module lang="scss">
.projects {
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
