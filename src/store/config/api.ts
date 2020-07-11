import store from "@Store/configureStore";
import { API_METHODS } from "@Utils/constants";

type Payload = {
  method:
    | typeof API_METHODS.GET
    | typeof API_METHODS.POST
    | typeof API_METHODS.PUT
    | typeof API_METHODS.PATCH
    | typeof API_METHODS.DELETE;
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

// Replace your base Api's base URL here.
const BASE_URL = "https://jsonplaceholder.typicode.com/";

const apiCall: any = async (payload: Payload) => {
  const { method, url, data, headers, params, TYPES } = payload;
  // creating api URL with appending parameters
  const API_URL = new URL(BASE_URL + url);
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

export default apiCall;
