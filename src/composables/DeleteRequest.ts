import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

interface ResponseData {
  message: string;
}
// add url and string
export function useDeleteData(url: string, token: string) {
  const data = ref<ResponseData | null>(null);
  const error = ref<string>("");

  const deleteData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse<ResponseData> =
        await axios.delete<ResponseData>(url, config);

      data.value = response.data;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, deleteData };
}
