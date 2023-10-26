<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`]
    ]"
  >
    <div :class="$style.content">
      <component
        :is="getIconFromColor(props.color)"
        :class="$style.icon"
      />
      <div :class="$style.text">
        <slot />
      </div>
    </div>

    <slot name="action" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import InfoIcon from '@/assets/icons/alert/info.svg';
import SuccessIcon from '@/assets/icons/alert/success.svg';
import WarningIcon from '@/assets/icons/alert/warning.svg';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AlertVariant } from '@/model/components/basic/VAlert';

interface PropsType {
  icon?: any;
  color?: GlobalColors;
  variant?: AlertVariant;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  variant: AlertVariant.LIGHT,
});

const alertColor = computed<string>(() => GlobalColorMap['700'][props.color]);
const alertColorLight = computed<string>(() => GlobalColorMap['100'][props.color]);

const getIconFromColor = (color: GlobalColors) => {
  switch (color) {
  case GlobalColors.SUCCESS: return SuccessIcon;
  case GlobalColors.WARNING: return WarningIcon;

  default: return InfoIcon;
  }
};
</script>

<style module lang="scss">
.root {
  --alert-color: v-bind(alertColor);
  --alert-color-light: v-bind(alertColorLight);

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid;
}

.content {
  display: flex;
  align-items: center;
}

.text {
  font-size: 14px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.variant {
  &-outlined {
    background-color: transparent;
    color: var(--alert-color);

    path {
      fill: var(--alert-color);
    }
  }

  &-filled {
    background-color: var(--alert-color);
    color: var(--color-button-text);

    path {
      fill: var(--color-button-text);
    }
  }

  &-light {
    background-color: var(--alert-color-light);
    border: none;
    color: var(--alert-color);

    path {
      fill: var(--alert-color);
    }
  }
}
</style>
