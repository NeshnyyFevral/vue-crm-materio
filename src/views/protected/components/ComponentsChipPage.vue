<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Chip sizes"
      desc="Chip sizes provided from the «ChipSize» model."
    >
      <VChip
        v-for="size in Object.keys(ChipSize)"
        :key="size"
        :size="ChipSize[size]"
      >
        {{ ChipSize[size] }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip variants"
      desc="Chip variants provided from the «ChipVariant» model."
    >
      <VChip
        v-for="variant in Object.keys(ChipVariant)"
        :key="variant"
        :variant="ChipVariant[variant]"
      >
        {{ ChipVariant[variant] }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip colors"
      desc="Chip colors provided from the «GlobalColors» model."
    >
      <VChip
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :color="GlobalColors[color]"
      >
        {{ GlobalColors[color] }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip clickable"
      desc="Сhips that show something that can be clicked on."
    >
      <VChip
        v-for="variant in Object.keys(ChipVariant)"
        :key="variant"
        :variant="ChipVariant[variant]"
        clickable
      >
        {{ ChipVariant[variant] }}
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
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :color="GlobalColors[color]"
        rectangle
      >
        {{ GlobalColors[color] }}
      </VChip>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Chip rectangle"
      desc="Use a prop rectangle to remove the rounded corners."
    >
      <VChip
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :color="GlobalColors[color]"
      >
        {{ GlobalColors[color] }}
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
