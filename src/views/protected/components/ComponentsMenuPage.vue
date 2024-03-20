<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard title="Basic menu">
      <div>
        <VMenu v-model="hasBasicOpened">
          <template #body>
            <VButton
              :variant="ButtonVariant.OUTLINED"
              max-width
            >
              Open menu
            </VButton>
          </template>

          <VMenuItem
            name="Menu"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Account info"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Logout"
            @click-elem="clickHandler"
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
        <VMenu v-model="hasCustomOpened">
          <template #body>
            <VButton
              :variant="ButtonVariant.OUTLINED"
              max-width
            >
              Open custom menu
            </VButton>
          </template>
          <VMenuItem
            name="Send e-mail"
            @click-elem="clickHandler"
          >
            <SendEmailIcon />
          </VMenuItem>
          <VMenuItem
            name="Drafts"
            @click-elem="clickHandler"
          >
            <DraftsIcon />
          </VMenuItem>
          <VMenuItem
            name="Inbox"
            @click-elem="clickHandler"
          >
            <InboxIcon />
          </VMenuItem>
        </VMenu>
      </div>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Basic menu"
      desc="You can also use VSplitter in VMenu to split in logical blocks."
    >
      <div>
        <VMenu v-model="hasCustomSplitterOpened">
          <template #body>
            <VButton
              :variant="ButtonVariant.OUTLINED"
              max-width
            >
              Open menu with splitter
            </VButton>
          </template>
          <VMenuItem
            name="Menu"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Account info"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Logout"
            @click-elem="clickHandler"
          />
          <VSplitter />
          <VMenuItem
            name="Menu №2"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Account info №2"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Logout №2"
            @click-elem="clickHandler"
          />
        </VMenu>
      </div>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Menu positions"
      desc="Use position={'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'} prop with <VMenu> component for different positioned menu."
    >
      <div
        v-for="pos in Object.values(MenuPosition)"
        :key="pos"
      >
        <VMenu
          v-model="hasPositionOpened[pos]"
          :position="pos"
        >
          <template #body>
            <VButton
              :variant="ButtonVariant.OUTLINED"
              max-width
            >
              {{ pos }}
            </VButton>
          </template>
          <VMenuItem
            name="Menu"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Account info"
            @click-elem="clickHandler"
          />
          <VMenuItem
            name="Logout"
            @click-elem="clickHandler"
          />
        </VMenu>
      </div>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import DraftsIcon from '@public/assets/icons/menu/drafts.svg';
import InboxIcon from '@public/assets/icons/menu/inbox.svg';
import SendEmailIcon from '@public/assets/icons/menu/send-email.svg';
import { ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import { ButtonVariant } from '@/model/components/basic/VButton';
import { MenuPosition } from '@/model/components/basic/VMenu';

const hasBasicOpened = ref<boolean>(false);
const hasCustomOpened = ref<boolean>(false);
const hasCustomSplitterOpened = ref<boolean>(false);

const hasPositionOpened = ref({
  [MenuPosition.TOP_LEFT]: false,
  [MenuPosition.TOP_RIGHT]: false,
  [MenuPosition.BOTTOM_RIGHT]: false,
  [MenuPosition.BOTTOM_LEFT]: false,
});

const clickHandler = (name :string) => {
  console.log(name);
};
</script>

<style module lang="scss"></style>
