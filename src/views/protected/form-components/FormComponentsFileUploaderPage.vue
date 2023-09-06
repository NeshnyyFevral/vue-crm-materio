<template>
  <div :class="$style.root">
    <VPreviewComponentCard title="File uploader basic">
      <FileUploaderPresentation
        title="Drop files here or click to upload."
        desc="Drop files here or click browse thorough your machine"
        name="upload"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="File uploader multiple"
      desc="Use «multiple» prop to upload multiple files."
    >
      <FileUploaderPresentation
        title="Drop files here or click to upload."
        desc="Drop files here or click browse thorough your machine"
        name="upload"
        multiple
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="File uploader with count limit"
      desc="Use «max-count» prop, to limit count files to upload."
    >
      <FileUploaderPresentation
        title="Drop files here or click to upload."
        desc="Max 2 files to upload."
        name="upload"
        multiple
        :max-count="2"
      />
    </VPreviewComponentCard>
  </div>
</template>
<script setup lang="ts">
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import FileUploaderPresentation from '@/components/FileUploaderPresentation.vue';
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-gap: 30px;
}
</style>
