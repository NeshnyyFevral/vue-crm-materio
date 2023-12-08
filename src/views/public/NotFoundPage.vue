<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__auth-box">
        <div class="auth__main">
          <div class="auth__logo auth__logo--404">
            <VFlex :align="FlexAlign.CENTER">
              <VOffset :mr="10">
                <LogoIcon class="auth__logo-icon" />
              </VOffset>
              <VTitle variant="heading4">
                MATERIO
              </VTitle>
            </VFlex>
          </div>

          <h3 class="auth__title auth__title--404 title-2xl-bold">
            Ooops...
          </h3>

          <p class="auth__desc text-xl">
            It's just a 404 Error!<br>
            What you’re looking for may have been misplaced in Long Term Memory.
          </p>

          <VButton @click="goToHome">
            Go to home page
          </VButton>
        </div>
      </div>
      <div class="auth__image-icon">
        <div class="auth__icon">
          <NotFoundIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NotFoundIcon from '@public/assets/icons/not-found.svg';
import LogoIcon from '@public/assets/icons/sidebar/logo.svg';
import { useRouter } from 'vue-router';

import VButton from '@/components/basic/VButton.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { Routes } from '@/router';

const router = useRouter();

const goToHome = () => {
  router.push({ name: Routes.CRM });
};
</script>

<style lang="scss"></style>
