<template>
  <div :class="$style.root">
    <VFileUploader
      clean-after-load
      :title="title"
      :desc="desc"
      :multiple="multiple"
      :name="name"
      :max-count="maxCount"
      @upload="uploadHandler"
    />

    <div :class="$style.files">
      <div
        v-for="file in uploadedFiles"
        :key="file.file.name"
        :class="$style.file"
      >
        <div :class="$style.img">
          <TxtIcon />
        </div>

        <div :class="$style.text">
          <p :class="$style.fileName">
            {{ file.file.name }}
          </p>
          <p :class="$style.fileSize">
            {{ file.file.size.toFixed(1) }} kb
          </p>
        </div>

        <div :class="$style.remove">
          <VIconButton
            :size="IconButtonSize.SMALL"
            @click="removeHandler(file.id)"
          >
            <CrossIcon />
          </VIconButton>
        </div>
      </div>
    </div>

    <div
      v-if="uploadedFiles.length"
      :class="$style.actions"
    >
      <VButton
        :color="GlobalColors.ERROR"
        :variant="ButtonVariant.OUTLINED"
        :class="$style.button"
        @click="removeHandler(null)"
      >
        Remove all
      </VButton>
      <VButton :class="$style.button">
        Upload files
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import CrossIcon from '@public/assets/icons/cross.svg';
import TxtIcon from '@public/assets/icons/file-uploader/txt.svg';
import { ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VIconButton from '@/components/basic/VIconButton.vue';
import VFileUploader from '@/components/form/VFileUploader.vue';
import { GlobalColors } from '@/model/Colors';
import { ButtonVariant } from '@/model/components/basic/VButton';
import { IconButtonSize } from '@/model/components/basic/VIconButton';

interface UploadedFiles {
  id: string;
  file: File;
}

interface PropsType {
  title?: string;
  desc?: string;
  name: string;
  multiple?: boolean;
  maxCount?: number;
}

withDefaults(defineProps<PropsType>(), {
  title: '',
  desc: '',
  name: '',
  multiple: false,
  maxCount: 5,
});

const uploadedFiles = ref<UploadedFiles[]>([]);

const uploadHandler = (v: { name: string; files: File[] }) => {
  const { files } = v;

  uploadedFiles.value = files.map((file) => ({ file, id: Math.random().toString(16).substring(2, 8) }));
};

const removeHandler = (id: null | string) => {
  if (id === null) {
    uploadedFiles.value = [];
  } else {
    uploadedFiles.value = [...uploadedFiles.value].filter((file) => file.id !== id);
  }
};
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

.root {
  width: 100%;
}

.files {
  margin: 20px 0;
}

.file {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  border-radius: 6px;
  border: 1px solid var(--color-border);
  padding: 10px 20px;

  & + & {
    margin-top: 10px;
  }

  & .fileName {
    @include body1;

    margin: 0;
    font-weight: 600;
  }

  & .fileSize {
    @include body2;

    margin: 0;
    opacity: 0.8;
  }
}

.actions {
  text-align: right;

  & .button {
    margin-left: 20px;
  }
}

.img {
  margin-right: 20px;

  svg {
    width: 37px;
    height: 37px;
  }
}

.remove {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    path {
      fill: var(--color-text);
    }
  }
}
</style>
