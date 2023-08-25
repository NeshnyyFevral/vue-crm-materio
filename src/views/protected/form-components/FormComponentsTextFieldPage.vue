<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Input colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VTextField> component for different colored inputs."
    >
      <VTextField
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        v-model="inputColorValue"
        :label="GlobalColors[color]"
        :color="GlobalColors[color]"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input disabled"
      desc="Use disabled=true."
    >
      <VTextField
        v-for="variant in Object.keys(TextFieldVariant)"
        :key="variant"
        v-model="inputDisabledValue"
        :variant="TextFieldVariant[variant]"
        :label="TextFieldVariant[variant]"
      />

      <VTextField
        v-for="variant in Object.keys(TextFieldVariant)"
        :key="variant"
        v-model="inputDisabledValue"
        :variant="TextFieldVariant[variant]"
        :label="`${TextFieldVariant[variant]} + disabled`"
        disabled
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input variants"
      desc="Use variant={'outlined' | 'standard'}"
    >
      <VTextField
        v-for="variant in Object.keys(TextFieldVariant)"
        :key="variant"
        v-model="inputVariantValue"
        :variant="TextFieldVariant[variant]"
        :label="TextFieldVariant[variant]"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input sizes"
      desc="Use size={'small' | 'normal'}"
    >
      <VTextField
        v-for="size in Object.keys(TextFieldSize)"
        :key="size"
        v-model="inputSizeValue"
        :size="TextFieldSize[size]"
        :label="TextFieldSize[size]"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Input types"
      desc="Use type={'text' | 'password' | 'number' | 'search'}"
    >
      <VTextField
        v-for="type in Object.keys(TextFieldType)"
        :key="type"
        v-model="inputTypeValue"
        :label="TextFieldType[type]"
        :type="TextFieldType[type]"
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
import { ref } from 'vue';

import PasswordCloseIcon from '@/assets/icons/text-field/password-close.svg';
import PasswordOpenIcon from '@/assets/icons/text-field/password-open.svg';
import PeopleIcon from '@/assets/icons/text-field/people.svg';
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
