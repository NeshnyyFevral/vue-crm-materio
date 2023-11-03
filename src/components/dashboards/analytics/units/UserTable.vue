<template>
  <VTable
    v-slot="{ row }"
    :data="props.data"
    max-width
    small-paddings
  >
    <VTableColumn
      name="name"
      label="NAME"
      :row="row"
    >
      <VFlex :align="FlexAlign.CENTER">
        <VOffset :mr="10">
          <VAvatar
            :letter="row.avatar ? 'few' : row.name"
            :size="AvatarSize.SMALL"
            light
          >
            <img
              v-if="row.avatar"
              :src="getImageUrl(`assets/avatars/${row.avatar}`)"
              :alt="row.avatar"
            >
          </VAvatar>
        </VOffset>

        <VOffset>
          <VOffset>
            <VText
              variant="body2"
              font-weight="600"
            >
              {{ row.name }}
            </VText>
          </VOffset>

          <VOffset>
            <VText
              variant="caption"
              :color="GlobalColorMap['400'].default"
            >
              {{ row.tag }}
            </VText>
          </VOffset>
        </VOffset>
      </VFlex>
    </VTableColumn>
    <VTableColumn
      name="email"
      label="EMAIL"
      :row="row"
    >
      <VText
        variant="body2"
        :color="GlobalColorMap['400'].default"
      >
        {{ row.email }}
      </VText>
    </VTableColumn>
    <VTableColumn
      name="role"
      label="ROLE"
      :row="row"
    >
      <VFlex :align="FlexAlign.CENTER">
        <VOffset :mr="10">
          <VAvatar
            :color="row.roleColor"
            :size="AvatarSize.SMALL"
            light
          >
            <component
              :is="row.roleIcon"
              :class="$style.roleIcon"
            />
          </VAvatar>
        </VOffset>

        <VOffset>
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            {{ row.role }}
          </VText>
        </VOffset>
      </VFlex>
    </VTableColumn>
    <VTableColumn
      name="status"
      label="STATUS"
      :row="row"
    >
      <VChip
        :variant="ChipVariant.LIGHT"
        :color="row.statusColor"
      >
        {{ row.status }}
      </VChip>
    </VTableColumn>
  </VTable>
</template>
<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTable from '@/components/basic/VTable.vue';
import VTableColumn from '@/components/basic/VTableColumn.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap } from '@/model/Colors';
import { AvatarSize } from '@/model/components/basic/VAvatar';
import { ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign } from '@/model/components/basic/VFlex';
import type { Users } from '@/model/dashboards/Users';
import { getImageUrl } from '@/model/tools/UrlTools';

interface PropsType {
  data: Users[];
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.roleIcon {
  width: 16px;
  height: 16px;
}
</style>
