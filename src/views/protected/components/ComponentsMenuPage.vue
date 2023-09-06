<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Basic menu"
      desc="lorem ipsum"
    >
      <div :class="$style.basic">
        <VButton
          :variant="ButtonVariant.OUTLINED"
          @click="hasBasicOpened = !hasBasicOpened"
        >
          Open menu
        </VButton>
        <VMenu v-model="hasBasicOpened">
          <VMenuItem>Menu</VMenuItem>
          <VMenuItem>Account info</VMenuItem>
          <VMenuItem>Logout</VMenuItem>
        </VMenu>
      </div>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Basic menu"
      desc="lorem ipsum"
    >
      <div :class="$style.basic">
        <VButton
          :variant="ButtonVariant.OUTLINED"
          @click="hasCustomOpened = !hasCustomOpened"
        >
          Open menu
        </VButton>
        <VMenu v-model="hasCustomOpened">
          <VMenuItem>Menu</VMenuItem>
          <VMenuItem>Account info</VMenuItem>
          <VMenuItem>Logout</VMenuItem>
        </VMenu>
      </div>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { ButtonVariant } from '@/model/components/basic/VButton';

const hasBasicOpened = ref<boolean>(false);
const hasCustomOpened = ref<boolean>(false);
</script>

<style module lang="scss">
.basic {
  width: 150px;
}
</style>
