<template>
  <OtherFAQInner
    :icon="faqStore.ordersInner.icon"
    :title="faqStore.ordersInner.title"
    :description="faqStore.ordersInner.description"
    :questions="faqStore.ordersInner.questions"
  />
</template>

<script setup lang="ts">
import OtherFAQInner from '@/components/other/faq/OtherFAQInner.vue';
import { useFAQStore } from '@/stores/faq';

const faqStore = useFAQStore();
</script>
