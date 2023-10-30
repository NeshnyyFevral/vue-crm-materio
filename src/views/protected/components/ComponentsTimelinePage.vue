<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard title="Basic timeline">
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
              src="../../../assets/images/CRM/pdf.png"
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
          :color="GlobalColors.SUCCESS"
          title="Design Review"
          date="September, 30"
        >
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti doloremque dolores eveniet,
            explicabo iusto maiores nam, obcaecati odit repellat soluta sunt tenetur velit. Consectetur ea expedita
            facere molestiae qui.
          </VText>
        </VTimelineItem>
      </VTimeline>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VText from '@/components/basic/VText.vue';
import VTimeline from '@/components/basic/VTimeline.vue';
import VTimelineItem from '@/components/basic/VTimelineItem.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { FlexAlign } from '@/model/components/basic/VFlex';
</script>

<style module lang="scss">
.pdf {
  width: 20px;
  height: 20px;
}
</style>
