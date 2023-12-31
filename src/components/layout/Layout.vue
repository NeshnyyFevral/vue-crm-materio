<template>
  <div :class="$style.root">
    <Sidebar
      v-model="sidebarHasOpened"
      :active="sidebarHasActivated"
      @mouseenter="sidebarHasActivated = true"
      @mouseleave="sidebarHasActivated = false"
    />
    <div
      v-if="sidebarHasOpened"
      :class="$style.modal"
      @click="sidebarHasOpened = false"
    />
    <div
      :class="[
        $style.content,
        sidebarHasOpened && $style.openSidebar
      ]"
      @transitionend="scrollEvent"
    >
      <div
        ref="wrapperRef"
        :class="$style.wrapper"
      >
        <Header
          :class="$style.header"
          :active="headerHasActivated"
          @switchSidebar="sidebarHasOpened = !sidebarHasOpened"
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

const headerHasActivated = ref<boolean>(false);
const sidebarHasOpened = ref<boolean>(true);
const sidebarHasActivated = ref<boolean>(false);
const wrapperRef = ref<HTMLDivElement | null>(null);
const headerWidth = ref<number>(0);

const scrollEvent = () => {
  headerWidth.value = wrapperRef.value?.clientWidth || 0;
  headerHasActivated.value = !!window.scrollY;
};

onMounted(() => { window.addEventListener('scroll', scrollEvent); });
onUnmounted(() => { window.removeEventListener('scroll', scrollEvent); });
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

.content {
  width: 100%;
  margin-left: 55px;
  transition: margin var(--transition-duration) var(--transition-timing-func);

  @media screen and (max-width: 1405px) {
    margin-left: 0;
  }
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

.openSidebar {
  @media screen and (max-width: 1800px) {
    margin-left: 100px;

    .header {
      max-width: 1270px;
    }
  }

  @media screen and (max-width: 1720px) {
    margin-left: 150px;

    .header {
      max-width: 1220px;
    }
  }

  @media screen and (max-width: 1650px) {
    margin-left: 200px;

    .header {
      max-width: 1170px;
    }
  }

  @media screen and (max-width: 1500px) {
    margin-left: 250px;

    .header {
      max-width: 1120px;
    }
  }

  @media screen and (max-width: 1405px) {
    margin-left: 0;

    .header {
      max-width: 1315px;
    }
  }
}

.modal {
  @media screen and (max-width: 1405px) {
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
