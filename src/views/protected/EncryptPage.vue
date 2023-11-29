<template>
  <VCard>
    <VOffset :mb="20">
      <VTitle :variant="'heading5'">
        Diffie-Hellman encryption
      </VTitle>
    </VOffset>

    <VFlex :align="FlexAlign.CENTER">
      <VOffset width="40%">
        <VOffset :mb="30">
          <img
            :src="getPathImg('images/crm/girl.png')"
            alt="girl"
            :class="$style.image"
          >
        </VOffset>

        <VOffset>
          <VOffset :mb="10">
            <VTextField
              v-model="message"
              label="Message"
            />
          </VOffset>

          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            p: {{ keys.p }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            g: {{ keys.g }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            secret Alice: {{ keys.a }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            public Alice: {{ keys.A }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            shared secret Alice: {{ sharedSecretAlice }}
          </VText>

          <VOffset :mt="10">
            <VTextField
              v-model="encryptedMessage"
              disabled
              label="Encrypted message"
            />
          </VOffset>
        </VOffset>
      </VOffset>

      <VOffset
        :mb="100"
        width="10%"
      >
        <VButton
          max-width
          :loading="isLoading"
          :disabled="!message.length"
          @click="sendMessage"
        >
          Send -->
        </VButton>
      </VOffset>

      <VOffset width="40%">
        <VOffset :mb="30">
          <img
            :src="getPathImg('images/crm/boy.png')"
            alt="boy"
            :class="$style.image"
          >
        </VOffset>

        <VOffset>
          <VOffset :mb="10">
            <VTextField
              v-model="encryptedMessage"
              disabled
              label="Encrypted message"
            />
          </VOffset>

          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            p: {{ keys.p }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            g: {{ keys.g }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            secret Bob: {{ keys.b }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            public Bob: {{ keys.B }}
          </VText>
          <VText
            :align="VTextTextAlign.CENTER"
            variant="body2"
          >
            shared secret Bob: {{ sharedSecretBob }}
          </VText>

          <VOffset :mt="10">
            <VTextField
              v-model="decryptedMessage"
              disabled
              label="Decrypted message"
            />
          </VOffset>
        </VOffset>
      </VOffset>
    </VFlex>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import VTextField from '@/components/form/VTextField.vue';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { VTextTextAlign } from '@/model/components/basic/VText';
import { getPathImg } from '@/model/tools/PathTools';
import { getRandom } from '@/model/tools/RandomTools';

interface HellmanKeys {
  p: number;
  g: number;
  a: number;
  b: number;
  A: number;
  B: number;
}

const message = ref<string>('');
const encryptedMessage = ref<string>('');
const decryptedMessage = ref<string>('');
const sharedSecretAlice = ref<number>(0);
const sharedSecretBob = ref<number>(0);

const isLoading = ref<boolean>(false);
const keys = ref<HellmanKeys>({
  p: 0,
  g: 0,
  a: 0,
  b: 0,
  A: 0,
  B: 0,
});

const generateRandomPrime = (min: number, max: number) => {
  const isPrime = (num: number) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  let randomPrime;
  do {
    randomPrime = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (!isPrime(randomPrime));
  return randomPrime;
};

const powMod = (num: number, pow: number, mod: number) => {
  if (num < 1) { return 0; }
  if (mod < 0) { mod = 0; }
  pow = Math.round(pow);
  num %= mod;
  let res = 1;
  while (pow >= 1) {
    if (pow % 2) {
      res = (res * num) % mod;
    }
    num = (num * num) % mod;
    pow = Math.floor(pow / 2);
  }
  return res;
};

const generateKeys = (): {
  p: number,
  g: number,
  a: number,
  b: number,
  A: number,
  B: number,
} => {
  const p = generateRandomPrime(1000000, 100000000);
  const g = getRandom(2, p - 1);

  const a = getRandom(2, p - 1);
  const A = powMod(g, a, p);

  const b = getRandom(2, p - 1);
  const B = powMod(g, b, p);

  return {
    p, g, a, b, A, B,
  };
};

const encryptDecrypt = (p: number, g: number, a: number, b: number, A: number, B: number) => {
  sharedSecretAlice.value = powMod(B, a, p);
  sharedSecretBob.value = powMod(A, b, p);

  encryptedMessage.value = message.value.split('').map((c) => String.fromCharCode(c.charCodeAt(0) + Math.floor(sharedSecretAlice.value / 10000))).join('');
  decryptedMessage.value = encryptedMessage.value.split('').map((c) => String.fromCharCode(c.charCodeAt(0) - Math.floor(sharedSecretBob.value / 10000))).join('');
};

// eslint-disable-next-line no-promise-executor-return
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const sendMessage = async () => {
  isLoading.value = true;
  await sleep(1000);
  keys.value = generateKeys();

  encryptDecrypt(keys.value.p, keys.value.g, keys.value.a, keys.value.b, keys.value.A, keys.value.B);
  isLoading.value = false;
};
</script>

<style module lang="scss">
.image {
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 220px;
}
</style>
