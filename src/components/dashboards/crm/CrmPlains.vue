<template>
  <VOffset>
    <VOffset :class="$style.image">
      <img
        src="../../../assets/images/crm/workstation.png"
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
          :direction-change-trigger="breakpoint"
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
  </VOffset>
</template>

<script setup lang="ts">
import ClockIcon from '@/assets/icons/dashboards/crm/clock.svg';
import PlaceIcon from '@/assets/icons/dashboards/crm/place.svg';
import StarIcon from '@/assets/icons/dashboards/crm/star.svg';
import SuccessIcon from '@/assets/icons/dashboards/crm/success.svg';
import PeopleIcon from '@/assets/icons/dashboards/people.svg';
import MoreIcon from '@/assets/icons/more.svg';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import CalendarItem from '@/components/dashboards/crm/units/CalendarItem.vue';
import IconStatus from '@/components/dashboards/crm/units/IconStatus.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getRandomId } from '@/model/tools/RandomTools';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

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

const breakpoint = 370;

const plainsStatuses: Statuses[] = [
  {
    id: getRandomId(),
    icon: StarIcon,
    title: 'Interested',
    active: false,
  }, {
    id: getRandomId(),
    icon: SuccessIcon,
    title: 'Joined',
    active: false,
  }, {
    id: getRandomId(),
    icon: PeopleIcon,
    title: 'Invited',
    active: true,
  }, {
    id: getRandomId(),
    icon: MoreIcon,
    title: 'More',
    active: false,
  },
];

const descriptions: Descriptions[] = [
  {
    id: getRandomId(),
    icon: ClockIcon,
    primary: 'Tuesday, 24 january, 10:20 - 12:30',
    secondary: 'After 1 Week',
  }, {
    id: getRandomId(),
    icon: PlaceIcon,
    primary: 'The Rochard NYC',
    secondary: '1305 Lexington Ave, New York',
  },
];
</script>

<style module lang="scss">
.image {
  width: 100%;
  height: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    max-height: 180px;
  }
}
</style>
