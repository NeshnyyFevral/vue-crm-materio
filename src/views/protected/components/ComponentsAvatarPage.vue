<template>
  <div :class="$style.root">
    <VPreviewComponentCard
      title="Avatar sizes"
      desc="Avatar sizes provided by «AvatarSize» model."
    >
      <VAvatar
        v-for="size in Object.keys(AvatarSize)"
        :key="size"
        :size="AvatarSize[size]"
      >
        <img
          src="@/assets/avatars/3.png"
          alt="1"
        >
      </VAvatar>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Avatar variants"
      desc="Avatar variants provided by «AvatarVariant» model."
    >
      <VAvatar
        v-for="variant in Object.keys(AvatarVariant)"
        :key="variant"
        :variant="AvatarVariant[variant]"
      >
        <img
          src="@/assets/avatars/2.png"
          alt="1"
        >
      </VAvatar>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import { AvatarSize, AvatarVariant } from '@/model/components/VAvatar';
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include grid;
}
</style>
