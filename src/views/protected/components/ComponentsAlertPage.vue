<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Alert basic"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VAlert> component for different colored alerts."
    >
      <VAlert
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
      >
        This is an {{ color }} alert — check it out!
      </VAlert>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Alert outlined"
      desc="Use variant='outlined' prop with <VAlert> component for outlined alerts."
    >
      <VAlert
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
        :variant="AlertVariant.OUTLINED"
      >
        This is an {{ color }} alert — check it out!
      </VAlert>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Alert filled"
      desc="Use variant='filled' prop with <VAlert> component for filled alerts."
    >
      <VAlert
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        :color="color"
        :variant="AlertVariant.FILLED"
      >
        This is an {{ color }} alert — check it out!
      </VAlert>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Alert filled"
      desc="You can add the named word #action to add a button that can
       be used as an action. in addition to the button, you can add any additional text as well."
    >
      <VAlert :variant="AlertVariant.FILLED">
        This is an {{ AlertVariant.FILLED }} alert — check it out!

        <template #action>
          <VButton
            :size="ButtonSize.SMALL"
            :variant="ButtonVariant.CONTAINED"
          >
            undo
          </VButton>
        </template>
      </VAlert>

      <VAlert :variant="AlertVariant.LIGHT">
        This is an {{ AlertVariant.LIGHT }} alert — check it out!

        <template #action>
          <VButton
            :size="ButtonSize.SMALL"
            :variant="ButtonVariant.TEXT"
          >
            undo
          </VButton>
        </template>
      </VAlert>

      <VAlert :variant="AlertVariant.OUTLINED">
        This is an {{ AlertVariant.OUTLINED }} alert — check it out!

        <template #action>
          <VButton
            :size="ButtonSize.SMALL"
            :variant="ButtonVariant.TEXT"
          >
            undo
          </VButton>
        </template>
      </VAlert>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import VAlert from '@/components/basic/VAlert.vue';
import VButton from '@/components/basic/VButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { AlertVariant } from '@/model/components/basic/VAlert';
import { ButtonSize, ButtonVariant } from '@/model/components/basic/VButton';
</script>
