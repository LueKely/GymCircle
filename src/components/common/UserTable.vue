<template>
  <v-data-table :headers="head" :items="item">
    <template v-slot:item.status="{ item }">
      <v-chip :color="getBackgroundColor(item.columns.status)">
        {{ item.columns.status }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";

type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>>
  ? UnwrapReadonlyArrayType<I>
  : A;
type DT = InstanceType<typeof VDataTable>;
type ReadonlyDataTableHeader = UnwrapReadonlyArrayType<DT["headers"]>;

const getBackgroundColor = (prop: string): string => {
  return prop === "Not Paid" ? "red" : "green";
};

const head = ref<Array<ReadonlyDataTableHeader>>([
  {
    title: "ID",
    align: "start",
    key: "id",
    sortable: false,
  },
  { title: "Name", key: "name" },
  { title: "Type", key: "type" },
  { title: "Date", key: "carbs" },
  { title: "Status", key: "status" },
]);

const item = ref([
  {
    id: "Frozen Yogurt",
    name: 159,
    type: "Not Paid",
    carbs: 24,
    status: "Paid",
  },

  {
    id: "Cupcake",
    name: 305,
    type: "Paid",
    carbs: 67,
    status: "Not Paid",
  },
]);
</script>
