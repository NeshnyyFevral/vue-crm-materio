<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Share connections" />
      <VMenuItem name="Suggest edits" />
      <VSplitter />
      <VMenuItem name="Report bug" />
    </template>

    <VOffset :mb="10">
      <VTitle variant="heading6">
        Connections
      </VTitle>
    </VOffset>

    <VOffset :mb="20">
      <UserProfileConnectionCompact
        v-for="connection in userProfileConnectionsCompactData"
        :key="connection.id"
        :connected="connection.connected"
        :name="connection.name"
        :avatar="connection.avatar"
        :connections-count="connection.connectionsCount"
      />
    </VOffset>

    <VOffset>
      <VFlex :justify-content="FlexJustify.CENTER">
        <VButton :variant="ButtonVariant.TEXT">
          View all connections
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
import UserProfileConnectionCompact from '@/components/user-profile/profile/units/UserProfileConnectionCompact.vue';
import { ButtonVariant } from '@/model/components/basic/VButton';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { getRandomId } from '@/model/tools/RandomTools';
import type { ConnectionsCompact } from '@/model/user-profile/Connections';

const userProfileConnectionsCompactData: ConnectionsCompact[] = [
  {
    id: getRandomId(),
    avatar: 'avatars/7.png',
    name: 'Cecilia Payne',
    connectionsCount: '45',
    connected: false,
  }, {
    id: getRandomId(),
    avatar: 'avatars/3.png',
    name: 'Curtis Fletcher',
    connectionsCount: '1.32k',
    connected: true,
  }, {
    id: getRandomId(),
    avatar: 'avatars/4.png',
    name: 'Alice Stone',
    connectionsCount: '125',
    connected: true,
  }, {
    id: getRandomId(),
    avatar: 'avatars/2.png',
    name: 'Darrell Barnes',
    connectionsCount: '456',
    connected: false,
  }, {
    id: getRandomId(),
    avatar: 'avatars/5.png',
    name: 'Eugenia Moore',
    connectionsCount: '1.2k',
    connected: false,
  },
];
</script>
