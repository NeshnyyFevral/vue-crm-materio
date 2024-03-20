<template>
  <OtherFAQInner
    :icon="faqStore.paymentInner.icon"
    :title="faqStore.paymentInner.title"
    :description="faqStore.paymentInner.description"
    :questions="faqStore.paymentInner.questions"
  />
</template>

<script setup lang="ts">
import OtherFAQInner from '@/components/other/faq/OtherFAQInner.vue';
import { useFAQStore } from '@/stores/faq';

const faqStore = useFAQStore();
</script>
