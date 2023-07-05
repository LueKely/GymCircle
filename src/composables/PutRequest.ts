import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

export function usePutData<T>(url: string, token: string) {
  const data = ref<string>("");
  const error = ref<string>("");
  const status = ref<number>();

  const putData = async (requestBody: T) => {
    try {
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };

      const response: AxiosResponse<string> = await axios.put<string>(
        url,
        requestBody,
        config
      );

      data.value = response.data;
      status.value = response.status;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, status, putData };
}
