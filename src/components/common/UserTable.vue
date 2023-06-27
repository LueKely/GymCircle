<template>
  <v-data-table :headers="head" :items="item">
    <template v-slot:item.type="{ item }">
      <v-chip :color="getBackgroundColor(item.columns.type)">
        {{ item.columns.type }}
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
  { title: "Status", key: "protein" },
]);

const item = ref([
  {
    id: "Frozen Yogurt",
    name: 159,
    type: "Not Paid",
    carbs: 24,
    protein: 4.0,
  },
  {
    id: "Ice cream sandwich",
    name: 237,
    type: "Paid",
    carbs: 37,
    protein: 4.3,
  },
  {
    id: "Eclair",
    name: 262,
    type: "Paid",
    carbs: 23,
    protein: 6.0,
  },
  {
    id: "Cupcake",
    name: 305,
    type: "Paid",
    carbs: 67,
    protein: 4.3,
  },
  {
    id: "Gingerbread",
    name: 356,
    type: "Not Paid",
    carbs: 49,
    protein: 3.9,
  },
  {
    id: "Jelly bean",
    name: 375,
    type: "Not Paid",
    carbs: 94,
    protein: 0.0,
  },
  {
    id: "Lollipop",
    name: 392,
    type: "Not Paid",
    carbs: 98,
    protein: 0,
  },
  {
    id: "Honeycomb",
    name: 408,
    type: "Not Paid",
    carbs: 87,
    protein: 6.5,
  },
  {
    id: "Donut",
    name: 452,
    type: "Not Paid",
    carbs: 51,
    protein: 4.9,
  },
  {
    id: "KitKat",
    name: 518,
    type: "Not Paid",
    carbs: 65,
    protein: 7,
  },
  {
    id: "Frozen Yogurt",
    name: 159,
    type: "Not Paid",
    carbs: 24,
    protein: 4.0,
  },
  {
    id: "Ice cream sandwich",
    name: 237,
    type: "Not Paid",
    carbs: 37,
    protein: 4.3,
  },
  {
    id: "Eclair",
    name: 262,
    type: "Paid",
    carbs: 23,
    protein: 6.0,
  },
  {
    id: "Cupcake",
    name: 305,
    type: "Paid",
    carbs: 67,
    protein: 4.3,
  },
]);
</script>
