<template>
  <div :class="$style.root">
    <VOffset :class="$style.image">
      <img
        src="../../assets/images/CRM/workstation.png"
        alt="workstation"
      >
    </VOffset>
    <VCard disabled-top-br>
      <VOffset :mb="20">
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="10">
            <CalendarItem
              date="24"
              month="January"
            />
          </VOffset>

          <VOffset>
            <VOffset :mb="5">
              <VText
                variant="body2"
                font-weight="600"
              >
                Developer Meetup
              </VText>
            </VOffset>

            <VOffset>
              <VText
                variant="caption"
                :color="GlobalColorMap['400'].default"
              >
                The WordPress open source, free software project is the community behind the…
              </VText>
            </VOffset>
          </VOffset>
        </VFlex>
      </VOffset>

      <VSplitter />

      <VOffset
        :mt="20"
        :mb="20"
      >
        <VFlex
          :align="FlexAlign.CENTER"
          :justify-content="FlexJustify.SPACE_BETWEEN"
        >
          <VOffset
            v-for="status in plainsStatuses"
            :key="status.id"
          >
            <IconStatus
              :title="status.title"
              :icon="status.icon"
              :active="status.active"
            />
          </VOffset>
        </VFlex>
      </VOffset>

      <VSplitter />

      <VOffset :mt="20">
        <VOffset
          v-for="desc in descriptions"
          :key="desc.id"
          :mt="10"
        >
          <VFlex :align="FlexAlign.CENTER">
            <VOffset :mr="10">
              <component :is="desc.icon" />
            </VOffset>

            <VOffset>
              <VOffset>
                <VText variant="body1">
                  {{ desc.primary }}
                </VText>
              </VOffset>
              <VOffset>
                <VText
                  variant="caption"
                  :color="GlobalColorMap['400'].default"
                >
                  {{ desc.secondary }}
                </VText>
              </VOffset>
            </VOffset>
          </VFlex>
        </VOffset>
      </VOffset>
    </VCard>
  </div>
</template>

<script setup lang="ts">
import ClockIcon from '@/assets/icons/CRM/clock.svg';
import PeopleIcon from '@/assets/icons/CRM/people.svg';
import PlaceIcon from '@/assets/icons/CRM/place.svg';
import StarIcon from '@/assets/icons/CRM/star.svg';
import SuccessIcon from '@/assets/icons/CRM/success.svg';
import MoreIcon from '@/assets/icons/more.svg';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import CalendarItem from '@/components/CalendarItem.vue';
import IconStatus from '@/components/IconStatus.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getRandomString } from '@/model/tools/RandomTools';

interface Statuses {
  id: string;
  icon: any;
  title: string;
  active: boolean;
}

interface Descriptions {
  id: string;
  icon: any;
  primary: string;
  secondary: string;
}

const plainsStatuses: Statuses[] = [
  {
    id: getRandomString(),
    icon: StarIcon,
    title: 'Interested',
    active: false,
  }, {
    id: getRandomString(),
    icon: SuccessIcon,
    title: 'Joined',
    active: false,
  }, {
    id: getRandomString(),
    icon: PeopleIcon,
    title: 'Invited',
    active: true,
  }, {
    id: getRandomString(),
    icon: MoreIcon,
    title: 'More',
    active: false,
  },
];

const descriptions: Descriptions[] = [
  {
    id: getRandomString(),
    icon: ClockIcon,
    primary: 'Tuesday, 24 january, 10:20 - 12:30',
    secondary: 'After 1 Week',
  }, {
    id: getRandomString(),
    icon: PlaceIcon,
    primary: 'The Rochard NYC',
    secondary: '1305 Lexington Ave, New York',
  },
];
</script>

<style module lang="scss">
.root {}

.image {
  width: 100%;
  height: auto;

  img {
    display: block;
    width: 100%;
    max-height: 180px;
  }
}
</style>
