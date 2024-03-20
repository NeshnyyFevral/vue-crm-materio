<template>
  <OtherFAQInner
    :icon="faqStore.deliveryInner.icon"
    :title="faqStore.deliveryInner.title"
    :description="faqStore.deliveryInner.description"
    :questions="faqStore.deliveryInner.questions"
  />
</template>

<script setup lang="ts">
import OtherFAQInner from '@/components/other/faq/OtherFAQInner.vue';
import { useFAQStore } from '@/stores/faq';

const faqStore = useFAQStore();
</script>
