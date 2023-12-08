<template>
  <div :class="$style.flex">
    <VOffset
      :mt="20"
      :class="$style.about"
    >
      <VOffset :mb="20">
        <UserProfileAbout />
      </VOffset>

      <VOffset>
        <UserProfileOverview />
      </VOffset>
    </VOffset>

    <VOffset
      :ml="20"
      :mt="20"
      :class="$style.cards"
    >
      <VOffset :mb="20">
        <UserProfileTimeline />
      </VOffset>

      <VOffset :mb="20">
        <div :class="$style.flex">
          <VOffset :class="$style.connections">
            <UserProfileConnections />
          </VOffset>

          <VOffset
            :ml="20"
            :mt="20"
            :class="$style.teams"
          >
            <UserProfileTeams />
          </VOffset>
        </div>
      </VOffset>

      <VOffset>
        <UserProfileProjectsTable />
      </VOffset>
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import VOffset from '@/components/basic/VOffset.vue';
import UserProfileProjectsTable from '@/components/user-profile/profile/units/UserProfileProjectsTable.vue';
import UserProfileAbout from '@/components/user-profile/profile/UserProfileAbout.vue';
import UserProfileConnections from '@/components/user-profile/profile/UserProfileConnections.vue';
import UserProfileOverview from '@/components/user-profile/profile/UserProfileOverview.vue';
import UserProfileTeams from '@/components/user-profile/profile/UserProfileTeams.vue';
import UserProfileTimeline from '@/components/user-profile/profile/UserProfileTimeline.vue';
</script>

<style module lang="scss">
$offsetCard: 20px;

.flex {
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
}

.about {
  width: calc(35% - $offsetCard / 2);

  @media screen and (max-width: 1180px) {
    width: 100%;
  }
}

.cards {
  width: calc(65% - $offsetCard / 2);

  @media screen and (max-width: 1180px) {
    width: 100%;
    margin-left: 0;
  }
}

.connections,
.teams {
    width: calc(50% - $offsetCard / 2);

  @media screen and (max-width: 715px) {
    width: 100%;
    margin-left: 0;
  }
}
</style>
