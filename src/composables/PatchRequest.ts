import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

interface ResponseData {
  message: string;
}

export function usePatchData<T>(url: string, token: string) {
  const data = ref<ResponseData | null>(null);
  const error = ref<string>("");
  const status = ref<number>();
  const patchData = async (requestBody: T) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response: AxiosResponse<ResponseData> =
        await axios.patch<ResponseData>(url, requestBody, config);
      status.value = response.status;
      data.value = response.data;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, status, patchData };
}
