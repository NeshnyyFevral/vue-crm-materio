<template>
  <OtherFAQInner
    :icon="faqStore.servicesInner.icon"
    :title="faqStore.servicesInner.title"
    :description="faqStore.servicesInner.description"
    :questions="faqStore.servicesInner.questions"
  />
</template>

<script setup lang="ts">
import OtherFAQInner from '@/components/other/faq/OtherFAQInner.vue';
import { useFAQStore } from '@/stores/faq';

const faqStore = useFAQStore();
</script>
