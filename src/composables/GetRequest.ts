import { ref, computed, toRaw } from "vue";
import axios from "axios";

export function useGetData(url: string, token: string) {
  const rawData = ref<any | null>(null);
  const error = ref<string>("");

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.get(url, config);

      rawData.value = response.data;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  const data = computed(() => toRaw(rawData.value));

  return { data, error, fetchData };
}
