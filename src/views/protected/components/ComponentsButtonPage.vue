<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Button sizes"
      desc="Button sizes provided from the «ButtonSize» model."
    >
      <VButton
        v-for="size in Object.values(ButtonSize)"
        :key="size"
        :size="size"
      >
        {{ size }}
      </VButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Button block"
      desc="A button that takes up 100% of the width of the parent block."
    >
      <VButton max-width>
        Block
      </VButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Button colors"
      desc="Button colors provided from «GlobalColors» model."
    >
      <VButton
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
        :size="ButtonSize.SMALL"
      >
        {{ color }}
      </VButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Button variants"
      desc="Button variants provided from «ButtonVariant» model."
    >
      <VButton
        v-for="variant in Object.values(ButtonVariant)"
        :key="variant"
        :variant="variant"
      >
        {{ variant }}
      </VButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Buttons with icon and label"
      desc="Use iconPrepend | iconAppend to add an icon."
    >
      <VButton>
        <template #iconAppend>
          <SendIcon />
        </template>
        Send
      </VButton>

      <VButton
        disabled
        :color="GlobalColors.DEFAULT"
      >
        disabled

        <template #iconPrepend>
          <RemoveIcon />
        </template>
      </VButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Button loading"
      desc="Use «loading» prop for circular animation."
    >
      <VButton
        v-for="variant in Object.values(ButtonVariant)"
        :key="variant"
        loading
        :variant="variant"
      >
        {{ variant }}
      </VButton>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import RemoveIcon from '@public/assets/icons/button/remove.svg';
import SendIcon from '@public/assets/icons/button/send.svg';

import VButton from '@/components/basic/VButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { ButtonSize, ButtonVariant } from '@/model/components/basic/VButton';
</script>
