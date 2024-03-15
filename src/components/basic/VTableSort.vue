<template>
  <button
    :class="[
      $style.tableSort,
      props.order && $style[`tableSort--${props.order}`],
    ]"
    @click="clickHandle"
  >
    <slot />
    <i :class="$style.tableSortIcon">
      <svg viewBox="0 0 320 512">
        <path
          :class="$style.asc"
          d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
        />
        <path
          :class="$style.desc"
          d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
        />
      </svg>
    </i>
  </button>
</template>

<script lang="ts" setup>
type Order = 'asc' | 'desc';

interface PropsType {
  order: Order | null;
}

interface EmitsType {
  (e: 'click', data: Order | null): void;
}

const props = withDefaults(defineProps<PropsType>(), { order: null });
const emit = defineEmits<EmitsType>();

const clickHandle = () => {
  let nextVal: Order | null;

  if (props.order === null) {
    nextVal = 'asc';
  } else if (props.order === 'asc') {
    nextVal = 'desc';
  } else {
    nextVal = null;
  }

  emit('click', nextVal);
};
</script>

<style module lang="scss">
.tableSort {
  max-width: 100%;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &Icon {
    height: 14px;
    width: 9px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 100%;
      width: 100%;

      path {
        fill: var(--color-default-700);
      }

      .asc {
        opacity: 0.3;
      }

      .desc {
        opacity: 0.3;
      }
    }
  }

  &:hover:not(.tableSort--asc) {
    svg {
      .asc {
        opacity: 0.6;
      }
    }
  }

  &:hover:not(.tableSort--desc) {
    svg {
      .desc {
        opacity: 0.6;
      }
    }
  }

  &--asc {
    .tableSortIcon {
      svg {
        .asc {
          opacity: 1;
        }
      }
    }
  }

  &--desc {
    .tableSortIcon {
      svg {
        .desc {
          opacity: 1;
        }
      }
    }
  }
}
</style>
