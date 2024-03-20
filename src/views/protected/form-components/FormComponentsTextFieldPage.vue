<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Input colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VTextField> component for different colored inputs."
    >
      <VTextField
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        v-model="inputColorValue"
        :label="color"
        :color="color"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input disabled and readonly"
      desc="Use {disabled | readonly}=true."
    >
      <VTextField
        v-for="variant in Object.values(TextFieldVariant)"
        :key="variant"
        v-model="inputDisabledValue"
        :variant="variant"
        :label="variant"
      />

      <VTextField
        v-for="variant in Object.values(TextFieldVariant)"
        :key="variant"
        v-model="inputDisabledValue"
        :variant="variant"
        :label="`${variant} + disabled`"
        disabled
      />

      <VTextField
        v-for="variant in Object.values(TextFieldVariant)"
        :key="variant"
        v-model="inputDisabledValue"
        :variant="variant"
        :label="`${variant} + readonly`"
        readonly
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input variants"
      desc="Use variant={'outlined' | 'standard'}"
    >
      <VTextField
        v-for="variant in Object.values(TextFieldVariant)"
        :key="variant"
        v-model="inputVariantValue"
        :variant="variant"
        :label="variant"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input sizes"
      desc="Use size={'small' | 'normal'}"
    >
      <VTextField
        v-for="size in Object.values(TextFieldSize)"
        :key="size"
        v-model="inputSizeValue"
        :size="size"
        :label="size"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input types"
      desc="Use type={'text' | 'password' | 'number' | 'search'}"
    >
      <VTextField
        v-for="type in Object.values(TextFieldType)"
        :key="type"
        v-model="inputTypeValue"
        :label="type"
        :type="type"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input placeholder and helper text"
      desc="Use «placeholder» and «help-text» prop"
    >
      <VTextField
        v-model="inputHelpersValue"
        label="Label"
        placeholder="Placeholder"
      />

      <VTextField
        v-model="inputHelpersValue"
        label="Label"
        help-text="Some important text!"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input prefix and suffix"
      desc="Use «prefix» and «suffix» slots to add icons (often used for password fields, user profiles) or default text (kg, km, m and etc.)."
    >
      <VTextField
        v-model="inputPrefixSuffixValue"
        label="Label"
      >
        <template #prefix>
          <VIconButton>
            <PeopleIcon />
          </VIconButton>
        </template>
      </VTextField>

      <VTextField
        v-model="inputPrefixSuffixValue"
        label="Label"
        :type="getType()"
      >
        <template #suffix>
          <VIconButton @click="isPassword = !isPassword">
            <component :is="getPasswordIcon()" />
          </VIconButton>
        </template>
      </VTextField>

      <VTextField
        v-model="inputPrefixSuffixValue"
        label="Label"
      >
        <template #suffix>
          kg
        </template>
      </VTextField>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import PasswordCloseIcon from '@public/assets/icons/text-field/password-close.svg';
import PasswordOpenIcon from '@public/assets/icons/text-field/password-open.svg';
import PeopleIcon from '@public/assets/icons/text-field/people.svg';
import { ref } from 'vue';

import VIconButton from '@/components/basic/VIconButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VTextField from '@/components/form/VTextField.vue';
import { GlobalColors } from '@/model/Colors';
import {
  TextFieldSize,
  TextFieldType,
  TextFieldVariant,
} from '@/model/components/form/VTextField';

const inputColorValue = ref<string>('');
const inputVariantValue = ref<string>('');
const inputSizeValue = ref<string>('');
const inputDisabledValue = ref<string>('');
const inputTypeValue = ref<string>('');
const inputHelpersValue = ref<string>('');
const inputPrefixSuffixValue = ref<string>('');

const isPassword = ref<boolean>(true);

const getPasswordIcon = () => (isPassword.value ? PasswordCloseIcon : PasswordOpenIcon);
const getType = () => (isPassword.value ? TextFieldType.PASSWORD : TextFieldType.TEXT);
</script>
