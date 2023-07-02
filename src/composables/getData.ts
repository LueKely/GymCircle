import { ref } from "vue";
import axios from "axios";

export function useDataFetcher(url: string, body: object) {
  const data = ref<any>(null); // Change 'any' to the expected data type
  const error = ref<string>("");

  const fetchData = async () => {
    try {
      const response = await axios.get(url, { ...body });
      data.value = response.data;
    } catch (err: any) {
      error.value = err;
    }
  };

  return { data, error, fetchData };
}
