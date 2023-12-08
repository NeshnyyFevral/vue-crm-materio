<template>
  <VPreviewComponentPage>
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
          :src="getPathImg('avatars/3.png')"
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
          :src="getPathImg('avatars/2.png')"
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
        filled
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

      <VAvatar
        filled
        :color="GlobalColors.SUCCESS"
      >
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
      desc="Use prop «light» to lighten the background."
    >
      <VAvatar filled>
        <NotiIcon />
      </VAvatar>

      <VAvatar
        filled
        :color="GlobalColors.SUCCESS"
      >
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

    <VPreviewComponentCard
      title="Avatar outlined"
      desc="Use prop «outline» to transparent the background and add border."
    >
      <VAvatar
        v-for="variant in Object.keys(AvatarVariant)"
        :key="variant"
        :variant="AvatarVariant[variant]"
        letter="Jhon Snow"
        outlined
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import DiskIcon from '@public/assets/icons/avatar/disk.svg';
import FileIcon from '@public/assets/icons/avatar/file.svg';
import NotiIcon from '@public/assets/icons/avatar/noti.svg';
import RepairIcon from '@public/assets/icons/avatar/repair.svg';
import SuccessIcon from '@public/assets/icons/avatar/success.svg';

import VAvatar from '@/components/basic/VAvatar.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { AvatarSize, AvatarVariant } from '@/model/components/basic/VAvatar';
import { getPathImg } from '@/model/tools/PathTools';
</script>
