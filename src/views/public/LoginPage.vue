<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__auth-box">
        <div class="auth__main auth__main--login">
          <div class="auth__logo">
            logo icon
          </div>

          <h3 class="auth__title title-2xl-bold">
            Log in
          </h3>

          <input
            v-model="email"
            label="Email*"
            label-class="auth__label"
            placeholder="Enter your email"
            type="email"
            max-width
            class="auth__field"
          >

          <input
            v-model="password"
            label="Password*"
            label-class="auth__label"
            placeholder="Your password"
            type="password"
            max-width
            class="auth__field"
          >

          <!--          <div class="auth__forgot">
            <router-link
              :to="{name: Routes.RESET_PASSWORD}"
              class="auth__link"
            >
              Forgot password?
            </router-link>
          </div>-->

          <button class="auth__action">
            Log in
          </button>
        </div>
      </div>
      <div class="auth__image-icon">
        <div class="auth__icon">
          login icon
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

const email = ref<string>('');
const password = ref<string>('');

const isLoading = ref<boolean>(false);
const delay = ref(false);

// eslint-disable-next-line no-promise-executor-return
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const clickEnter = async (e: any): Promise<void> => {
  if (delay.value) {
    return;
  }

  if (e.keyCode === 13 && !isLoading.value) {
    delay.value = true;
    await sleep(1000);
    delay.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keyup', clickEnter);
});

onUnmounted(() => {
  window.removeEventListener('keyup', clickEnter);
});
</script>
