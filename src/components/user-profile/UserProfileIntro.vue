<template>
  <VOffset :class="$style.intro">
    <VOffset
      height="250px"
      width="100%"
      :class="$style.banner"
    />
    <VOffset
      :ml="30"
      :mt="-30"
    >
      <VFlex
        :align="FlexAlign.END"
        :justify-content="FlexJustify.SPACE_BETWEEN"
      >
        <VFlex :align="FlexAlign.END">
          <VAvatar
            :size="AvatarSize.EXTRA_LARGE"
            :variant="AvatarVariant.ROUNDED"
          >
            <img
              :src="getPathImg('avatars/1.png')"
              alt="avatar"
              :class="$style.avatar"
            >
          </VAvatar>

          <VOffset :ml="30">
            <VOffset :mb="10">
              <VTitle variant="heading5">
                John Doe
              </VTitle>
            </VOffset>
            <VFlex :align="FlexAlign.CENTER">
              <VOffset :mr="20">
                <VFlex :align="FlexAlign.CENTER">
                  <VOffset :mr="5">
                    <DesignerIcon :class="$style.icon" />
                  </VOffset>
                  <VText
                    variant="subtitle1"
                    font-weight="600"
                    :color="GlobalColorMap['500'].default"
                  >
                    UX Designer
                  </VText>
                </VFlex>
              </VOffset>

              <VOffset :mr="20">
                <VFlex :align="FlexAlign.CENTER">
                  <VOffset :mr="5">
                    <PlacementIcon :class="$style.icon" />
                  </VOffset>
                  <VText
                    variant="subtitle1"
                    font-weight="600"
                    :color="GlobalColorMap['500'].default"
                  >
                    Vatican City
                  </VText>
                </VFlex>
              </VOffset>

              <VOffset :mr="20">
                <VFlex :align="FlexAlign.CENTER">
                  <VOffset :mr="5">
                    <CalendarIcon :class="$style.icon" />
                  </VOffset>
                  <VText
                    variant="subtitle1"
                    font-weight="600"
                    :color="GlobalColorMap['500'].default"
                  >
                    Joined April 2021
                  </VText>
                </VFlex>
              </VOffset>
            </VFlex>
          </VOffset>
        </VFlex>

        <VOffset :mr="30">
          <VButton>
            <template #iconPrepend>
              <PeopleSuccessIcon />
            </template>
            Connected
          </VButton>
        </VOffset>
      </VFlex>
    </VOffset>
  </VOffset>
</template>
<script setup lang="ts">
import CalendarIcon from '@public/assets/icons/calendar.svg';
import PeopleSuccessIcon from '@public/assets/icons/people-success.svg';
import PlacementIcon from '@public/assets/icons/place.svg';
import DesignerIcon from '@public/assets/icons/ux-designer.svg';
import { computed } from 'vue';

import VAvatar from '@/components/basic/VAvatar.vue';
import VButton from '@/components/basic/VButton.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap } from '@/model/Colors';
import { AvatarSize, AvatarVariant } from '@/model/components/basic/VAvatar';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { getPathImg } from '@/model/tools/PathTools';

const colorSecondary = computed<string>(() => GlobalColorMap['600'].default);
</script>

<style module lang="scss">
.intro {
  --color-secondary: v-bind(colorSecondary);

  height: 375px;
  border: 1px solid var(--color-default-100);
  border-radius: 10px;
  overflow: hidden;
}

.icon {
  path {
    fill: var(--color-secondary);
  }
}

.avatar {
  border: 5px solid #FFF;
}

.banner {
  background-image: url("@public/assets/images/user-profile/profile-banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>