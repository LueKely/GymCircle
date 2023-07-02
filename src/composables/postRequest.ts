import { ref } from "vue";
import axios from "axios";

export function postData(url: string, body: object, head: object) {
  const data = ref<any>(null); // Change 'any' to the expected data type
  const error = ref<string>("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        url,
        { ...body },
        { headers: { ...head } }
      );
      data.value = response.data;
    } catch (err: any) {
      error.value = err;
    }
  };

  return { data, error, fetchData };
}
