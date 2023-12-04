<template>
  <VOffset>
    <VOffset :mb="10">
      <VTitle variant="heading5">
        Teams
      </VTitle>
    </VOffset>

    <div :class="$style.teams">
      <UserProfileTeam
        v-for="team in teamsData"
        :key="team.id"
        :chips="team.chips"
        :avatar="team.avatar"
        :title="team.title"
        :avatar-group="team.avatarGroup"
        :desc="team.desc"
      />
    </div>
  </VOffset>
</template>

<script setup lang="ts">
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import UserProfileTeam from '@/components/user-profile/UserProfileTeam.vue';
import { GlobalColors } from '@/model/Colors';
import type { AvatarGroup } from '@/model/components/basic/VAvatar';
import { getRandomId } from '@/model/tools/RandomTools';
import type { Teams } from '@/model/user-profile/Teams';

const generatePlugTeams = (count: number) => {
  const group: AvatarGroup[] = [];
  for (let i = 0; i < count; i += 1) { group.push({ id: getRandomId(), src: '', alt: '' }); }
  return group;
};

const teamsData: Teams[] = [
  {
    id: getRandomId(),
    avatar: 'react.png',
    title: 'React Developers',
    desc: 'We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.',
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
        tooltip: 'George Burrill',
      },
      {
        id: getRandomId(),
        src: 'avatars/4.png',
        alt: '1',
        tooltip: 'Julee Rossignol',
      },
      ...generatePlugTeams(22),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.PRIMARY, title: 'React' },
      { id: getRandomId(), color: GlobalColors.INFO, title: 'MUI' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'vue.png',
    title: 'Vue.js Dev Team',
    desc: 'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/2.png',
        alt: '1',
        tooltip: 'Kaith D`souza',
      },
      {
        id: getRandomId(),
        src: 'avatars/8.png',
        alt: '1',
        tooltip: 'John Doe',
      },
      {
        id: getRandomId(),
        src: 'avatars/6.png',
        alt: '1',
        tooltip: 'Alan Walker',
      },
      {
        id: getRandomId(),
        src: 'avatars/5.png',
        alt: '1',
        tooltip: 'Calvin Middleton',
      },
      ...generatePlugTeams(17),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.SUCCESS, title: 'Vuejs' },
      { id: getRandomId(), color: GlobalColors.ERROR, title: 'Developer' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'xd.png',
    title: 'Creative Designers',
    desc: 'A design or product team is more than just the people on it. A team includes the people, the roles they play.',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/1.png',
        alt: '1',
        tooltip: 'Jimmy Ressula',
      },
      {
        id: getRandomId(),
        src: 'avatars/7.png',
        alt: '1',
        tooltip: 'Kristi Lawker',
      },
      {
        id: getRandomId(),
        src: 'avatars/3.png',
        alt: '1',
        tooltip: 'Danny Paul',
      },
      {
        id: getRandomId(),
        src: 'avatars/4.png',
        alt: '1',
        tooltip: 'Alicia Littleton',
      },
      ...generatePlugTeams(55),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.WARNING, title: 'Sketch' },
      { id: getRandomId(), color: GlobalColors.ERROR, title: 'XD' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'support.png',
    title: 'Support Team',
    desc: 'Support your team. Your customer support team is fielding the good, the bad, and the ugly day in and day out.',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/2.png',
        alt: '1',
        tooltip: 'Andrew Tye',
      },
      {
        id: getRandomId(),
        src: 'avatars/8.png',
        alt: '1',
        tooltip: 'Rishi Swaat',
      },
      {
        id: getRandomId(),
        src: 'avatars/6.png',
        alt: '1',
        tooltip: 'Rossie Kim',
      },
      {
        id: getRandomId(),
        src: 'avatars/5.png',
        alt: '1',
        tooltip: 'Mary Hunter',
      },
      ...generatePlugTeams(35),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.INFO, title: 'Zendesk' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'social.png',
    title: 'Digital Marketing',
    desc: 'Digital marketing refers to advertising delivered through digital channels such as search engines, websites…',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/1.png',
        alt: '1',
        tooltip: 'Kim Merchent',
      },
      {
        id: getRandomId(),
        src: 'avatars/7.png',
        alt: '1',
        tooltip: 'Sam D`souza',
      },
      {
        id: getRandomId(),
        src: 'avatars/3.png',
        alt: '1',
        tooltip: 'Nurvi Karlos',
      },
      {
        id: getRandomId(),
        src: 'avatars/4.png',
        alt: '1',
        tooltip: 'Margorie Whitmire',
      },
      ...generatePlugTeams(19),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.PRIMARY, title: 'Twitter' },
      { id: getRandomId(), color: GlobalColors.SUCCESS, title: 'Email' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'event.png',
    title: 'Event',
    desc: 'Event is defined as a particular contest which is part of a program of contests. An example of an event is the long…',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/2.png',
        alt: '1',
        tooltip: 'Vinnie Mostowy',
      },
      {
        id: getRandomId(),
        src: 'avatars/8.png',
        alt: '1',
        tooltip: 'Allen Rieske',
      },
      {
        id: getRandomId(),
        src: 'avatars/6.png',
        alt: '1',
        tooltip: 'Julee Rossignol',
      },
      {
        id: getRandomId(),
        src: 'avatars/5.png',
        alt: '1',
        tooltip: 'Daniel Long',
      },
      ...generatePlugTeams(55),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.PRIMARY, title: 'Twitter' },
      { id: getRandomId(), color: GlobalColors.SUCCESS, title: 'Email' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'figma.png',
    title: 'Figma Resources',
    desc: 'Explore, install, use, and remix thousands of plugins and files published to the Figma Community by designers and developers.',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/1.png',
        alt: '1',
        tooltip: 'Andrew Mostowy',
      },
      {
        id: getRandomId(),
        src: 'avatars/7.png',
        alt: '1',
        tooltip: 'Micky Ressula',
      },
      {
        id: getRandomId(),
        src: 'avatars/3.png',
        alt: '1',
        tooltip: 'Michel Pal',
      },
      {
        id: getRandomId(),
        src: 'avatars/4.png',
        alt: '1',
        tooltip: 'Herman Lockard',
      },
      ...generatePlugTeams(45),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.SUCCESS, title: 'UI/UX' },
      { id: getRandomId(), color: GlobalColors.DEFAULT, title: 'Figma' },
    ],
  }, {
    id: getRandomId(),
    avatar: 'html.png',
    title: 'Only Beginners',
    desc: 'Learn the basics of how websites work, front-end vs back-end, and using a code editor. Learn basic HTML, CSS, and…',
    avatarGroup: [
      {
        id: getRandomId(),
        src: 'avatars/2.png',
        alt: '1',
        tooltip: 'Kim Karlos',
      },
      {
        id: getRandomId(),
        src: 'avatars/8.png',
        alt: '1',
        tooltip: 'Katy Turner',
      },
      {
        id: getRandomId(),
        src: 'avatars/6.png',
        alt: '1',
        tooltip: 'Peter Adward',
      },
      {
        id: getRandomId(),
        src: 'avatars/5.png',
        alt: '1',
        tooltip: 'Leona Miller',
      },
      ...generatePlugTeams(50),
    ],
    chips: [
      { id: getRandomId(), color: GlobalColors.INFO, title: 'CSS' },
      { id: getRandomId(), color: GlobalColors.WARNING, title: 'HTML' },
    ],
  },
];
</script>

<style module lang="scss">
.teams {
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
