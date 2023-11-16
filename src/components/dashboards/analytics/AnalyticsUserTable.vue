<template>
  <VCard>
    <UserTable :data="users" />
  </VCard>
</template>

<script setup lang="ts">
import MaintainerIcon from '@public/assets/icons/dashboards/analytics/maintainer.svg';
import PencilIcon from '@public/assets/icons/dashboards/pencil.svg';
import PeopleIcon from '@public/assets/icons/dashboards/people.svg';
import SettingsIcon from '@public/assets/icons/dashboards/settings.svg';

import VCard from '@/components/basic/VCard.vue';
import UserTable from '@/components/dashboards/analytics/units/UserTable.vue';
import { GlobalColors } from '@/model/Colors';
import type { Users } from '@/model/dashboards/Users';

const users: Users[] = [{
  avatar: '1.png',
  name: 'Joseph Wheeler',
  tag: '@gslixby0',
  email: 'nuroani@icpair.com',
  role: 'Maintainer',
  roleColor: GlobalColors.PRIMARY,
  roleIcon: MaintainerIcon,
  status: 'Inactive',
  statusColor: GlobalColors.DEFAULT,
}, {
  avatar: '7.png',
  name: 'May Lloyd',
  tag: '@hredmore1',
  email: 'jeju@ma.co.uk',
  role: 'Subscriber',
  roleColor: GlobalColors.WARNING,
  roleIcon: PeopleIcon,
  status: 'Active',
  statusColor: GlobalColors.SUCCESS,
}, {
  avatar: null,
  name: 'William Mckinney',
  tag: '@msicely2',
  email: 'cidagehe@nonalbo.com',
  role: 'Subscriber',
  roleColor: GlobalColors.WARNING,
  roleIcon: PeopleIcon,
  status: 'Pending',
  statusColor: GlobalColors.WARNING,
}, {
  avatar: '2.png',
  name: 'Warren Clarke',
  tag: '@mhurran4',
  email: 'hirasles@zozzetkuv.edu',
  role: 'Editor',
  roleColor: GlobalColors.INFO,
  roleIcon: PencilIcon,
  status: 'Active',
  statusColor: GlobalColors.SUCCESS,
}, {
  avatar: null,
  name: 'Isabel Briggs',
  tag: '@crisby3',
  email: 'temiwiho@ohacma.gov',
  role: 'Maintainer',
  roleColor: GlobalColors.PRIMARY,
  roleIcon: MaintainerIcon,
  status: 'Inactive',
  statusColor: GlobalColors.DEFAULT,
}, {
  avatar: '4.png',
  name: 'Adeline Bennett',
  tag: '@shalstead5',
  email: 'boz@peh.co.uk',
  role: 'Author',
  roleColor: GlobalColors.SUCCESS,
  roleIcon: SettingsIcon,
  status: 'Pending',
  statusColor: GlobalColors.WARNING,
}, {
  avatar: '5.png',
  name: 'Lora Simpson',
  tag: '@bkildayr',
  email: 'dude@oco.nl',
  role: 'Editor',
  roleColor: GlobalColors.INFO,
  roleIcon: PencilIcon,
  status: 'Active',
  statusColor: GlobalColors.SUCCESS,
},
];
</script>
