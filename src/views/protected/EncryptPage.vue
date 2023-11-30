<template>
  <VCard :class="$style.root">
    <VOffset :mb="20">
      <VTitle :variant="'heading5'">
        Diffie-Hellman encryption
      </VTitle>
    </VOffset>

    <VOffset :class="$style.sidebar">
      <VText
        v-for="item in programMessages"
        :key="item"
        :class="$style.sbText"
        :align="VTextTextAlign.END"
        variant="caption"
      >
        {{ item }}
      </VText>
    </VOffset>

    <VOffset :mb="20">
      <VFlex :align="FlexAlign.CENTER">
        <VButton
          :size="ButtonSize.SMALL"
          @click="generateBobKeys"
        >
          Generate keys
        </VButton>
        -
        <VButton
          :size="ButtonSize.SMALL"
          :disabled="!keys.bob_p"
          @click="exchangeKeys"
        >
          Exchange keys
        </VButton>
        -
        <VButton
          :size="ButtonSize.SMALL"
          :disabled="!keys.alice_A"
          @click="createAliceKeys"
        >
          Create keys Alice
        </VButton>
        -
        <VButton
          :loading="isLoading"
          :size="ButtonSize.SMALL"
          :disabled="!message.length && !keys.bob_B"
          @click="encrypt"
        >
          Encrypt
        </VButton>
        -
        <VButton
          :loading="isLoading"
          :size="ButtonSize.SMALL"
          :disabled="!encryptedMessage.length && !keys.alice_A"
          @click="decrypt"
        >
          Decrypt
        </VButton>
      </VFlex>
    </VOffset>

    <VFlex
      :align="FlexAlign.START"
      :justify-content="FlexJustify.SPACE_AROUND"
    >
      <VOffset width="40%">
        <VOffset :mb="30">
          <img
            :src="getPathImg('images/crm/boy.png')"
            alt="girl"
            :class="$style.image"
          >
        </VOffset>

        <VOffset>
          <VTextField
            v-model="message"
            label="Message"
          />

          <VOffset :mt="20">
            <VTextField
              v-if="keys.bob_p"
              v-model="keys.bob_p"
              label="p:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.bob_g"
              v-model="keys.bob_g"
              label="g:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.a"
              v-model="keys.a "
              label="a:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.bob_A"
              v-model="keys.bob_A"
              label="A:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.bob_B"
              v-model="keys.bob_B"
              label="B:"
            />
          </VOffset>
        </VOffset>
      </VOffset>

      <VOffset width="40%">
        <VOffset :mb="30">
          <img
            :src="getPathImg('images/crm/girl.png')"
            alt="boy"
            :class="$style.image"
          >
        </VOffset>

        <VOffset>
          <VOffset>
            <VTextField
              v-model="encryptedMessage"
              disabled
              label="Encrypted message"
            />
          </VOffset>

          <VOffset :mt="20">
            <VTextField
              v-if="keys.alice_p"
              v-model="keys.alice_p"
              label="p:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.alice_g"
              v-model="keys.alice_g"
              label="g:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.alice_A"
              v-model="keys.alice_A "
              label="A"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.b"
              v-model="keys.b"
              label="b:"
            />
          </VOffset>
          <VOffset :mt="10">
            <VTextField
              v-if="keys.alice_B"
              v-model="keys.alice_B"
              label="B:"
            />
          </VOffset>

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
import { ButtonSize } from '@/model/components/basic/VButton';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { VTextTextAlign } from '@/model/components/basic/VText';
import { getPathImg } from '@/model/tools/PathTools';
import { getRandom } from '@/model/tools/RandomTools';

interface HellmanKeys {
  bob_p: number;
  bob_g: number;
  alice_p: number;
  alice_g: number;
  a: number;
  b: number;
  bob_A: number;
  bob_B: number;
  alice_A: number;
  alice_B: number;
}

const programMessages = ref<string[]>([]);
const message = ref<string>('');
const encryptedMessage = ref<string>('');
const decryptedMessage = ref<string>('');
const sharedSecretAlice = ref<number>(0);
const sharedSecretBob = ref<number>(0);

const isLoading = ref<boolean>(false);
const keys = ref<HellmanKeys>({
  bob_p: 0,
  bob_g: 0,
  alice_p: 0,
  alice_g: 0,
  a: 0,
  b: 0,
  bob_A: 0,
  bob_B: 0,
  alice_A: 0,
  alice_B: 0,
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

const generateBobKeys = () => {
  keys.value.bob_p = generateRandomPrime(9999999, 99999999);
  keys.value.bob_g = getRandom(2, keys.value.bob_p - 1);
  keys.value.a = getRandom(2, keys.value.bob_p - 1);
  programMessages.value.push('Generate: a, p, g');
  keys.value.bob_A = powMod(keys.value.bob_g, keys.value.a, keys.value.bob_p);
  programMessages.value.push('Calculate: A');
};

const exchangeKeys = () => {
  keys.value.alice_p = keys.value.bob_p;
  keys.value.alice_g = keys.value.bob_g;
  keys.value.alice_A = keys.value.bob_A;
  programMessages.value.push('Bob ---> p, g, A ---> Alice');
};

const createAliceKeys = () => {
  keys.value.b = getRandom(2, keys.value.alice_p - 1);
  keys.value.alice_B = powMod(keys.value.alice_g, keys.value.b, keys.value.alice_p);
  programMessages.value.push('generate: b');
  programMessages.value.push('Calculate: B');
  keys.value.bob_B = keys.value.alice_B;
  programMessages.value.push('Bob <--- B <--- Alice');
};

const encrypt = () => {
  sharedSecretBob.value = powMod(keys.value.bob_B, keys.value.a, keys.value.bob_p);
  programMessages.value.push('Calculate: shared_key');
  encryptedMessage.value = message.value.split('').map((c) => String.fromCharCode(c.charCodeAt(0) + Math.floor(sharedSecretBob.value / 10000))).join('');
  programMessages.value.push('Encrypting...');
};

const decrypt = () => {
  sharedSecretAlice.value = powMod(keys.value.alice_A, keys.value.b, keys.value.alice_p);
  programMessages.value.push('Calculate: shared_key');
  decryptedMessage.value = encryptedMessage.value.split('').map((c) => String.fromCharCode(c.charCodeAt(0) - Math.floor(sharedSecretAlice.value / 10000))).join('');
  programMessages.value.push('Decrypting...');
};
</script>

<style module lang="scss">
.root {
  position: relative;
}

.sidebar {
  position: fixed;
  right: 20px;
  top: 70px;
}

.sbText {
  animation: add var(--transition-duration) var(--transition-timing-func);
}

.image {
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 220px;
}

@keyframes add {
  from {
    transform: translateX(200px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
