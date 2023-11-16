<template>
  <VCard :class="$style.root">
    <VOffset>
      <VTitle variant="heading6">
        Congratulations John! 🥳
      </VTitle>
    </VOffset>

    <VOffset :mb="15">
      <VText
        variant="body2"
        :color="GlobalColorMap['400'].default"
      >
        Best seller of the month
      </VText>
    </VOffset>

    <VOffset :mb="15">
      <VTitle
        variant="heading5"
        :color="GlobalColorMap['700'].primary"
      >
        $42.8k
      </VTitle>
    </VOffset>

    <VOffset>
      <VButton :size="ButtonSize.SMALL">
        View sales
      </VButton>
    </VOffset>

    <VOffset :class="$style.trophy">
      <canvas
        ref="canvasRef"
        width="175"
        height="175"
      />

      <img
        src="/public/assets/images/analytics/trophy.png"
        alt="trophy"
        :class="$style.trImage"
      >
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VCard from '@/components/basic/VCard.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap } from '@/model/Colors';
import { ButtonSize } from '@/model/components/basic/VButton';

const canvasRef = ref<HTMLCanvasElement | null>(null);

const renderTriangle = () => {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext('2d');
    const { width } = canvasRef.value;
    const { height } = canvasRef.value;

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      ctx.fillStyle = GlobalColorMap['100'].default;
      ctx.fill();
    }

    canvasRef.value.style.borderBottomRightRadius = '12px';
  }
};

onMounted(() => {
  renderTriangle();
});
</script>

<style module lang="scss">
.root {
  position: relative;
}

.trophy {
  position: absolute;
  bottom: 0;
  right: 0;
}

.trImage {
  position: absolute;
  width: 75px;
  height: 98px;
  bottom: 20px;
  right: 40px;
}
</style>
