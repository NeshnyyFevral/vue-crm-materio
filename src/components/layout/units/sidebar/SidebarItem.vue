<template>
  <router-link
    v-ripple
    :class="[
      $style.root,
      defaultIcon && $style.defaultIcon,
    ]"
    :to="to"
    :active-class="$style.active"
  >
    <span :class="$style.prependIcon">
      <slot name="prepend" />
    </span>
    <h3 :class="$style.title">
      {{ title }}
    </h3>
  </router-link>
</template>

<script setup lang="ts">
interface PropsType {
  title: string;
  defaultIcon: boolean;
  to: { name: string };
  activeLink: string;
}

defineProps<PropsType>();
</script>

<style module lang="scss">
@import "@/scss/mixins/ripple";

.root {
  @include ripple-block;

  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 230px;
  padding: 10px 18px 10px 22px;
  margin-bottom: 5px;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: none;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  transition: background 0.3s cubic-bezier(.25,.8,.5,1);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: block;
    content: '';
    background: none;
    opacity: 0;
  }

  &:hover {
    background: rgb(94 86 105 / 8%);
  }
}

.title {
  position: relative;
  margin-left: 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text);
  transition: color 0.3s cubic-bezier(.25,.8,.5,1);
}

.defaultIcon .title {
  margin-left: 7px;

  &::before {
    position: absolute;
    top: 50%;
    left: -33px;
    width: 10px;
    height: 10px;
    content: '';
    border: 1px solid currentColor;
    border-radius: 50%;
    transform: translateY(-50%);
  }
}

.prependIcon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  fill: var(--color-text);
  transition: fill 0.3s cubic-bezier(.25,.8,.5,1);
}

.active {
  background: linear-gradient(98deg,#cea0ff, var(--color-primary-700) 94%);

  &:hover {
    background: linear-gradient(98deg,#cea0ff, var(--color-primary-700) 100%);
  }
}

.active .title {
  color: #fff;
}

.active .prependIcon {
  fill: #fff;
}
</style>
