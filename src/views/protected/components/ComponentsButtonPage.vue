<template>
  <div :class="$style.root">
    <VPreviewComponentCard
      title="Button sizes"
      desc="Button sizes provided from the «ButtonSize» model."
    >
      <VButton
        v-for="size in Object.keys(ButtonSize)"
        :key="size"
        :size="ButtonSize[size]"
      >
        {{ ButtonSize[size] }}
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
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :color="GlobalColors[color]"
        :size="ButtonSize.SMALL"
      >
        {{ GlobalColors[color] }}
      </VButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Button variants"
      desc="Button variants provided from «ButtonVariant» model."
    >
      <VButton
        v-for="variant in Object.keys(ButtonVariant)"
        :key="variant"
        :variant="ButtonVariant[variant]"
      >
        {{ ButtonVariant[variant] }}
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
        v-for="variant in Object.keys(ButtonVariant)"
        :key="variant"
        loading
        :variant="ButtonVariant[variant]"
      >
        {{ ButtonVariant[variant] }}
      </VButton>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import RemoveIcon from '@/assets/icons/buttons/remove.svg';
import SendIcon from '@/assets/icons/buttons/send.svg';
import VButton from '@/components/basic/VButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import { GlobalColors } from '@/model/Colors';
import { ButtonSize, ButtonVariant } from '@/model/components/VButton';
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
