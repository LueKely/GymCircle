import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

interface ResponseData {
  message: string;
}

export function usePostData<T>(url: string, token: string) {
  const data = ref<ResponseData | null>(null);
  const error = ref<string>("");

  const postData = async (requestBody: T) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse<ResponseData> =
        await axios.post<ResponseData>(url, requestBody, config);

      data.value = response.data;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, postData };
}
