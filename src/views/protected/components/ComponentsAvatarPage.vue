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

    <VPreviewComponentCard
      title="Avatar letter (without img slot)"
      desc="if no image is passed to the component slot, then the letter
        style is displayed, which is taken from v-bind:letter, which by
        default is «Noname» and the first letters of the first two words are
        taken and displayed with a capital letter."
    >
      <VAvatar
        v-for="variant in Object.keys(AvatarVariant)"
        :key="variant"
        :variant="AvatarVariant[variant]"
        letter="Jhon Snow"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Avatar with svg"
      desc="You can also pass an svg inside the component."
    >
      <VAvatar
        light
        :color="GlobalColors.DEFAULT"
      >
        <FileIcon />
      </VAvatar>

      <VAvatar :color="GlobalColors.SUCCESS">
        <RepairIcon />
      </VAvatar>

      <VAvatar
        light
        :color="GlobalColors.INFO"
      >
        <SuccessIcon />
      </VAvatar>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Avatar light style"
      desc="Use prop «light» to lighten the background background."
    >
      <VAvatar>
        <NotiIcon />
      </VAvatar>

      <VAvatar :color="GlobalColors.SUCCESS">
        <DiskIcon />
      </VAvatar>

      <VAvatar light>
        <NotiIcon />
      </VAvatar>

      <VAvatar
        light
        :color="GlobalColors.SUCCESS"
      >
        <DiskIcon />
      </VAvatar>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import DiskIcon from '@/assets/icons/avatars/disk.svg';
import FileIcon from '@/assets/icons/avatars/file.svg';
import NotiIcon from '@/assets/icons/avatars/noti.svg';
import RepairIcon from '@/assets/icons/avatars/repair.svg';
import SuccessIcon from '@/assets/icons/avatars/success.svg';
import VAvatar from '@/components/basic/VAvatar.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import { GlobalColors } from '@/model/Colors';
import { AvatarSize, AvatarVariant } from '@/model/components/VAvatar';
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include grid;
}
</style>
