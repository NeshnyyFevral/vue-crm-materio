<template>
  <VCard>
    <VOffset>
      <VTitle variant="heading6">
        Activity Timeline
      </VTitle>
    </VOffset>

    <VTimeline>
      <VTimelineItem
        :color="GlobalColors.ERROR"
        title="Get on the flight"
        date="Wednesday"
      >
        <VText
          variant="body2"
          :color="GlobalColorMap['500'].default"
        >
          Invoices have been paid to the company.
        </VText>

        <VFlex :align="FlexAlign.CENTER">
          <img
            src="../../assets/images/CRM/pdf.png"
            alt="pdf-file"
            :class="$style.pdf"
          >

          <VOffset :ml="5">
            <VText
              variant="caption"
              font-weight="600"
              :color="GlobalColorMap['500'].default"
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
          :color="GlobalColorMap['500'].default"
        >
          Invoices have been paid to the company.
        </VText>

        <VFlex :align="FlexAlign.CENTER">
          <VAvatar :size="AvatarSize.SMALL">
            <img
              src="../../assets/avatars/1.png"
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
          :color="GlobalColorMap['500'].default"
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
  </VCard>
</template>

<script setup lang="ts">
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
</script>

<style module lang="scss">
.pdf {
  width: 20px;
  height: 20px;
}
</style>
