<template>
  <VCard overflow-x>
    <UserProfileList :data="userData" />
  </VCard>
</template>

<script setup lang="ts">
import CommentIcon from '@public/assets/icons/comments.svg';
import FlagIcon from '@public/assets/icons/flag.svg';
import LanguageIcon from '@public/assets/icons/language.svg';
import MessageIcon from '@public/assets/icons/message.svg';
import PeopleIcon from '@public/assets/icons/people.svg';
import StarIcon from '@public/assets/icons/star.svg';
import SuccessIcon from '@public/assets/icons/success.svg';
import TelephoneIcon from '@public/assets/icons/telephone.svg';

import VCard from '@/components/basic/VCard.vue';
import UserProfileList from '@/components/user-profile/profile/units/UserProfileList.vue';
import { getRandomId } from '@/model/tools/RandomTools';
import type { UserData } from '@/model/user-profile/Profile';

const userData: UserData[] = [
  {
    id: getRandomId(),
    title: 'ABOUT',
    fields: [
      {
        id: getRandomId(),
        icon: PeopleIcon,
        name: 'Full Name',
        value: 'John Doe',
      }, {
        id: getRandomId(),
        icon: SuccessIcon,
        name: 'Status',
        value: 'Active',
      }, {
        id: getRandomId(),
        icon: StarIcon,
        name: 'Role',
        value: 'Developer',
      }, {
        id: getRandomId(),
        icon: FlagIcon,
        name: 'Country',
        value: 'USA',
      }, {
        id: getRandomId(),
        icon: LanguageIcon,
        name: 'Language',
        value: 'English',
      },
    ],
  }, {
    id: getRandomId(),
    title: 'CONTACTS',
    fields: [
      {
        id: getRandomId(),
        icon: TelephoneIcon,
        name: 'Contact',
        value: '(123) 456-7890',
      }, {
        id: getRandomId(),
        icon: CommentIcon,
        name: 'Skype',
        value: 'John.doe',
      }, {
        id: getRandomId(),
        icon: MessageIcon,
        name: 'E-mail',
        value: 'John.doe@example.com',
      },
    ],
  }, {
    id: getRandomId(),
    title: 'TEAMS',
    fields: [
      {
        id: getRandomId(),
        icon: null,
        name: 'Backend Developer',
        value: '(126 Members)',
      }, {
        id: getRandomId(),
        icon: null,
        name: 'React Developer',
        value: '(98 Members)',
      },
    ],
  },
];
</script>
