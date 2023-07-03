import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

export function usePostData<T>(url: string, token: string) {
  const data = ref<string | null>(null);
  const error = ref<string>("");
  const status = ref<number>();
  const postData = async (requestBody: T) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse<string> = await axios.post<string>(
        url,
        requestBody,
        config
      );
      // console.log(response);

      data.value = response.data;
      status.value = response.status;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { data, error, status, postData };
}
