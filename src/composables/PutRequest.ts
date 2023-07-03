import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

interface ResponseData {
  message: string;
}

export function usePutData<T>(url: string, token: string) {
  const data = ref<ResponseData | null>(null);
  const error = ref<string>("");

  const putData = async (requestBody: T) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse<ResponseData> =
        await axios.put<ResponseData>(url, requestBody, config);

      data.value = response.data;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, putData };
}
