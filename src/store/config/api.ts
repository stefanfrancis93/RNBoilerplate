import store from "@Store/configureStore";

export const API_METHODS: {
  [key: string]: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
} = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "DELETE",
  DELETE: "DELETE",
};

type Payload = {
  baseUrl?: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  data?: any;
  headers?: { "content-type": string; Authorization: string };
  params?: {
    [key: string]: string;
  };
  TYPES: {
    requestType: string;
    successType: string;
    failureType: string;
  };
};

// TODO
// Move BASE_URL to config files
const BASE_URL = "https://jsonplaceholder.typicode.com/";

const fetchAsync = async ({
  baseUrl = BASE_URL,
  method,
  url,
  data,
  headers,
  params,
  TYPES,
}: Payload) => {
  // creating api URL with appending parameters
  const API_URL = new URL(`${baseUrl}${url}`);
  API_URL.search = String(new URLSearchParams(params));
  const { dispatch } = store();

  try {
    // Dispatching initial action
    if (TYPES.requestType) {
      dispatch({ type: TYPES.requestType });
    }

    const response = await fetch(String(API_URL), {
      method,
      body: JSON.stringify(data),
      headers,
    });
    const responseJson = await response.json();

    // Dispatching success action
    if (TYPES.successType) {
      dispatch({ type: TYPES.successType, payload: responseJson });
    }
    return responseJson;
  } catch (error) {
    // Dispatching failure action
    dispatch({ type: TYPES.failureType, errMessage: error });
    console.log("Something went wrong while fetching data. Error: ", error);
  }
};

export default fetchAsync;
