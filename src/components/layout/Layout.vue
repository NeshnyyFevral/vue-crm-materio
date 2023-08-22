<template>
  <div
    :class="[
      $style.root,
      themeStore.theme && $style.darkRoot
    ]"
  >
    <div>
      <Sidebar
        v-model="openSidebar"
        :active="activeSidebar"
        @mouseenter="activeSidebar = true"
        @mouseleave="activeSidebar = false"
      />
    </div>
    <div
      v-if="openSidebar"
      :class="$style.modal"
      @click="openSidebar = false"
    />
    <div
      :class="[
        $style.content,
        openSidebar && $style.openSidebar
      ]"
      @transitionend="scroll"
    >
      <div
        ref="wrapper"
        :class="$style.wrapper"
      >
        <Header
          :class="$style.header"
          :active="active"
          @switchSidebar="openSidebar = !openSidebar"
        />
        <main :class="$style.main">
          <router-view />
        </main>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

import Footer from '@/components/layout/units/Footer.vue';
import Header from '@/components/layout/units/Header.vue';
import Sidebar from '@/components/layout/units/sidebar/Sidebar.vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const active = ref<boolean>(false);
const openSidebar = ref<boolean>(false);
const activeSidebar = ref<boolean>(false);
const wrapper = ref<HTMLDivElement | null>(null);
const headerWidth = ref<number>(0);

const scroll = () => {
  headerWidth.value = wrapper.value?.clientWidth || 0;
  active.value = !!window.scrollY;
};

onMounted(() => { window.addEventListener('scroll', scroll); });
onUnmounted(() => { window.removeEventListener('scroll', scroll); });
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";
@import "@/scss/vars";
  .root {
    display: flex;
    max-width: 1400px;
    padding: 0 15px;
    margin: 0 auto;
    color: var(--color-text);
  }

  body {
    background-color: var(--color-bg);
    @include theme-colors(true);

    .darkRoot {
      @include theme-colors(false);
    }
  }

  .content {
    width: 100%;
    margin-left: 55px;
    transition: margin 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .wrapper {
    min-height: calc(100vh - 40px);
  }

  .main {
    margin-top: 70px;
  }

  .header {
    max-width: 1315px;
  }

  @media screen and (max-width: 1800px) {
    .openSidebar {
      margin-left: 100px;

      .header {
        max-width: 1270px;
      }
    }
  }

  @media screen and (max-width: 1720px) {
    .openSidebar {
      margin-left: 150px;

      .header {
        max-width: 1220px;
      }
    }
  }

  @media screen and (max-width: 1650px) {
    .openSidebar {
      margin-left: 200px;

      .header {
        max-width: 1170px;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .openSidebar {
      margin-left: 250px;

      .header {
        max-width: 1120px;
      }
    }
  }

  @media screen and (max-width: 1405px) {
    .content {
      margin-left: 0;
    }

    .openSidebar {
      margin-left: 0;

      .header {
        max-width: 1315px;
      }
    }

    .modal {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 9998;
      overflow-y: hidden;
      content: '';
      background-color: rgb(0 0 0 / 30%);
    }
  }
</style>
