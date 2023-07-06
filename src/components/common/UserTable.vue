<template>
  <v-data-table
    :headers="head"
    :items="item"
    :loading="loading"
    @update:options="loadItems"
    class="rounded-lg"
  >
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
import { useGetData } from "@/composables/GetRequest";
import Session from "@/composables/Session";
import { onMounted } from "vue";
type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>>
  ? UnwrapReadonlyArrayType<I>
  : A;
type DT = InstanceType<typeof VDataTable>;
type ReadonlyDataTableHeader = UnwrapReadonlyArrayType<DT["headers"]>;

const getBackgroundColor = (prop: string): string => {
  return prop === "not paid" ? "red" : "green";
};

const { data, fetchData } = useGetData(
  "http://localhost:3030/user/transaction",
  Session.getSessionKey("key")
);
const loading = ref(false);

const head = ref<Array<ReadonlyDataTableHeader>>([
  {
    title: "ID",
    align: "start",
    key: "id",
    sortable: false,
  },
  { title: "Name", key: "name" },
  { title: "Type", key: "type" },
  { title: "Price", key: "price" },
  { title: "Date", key: "date" },
  { title: "Status", key: "status" },
]);

const item = ref([]);

async function loadItems() {
  loading.value = await true;
  await fetchData();
  item.value = await data.value;
  loading.value = await false;
}

onMounted(async () => {});
</script>
