<template>
  <VOffset :class="$style.header">
    <VOffset :class="$style.headerInner">
      <VOffset :mb="5">
        <VTitle
          :color="GlobalColorMap['700'].primary"
          variant="heading4"
          :align="TextAlign.CENTER"
        >
          Hello, how can we help?
        </VTitle>
      </VOffset>

      <VOffset :mb="20">
        <VText
          :align="TextAlign.CENTER"
          variant="subtitle1"
        >
          or choose a category to quickly find the help you need
        </VText>
      </VOffset>

      <VOffset :class="$style.textfield">
        <VTextField
          v-model="askValue"
          :size="TextFieldSize.NORMAL"
          placeholder="Ask a question..."
          @update:model-value="modelValue = $event"
        >
          <template #prefix>
            <VIconButton disabled>
              <SearchIcon />
            </VIconButton>
          </template>
        </VTextField>
      </VOffset>
    </VOffset>
  </VOffset>
</template>

<script setup lang="ts">
import SearchIcon from '@public/assets/icons/search.svg';
import { ref } from 'vue';

import VIconButton from '@/components/basic/VIconButton.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import VTextField from '@/components/form/VTextField.vue';
import { GlobalColorMap } from '@/model/Colors';
import { TextAlign } from '@/model/components/basic/VText';
import { TextFieldSize } from '@/model/components/form/VTextField';

const askValue = ref<string>('');
const modelValue = defineModel<string>({ required: true });
</script>

<style module lang="scss">
.header {
  padding: 73px 20px 95px;
  min-height: 150px;
  background-image: url("/public/assets/images/other/faq-header.png");
  background-repeat: no-repeat;
  background-size: cover;

  &Inner {
    max-width: 600px;
    margin: 0 auto;
  }
}

.textfield {
  background-color: var(--color-card);
  border-radius: 7px;
  transition: background-color var(--transition-duration) var(--transition-timing-func);
}
</style>
