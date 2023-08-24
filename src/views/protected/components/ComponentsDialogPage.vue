<template>
  <div :class="$style.root">
    <VPreviewComponentCard
      title="Basic dialog"
      desc="Manage model-value prop with the help of a state."
    >
      <VButton @click="isVisibleBasicDialog = true">
        Basic dialog
      </VButton>
      <VDialog v-model="isVisibleBasicDialog">
        <DialogPlaceholder v-model="isVisibleBasicDialog" />
      </VDialog>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Dialog sizes"
      desc="Use size={'small' | 'medium' | 'large'} prop with <VDialog> component for different sized dialog."
    >
      <VButton @click="isVisibleSmallDialog = true">
        Small dialog
      </VButton>
      <VButton @click="isVisibleMediumDialog = true">
        Medium dialog
      </VButton>
      <VButton @click="isVisibleLargeDialog = true">
        Large dialog
      </VButton>
      <VDialog
        v-model="isVisibleSmallDialog"
        :size="DialogSize.SMALL"
      >
        <DialogPlaceholder
          v-model="isVisibleSmallDialog"
          title="Small Dialog"
        />
      </VDialog>

      <VDialog
        v-model="isVisibleMediumDialog"
        :size="DialogSize.MEDIUM"
      >
        <DialogPlaceholder
          v-model="isVisibleMediumDialog"
          title="Medium Dialog"
        />
      </VDialog>

      <VDialog
        v-model="isVisibleLargeDialog"
        :size="DialogSize.LARGE"
      >
        <DialogPlaceholder
          v-model="isVisibleLargeDialog"
          title="Large Dialog"
        />
      </VDialog>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Persistent dialog"
      desc="Use a prop persistent to limit the possibility of closing without selecting"
    >
      <VButton @click="isVisiblePersistentDialog = true">
        Persistent dialog
      </VButton>
      <VDialog
        v-model="isVisiblePersistentDialog"
        persistent
      >
        <DialogPlaceholder v-model="isVisiblePersistentDialog" />
      </VDialog>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Fullscreen dialog"
      desc="Use a prop fullscreen to so that the dialog occupies the entire area"
    >
      <VButton @click="isVisibleFullscreenDialog = true">
        Fullscreen dialog
      </VButton>
      <VDialog
        v-model="isVisibleFullscreenDialog"
        fullscreen
      >
        <DialogPlaceholder v-model="isVisibleFullscreenDialog" />
      </VDialog>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Overflow dialog"
      desc="When content overflows, a scroll will appear."
    >
      <VButton @click="isVisibleScrollDialog = true">
        Fullscreen dialog
      </VButton>
      <VDialog v-model="isVisibleScrollDialog">
        <DialogPlaceholder
          v-model="isVisibleScrollDialog"
          :desc="'Lorem ipsum dolor '.repeat(400)"
        />
      </VDialog>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VDialog from '@/components/basic/VDialog.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import DialogPlaceholder from '@/components/DialogPlaceholder.vue';
import { DialogSize } from '@/model/components/basic/VDialog';

const isVisibleBasicDialog = ref<boolean>(false);

const isVisibleSmallDialog = ref<boolean>(false);
const isVisibleMediumDialog = ref<boolean>(false);
const isVisibleLargeDialog = ref<boolean>(false);

const isVisibleFullscreenDialog = ref<boolean>(false);
const isVisiblePersistentDialog = ref<boolean>(false);

const isVisibleScrollDialog = ref<boolean>(false);
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include grid;
}

</style>
