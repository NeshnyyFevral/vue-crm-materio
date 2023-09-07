<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard title="Basic menu">
      <div>
        <VButton
          :variant="ButtonVariant.OUTLINED"
          max-width
          @click="hasBasicOpened = !hasBasicOpened"
        >
          Open menu
        </VButton>
        <VMenu v-model="hasBasicOpened">
          <VMenuItem
            name="Menu"
            @click-elem="clickHandlerBasic"
          />
          <VMenuItem
            name="Account info"
            @click-elem="clickHandlerBasic"
          />
          <VMenuItem
            name="Logout"
            @click-elem="clickHandlerBasic"
          />
        </VMenu>
      </div>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Custom menu"
      desc="A menu where you can add a named slot (prefix) with
       a picture or icon, you can also add any other small text or even style it somehow"
    >
      <div>
        <VButton
          :variant="ButtonVariant.OUTLINED"
          max-width
          @click="hasCustomOpened = !hasCustomOpened"
        >
          Open custom menu
        </VButton>
        <VMenu v-model="hasCustomOpened">
          <VMenuItem
            name="Send e-mail"
            @click-elem="clickHandlerCustom"
          >
            <template #prefix>
              <SendEmailIcon />
            </template>
          </VMenuItem>
          <VMenuItem
            name="Drafts"
            @click-elem="clickHandlerCustom"
          >
            <template #prefix>
              <DraftsIcon />
            </template>
          </VMenuItem>
          <VMenuItem
            name="Inbox"
            @click-elem="clickHandlerCustom"
          >
            <template #prefix>
              <InboxIcon />
            </template>
          </VMenuItem>
        </VMenu>
      </div>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Basic menu"
      desc="lorem ipsum"
    >
      <div>
        <VButton
          :variant="ButtonVariant.OUTLINED"
          max-width
          @click="hasCustomSplitter = !hasCustomSplitter"
        >
          Open menu with splitter
        </VButton>
        <VMenu v-model="hasCustomSplitter">
          <VMenuItem
            name="Menu"
            @click-elem="clickHandlerSplitter"
          />
          <VMenuItem
            name="Account info"
            @click-elem="clickHandlerSplitter"
          />
          <VMenuItem
            name="Logout"
            @click-elem="clickHandlerSplitter"
          />
          <VMenuSlitter />
          <VMenuItem
            name="Menu №2"
            @click-elem="clickHandlerSplitter"
          />
          <VMenuItem
            name="Account info №2"
            @click-elem="clickHandlerSplitter"
          />
          <VMenuItem
            name="Logout №2"
            @click-elem="clickHandlerSplitter"
          />
        </VMenu>
      </div>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import DraftsIcon from '@/assets/icons/menu/drafts.svg';
import InboxIcon from '@/assets/icons/menu/inbox.svg';
import SendEmailIcon from '@/assets/icons/menu/send-email.svg';
import VButton from '@/components/basic/VButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VMenuSlitter from '@/components/basic/VMenuSlitter.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { ButtonVariant } from '@/model/components/basic/VButton';

const hasBasicOpened = ref<boolean>(false);
const hasCustomOpened = ref<boolean>(false);
const hasCustomSplitter = ref<boolean>(false);

const clickHandlerBasic = (name :string) => {
  console.log(name);
  hasBasicOpened.value = false;
};

const clickHandlerCustom = (name :string) => {
  console.log(name);
  hasCustomOpened.value = false;
};

const clickHandlerSplitter = (name :string) => {
  console.log(name);
  hasCustomSplitter.value = false;
};
</script>

<style module lang="scss"></style>
