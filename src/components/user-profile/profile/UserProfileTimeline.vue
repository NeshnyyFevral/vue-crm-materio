<template>
  <VCard>
    <VOffset :mb="30">
      <VFlex :align="FlexAlign.CENTER">
        <VOffset :mr="5">
          <TimelineIcon />
        </VOffset>
        <VTitle variant="heading6">
          Activity Timeline
        </VTitle>
      </VFlex>
    </VOffset>

    <VOffset :mb="30">
      <VTimeline>
        <VTimelineItem
          :color="GlobalColors.ERROR"
          title="Get on the flight"
          date="Wednesday"
        >
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            Invoices have been paid to the company.
          </VText>

          <VFlex :align="FlexAlign.CENTER">
            <img
              :src="getPathImg('images/crm/pdf.png')"
              alt="pdf-file"
              :class="$style.pdf"
            >

            <VOffset :ml="5">
              <VText
                variant="caption"
                font-weight="600"
                :color="GlobalColorMap['400'].default"
              >
                bookingCard.pdf
              </VText>
            </VOffset>
          </VFlex>
        </VTimelineItem>

        <VTimelineItem
          title="Create a new project for client 😎"
          date="April, 18"
        >
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            Invoices have been paid to the company.
          </VText>

          <VFlex :align="FlexAlign.CENTER">
            <VAvatar :size="AvatarSize.SMALL">
              <img
                :src="getPathImg('avatars/1.png')"
                alt="avatar"
              >
            </VAvatar>
            <VOffset :ml="5">
              <VText
                variant="body2"
                font-weight="600"
              >
                John Doe (Client)
              </VText>
            </VOffset>
          </VFlex>
        </VTimelineItem>

        <VTimelineItem
          :color="GlobalColors.INFO"
          title="Order #37745 from September"
          date="January, 10"
        >
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            Invoices have been paid to the company.
          </VText>
        </VTimelineItem>

        <VTimelineItem
          :color="GlobalColors.WARNING"
          title="Public Meeting"
          date="September, 30"
        />
      </VTimeline>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import TimelineIcon from '@public/assets/icons/timeline.svg';

import VAvatar from '@/components/basic/VAvatar.vue';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTimeline from '@/components/basic/VTimeline.vue';
import VTimelineItem from '@/components/basic/VTimelineItem.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AvatarSize } from '@/model/components/basic/VAvatar';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { getPathImg } from '@/model/tools/PathTools';
</script>

<style module lang="scss">
.pdf {
  width: 20px;
  height: 20px;
}
</style>
