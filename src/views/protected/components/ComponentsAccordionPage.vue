<template>
  <div :class="$style.root">
    <VPreviewComponentCard
      title="Basic accordion"
      desc="Use <VAccordion> components"
      transparent
    >
      <VAccordion title="Accordion 1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
      </VAccordion>
      <VAccordion title="Accordion 2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
      </VAccordion>
      <VAccordion title="Accordion 3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
      </VAccordion>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Linked Accordions"
      desc="To make linked accordions, you need to create a variable and bind it via «v-model:name» to each accordion to be linked"
      transparent
    >
      <VAccordion
        v-model:name="linkedAccordion"
        title="Accordion 1"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
      </VAccordion>
      <VAccordion
        v-model:name="linkedAccordion"
        title="Accordion 2"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
      </VAccordion>
      <VAccordion
        v-model:name="linkedAccordion"
        title="Accordion 3"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsa quam rem. Earum nobis omnis rem
        unde. Consectetur consequuntur exercitationem in laboriosam, magni neque numquam provident quod saepe sed tenetur!
      </VAccordion>
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VAccordion from '@/components/basic/VAccordion.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';

const linkedAccordion = ref<string>('');
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include grid;
}
</style>
