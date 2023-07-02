# essentials

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

### DOCUMENTATION

JUST REMEMBER THE DATA IS THE PAYLOAD

#### FOR GET REQ:

`import { onMounted } from "vue";
import { useGetData } from "@/composables/getData";

const { data, error, fetchData } = useGetData(
"http://localhost:3030/test",
"poopoopeepee"
);
onMounted(fetchData);`

#### FOR POST REQUEST:

`import { ref } from "vue";
import { usePostData } from "@/composables/postRequest";
import { onMounted } from "vue";

interface RequestBody {
hello: string;
// Define the structure of your request body
}

const url = "http://localhost:3030/test";
const token = "your_token_here";

const { data, postData } = usePostData<RequestBody>(url, token);

// the request body
const requestBody: RequestBody = {
hello: "hi",
};

onMounted(async () => {
await postData(requestBody);
await console.log(data.value);
});`
