import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

interface ResponseData {
  message: string;
}
// add url and string
export function useGetData(url: string, token: string) {
  const data = ref<ResponseData | null>(null);
  const error = ref<string>("");

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse<ResponseData> =
        await axios.get<ResponseData>(url, config);

      data.value = response.data;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, fetchData };
}
