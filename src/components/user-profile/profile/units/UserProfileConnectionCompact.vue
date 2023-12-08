<template>
  <VOffset :mb="10">
    <VFlex
      :align="FlexAlign.CENTER"
      :justify-content="FlexJustify.SPACE_BETWEEN"
    >
      <VOffset>
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="10">
            <VAvatar>
              <img
                :src="getPathImg(props.avatar)"
                alt="avatar"
              >
            </VAvatar>
          </VOffset>

          <VOffset :mt="5">
            <VOffset :mb="5">
              <VText
                variant="body2"
                font-weight="600"
              >
                {{ props.name }}
              </VText>
            </VOffset>

            <VOffset :mb="5">
              <VText variant="caption">
                {{ props.connectionsCount }} Connections
              </VText>
            </VOffset>
          </VOffset>
        </VFlex>
      </VOffset>

      <VOffset>
        <VButton
          :size="ButtonSize.SMALL"
          :variant="props.connected ? ButtonVariant.CONTAINED : ButtonVariant.OUTLINED"
        >
          <PeopleIcon :class="$style.icon" />
        </VButton>
      </VOffset>
    </VFlex>
  </VOffset>
</template>

<script setup lang="ts">
import PeopleIcon from '@public/assets/icons/people.svg';

import VAvatar from '@/components/basic/VAvatar.vue';
import VButton from '@/components/basic/VButton.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { ButtonSize, ButtonVariant } from '@/model/components/basic/VButton';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  avatar: string;
  name: string;
  connectionsCount: string;
  connected: boolean;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.icon {
  width: 5px;
  height: 15px;

  transform: scale(5);
}
</style>
