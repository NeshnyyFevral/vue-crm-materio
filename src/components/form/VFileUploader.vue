<template>
  <label :class="$style.root">
    <input
      ref="inputRef"
      :class="$style.input"
      :multiple="props.multiple"
      type="file"
      @drop="dropHandle"
      @change="changeHandle"
    >
    <div :class="$style.dropzone">
      <img
        :class="$style.img"
        src="../../assets/images/upload.png"
        alt="upload"
      >

      <div :class="$style.text">
        <h5 :class="$style.header">{{ title }}</h5>
        <p :class="$style.desc">{{ desc }}</p>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

interface PropsType {
  title?: string;
  desc?: string;
  multiple?: boolean;
  maxCount?: number;
  maxSize?: number;
  name: string;
  cleanAfterLoad?: boolean;
}

interface EmitsType {
  (e: 'upload', d: { name: string; files: File[] }): void;
  (e: 'onMaxWeight', d: { name: string; names: string[] }): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  desc: '',
  name: '',

  multiple: false,
  cleanAfterLoad: false,
  maxSize: Number.MAX_SAFE_INTEGER,
  maxCount: 5,
});
const emits = defineEmits<EmitsType>();
const toast = useToast();

const inputRef = ref<HTMLInputElement | null>(null);

const handleFiles = (files: FileList) => {
  const filesArr = Array.from(files);
  const uploadFiles: File[] = [];
  const invalidFileNames: string[] = [];

  if (filesArr.length > props.maxCount) {
    toast.error(`Max ${props.maxCount} files to upload!`);
    return;
  }

  for (const file of filesArr) {
    if (file.size < props.maxSize) {
      uploadFiles.push(file);
    } else {
      invalidFileNames.push(file.name);
    }
  }

  if (uploadFiles.length) {
    emits('upload', { name: props.name, files: uploadFiles });
  }
  if (invalidFileNames.length) {
    emits('onMaxWeight', { name: props.name, names: invalidFileNames });
  }

  if (props.cleanAfterLoad) {
    (inputRef.value as HTMLInputElement).value = '';
  }
};

const dropHandle = (e: DragEvent) => {
  const dt = e.dataTransfer;

  if (dt === null) return;

  const { files } = dt;

  handleFiles(files);
};

const changeHandle = (e: Event) => {
  handleFiles((e.target as HTMLInputElement).files as FileList);
};

</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

.root {
  width: 100%;
}

.input {
  width: 0;
  height: 0;
  opacity: 0;
}

.dropzone {
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 40px;
  border: 2px dashed var(--color-border);
}

.text {
  margin-left: 20px;

  & .header {
    @include heading5;

    margin-bottom: 10px;
  }

  & .desc {
    @include subtitle1;

    opacity: 0.7;
  }
}

.img {
  display: block;
}
</style>
