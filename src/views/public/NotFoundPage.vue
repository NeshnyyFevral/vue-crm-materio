<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__auth-box">
        <div class="auth__main">
          <div class="auth__logo auth__logo--404">
            logo icon
          </div>

          <h3 class="auth__title auth__title--404 title-2xl-bold">
            Ooops...
          </h3>

          <p class="auth__desc text-xl">
            It's just a 404 Error!<br>
            What you’re looking for may have been misplaced in Long Term Memory.
          </p>

          <button @click="goToHome">
            Go to home page
          </button>
        </div>
      </div>
      <div class="auth__image-icon">
        <div class="auth__icon">
          not found icon
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { router } from '@/main';
import { Routes } from '@/router';

const goToHome = () => {
  // router.push({ name: Routes.TERMINALS });
};
</script>
