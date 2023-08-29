<template>
  <div :class="$style.root">
    <VPreviewComponentPage>
      <VPreviewComponentCard
        desc="Use <VTable> and <VTableColumn> to build a table,
         add «name» and «label» props to specify a particular field in an array of objects."
        title="Table default"
      >
        <VTable
          v-slot="{ row }"
          :data="tableData"
        >
          <VTableColumn
            name="name"
            label="DESSERT (100G SERVING)"
            :row="row"
          />
          <VTableColumn
            name="calories"
            label="CALORIES"
            :row="row"
          />
          <VTableColumn
            name="fat"
            label="FAT"
            :row="row"
          />
          <VTableColumn
            name="carbs"
            label="CARBS"
            :row="row"
          />
          <VTableColumn
            name="protein"
            label="PROTEIN"
            :row="row"
          />
        </VTable>
      </VPreviewComponentCard>

      <VPreviewComponentCard
        desc="use boolean prop «withKey» to give the first column a sort of guiding position,
         which is more often a generic name for the entire row"
        title="Table with guideway key"
      >
        <VTable
          v-slot="{ row }"
          :data="tableData"
          with-key
        >
          <VTableColumn
            name="name"
            label="DESSERT (100G SERVING)"
            :row="row"
          />
          <VTableColumn
            name="calories"
            label="CALORIES"
            :row="row"
          />
          <VTableColumn
            name="fat"
            label="FAT"
            :row="row"
          />
          <VTableColumn
            name="carbs"
            label="CARBS"
            :row="row"
          />
          <VTableColumn
            name="protein"
            label="PROTEIN"
            :row="row"
          />
        </VTable>
      </VPreviewComponentCard>
    </VPreviewComponentPage>

    <VPreviewComponentCard
      desc="use boolean prop «maxWidth» to set the table to the maximum allowable size."
      title="Max width table"
    >
      <VTable
        v-slot="{ row }"
        :data="tableData"
        with-key
        max-width
      >
        <VTableColumn
          name="name"
          label="DESSERT (100G SERVING)"
          :row="row"
        />
        <VTableColumn
          name="calories"
          label="CALORIES"
          :row="row"
        />
        <VTableColumn
          name="fat"
          label="FAT"
          :row="row"
        />
        <VTableColumn
          name="carbs"
          label="CARBS"
          :row="row"
        />
        <VTableColumn
          name="protein"
          label="PROTEIN"
          :row="row"
        />
      </VTable>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      desc="use boolean prop «smallPaddings» to reduce paddings."
      title="Table with small paddings"
    >
      <VTable
        v-slot="{ row }"
        :data="tableData"
        with-key
        max-width
        small-paddings
      >
        <VTableColumn
          name="name"
          label="DESSERT (100G SERVING)"
          :row="row"
        />
        <VTableColumn
          name="calories"
          label="CALORIES"
          :row="row"
        />
        <VTableColumn
          name="fat"
          label="FAT"
          :row="row"
        />
        <VTableColumn
          name="carbs"
          label="CARBS"
          :row="row"
        />
        <VTableColumn
          name="protein"
          label="PROTEIN"
          :row="row"
        />
      </VTable>
    </VPreviewComponentCard>
  </div>
</template>
<script setup lang="ts">
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VTable from '@/components/basic/VTable.vue';
import VTableColumn from '@/components/basic/VTableColumn.vue';

const tableData = [
  {
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  }, {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
  }, {
    name: 'Eclair',
    calories: 262,
    fat: 16,
    carbs: 24,
    protein: 6,
  }, {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  }, {
    name: 'Gingerbread',
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
  },
];
</script>

<style module lang="scss">
.root {
  display: grid;
  grid-gap: 30px;
}
</style>
