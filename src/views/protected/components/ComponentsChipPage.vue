<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Chip sizes"
      desc="Chip sizes provided from the «ChipSize» model."
    >
      <VChip
        v-for="size in Object.values(ChipSize)"
        :key="size"
        :size="size"
      >
        {{ size }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip variants"
      desc="Chip variants provided from the «ChipVariant» model."
    >
      <VChip
        v-for="variant in Object.values(ChipVariant)"
        :key="variant"
        :variant="variant"
      >
        {{ variant }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip colors"
      desc="Chip colors provided from the «GlobalColors» model."
    >
      <VChip
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
      >
        {{ color }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip clickable"
      desc="Сhips that show something that can be clicked on."
    >
      <VChip
        v-for="variant in Object.values(ChipVariant)"
        :key="variant"
        :variant="variant"
        clickable
      >
        {{ variant }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip with icon and label"
      desc="Use iconPrepend | iconAppend to add an icon."
    >
      <VChip>
        <template #iconPrepend>
          <RemoveIcon />
        </template>

        prepend
      </VChip>

      <VChip>
        <template #iconAppend>
          <RemoveIcon />
        </template>

        append
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip rectangle"
      desc="Use a prop rectangle to remove the rounded corners."
    >
      <VChip
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
        rectangle
      >
        {{ color }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip rectangle"
      desc="Use a prop rectangle to remove the rounded corners."
    >
      <VChip
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
      >
        {{ color }}
      </VChip>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import RemoveIcon from '@public/assets/icons/remove.svg';

import VChip from '@/components/basic/VChip.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
</script>
