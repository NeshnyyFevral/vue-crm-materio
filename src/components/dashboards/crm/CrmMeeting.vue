<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Refresh" />
      <VMenuItem name="Share" />
      <VMenuItem name="Reschedule" />
    </template>

    <VOffset :mb="10">
      <VTitle variant="heading6">
        Meeting Schedule
      </VTitle>
    </VOffset>

    <VOffset
      v-for="meeting in meetingData"
      :key="meeting.id"
      :mb="27"
    >
      <UserMeeting
        :color="meeting.color"
        :title="meeting.title"
        :subject="meeting.subject"
        :time="meeting.time"
      >
        <VAvatar>
          <img
            :src="getImageUrl(`../../../assets/images/CRM/meetings/${meeting.avatar}`)"
            :alt="`avatar-${meeting.avatar}`"
          >
        </VAvatar>
      </UserMeeting>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import UserMeeting from '@/components/dashboards/UserMeeting.vue';
import { GlobalColors } from '@/model/Colors';
import { getRandomId } from '@/model/tools/RandomTools';
import { getImageUrl } from '@/model/tools/UrlTools';

interface Meetings {
  id: string;
  subject: string;
  title: string;
  color: GlobalColors;
  time: string;
  avatar: string;
}

const meetingData: Meetings[] = [
  {
    id: getRandomId(),
    title: 'Call with Woods',
    subject: 'Business',
    color: GlobalColors.PRIMARY,
    time: '21 Jul | 08:20-10:30',
    avatar: '1.png',
  }, {
    id: getRandomId(),
    title: 'Call with hilda',
    subject: 'Meditation',
    color: GlobalColors.SUCCESS,
    time: '24 Jul | 11:30-12:00',
    avatar: '2.png',
  }, {
    id: getRandomId(),
    title: 'Conference call',
    subject: 'Dinner',
    color: GlobalColors.ERROR,
    time: '28 Jul | 05:00-6:45',
    avatar: '3.png',
  }, {
    id: getRandomId(),
    title: 'Meeting with Mark',
    subject: 'Meetup',
    color: GlobalColors.DEFAULT,
    time: '03 Aug | 07:00-8:30',
    avatar: '4.png',
  }, {
    id: getRandomId(),
    title: 'Meeting in Oakland',
    subject: 'Business',
    color: GlobalColors.PRIMARY,
    time: '14 Aug | 04:15-05:30',
    avatar: '5.png',
  }, {
    id: getRandomId(),
    title: 'Meeting with Carl',
    subject: 'Party',
    color: GlobalColors.WARNING,
    time: '05 Oct | 10:00-12:45',
    avatar: '6.png',
  },
];
</script>

<style module lang="scss">
// f
</style>
