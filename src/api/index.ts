type Payload = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  headers?: { 'content-type': string; Authorization: string };
  params?: {
    [key: string]: string;
  };
};

// Replace your base Api's base URL here.
const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const apiCall: any = async (payload: Payload) => {
  const { method, url, data, headers, params } = payload;
  // creating api URL with appending parameters
  const API_URL = new URL(BASE_URL + url);
  API_URL.search = String(new URLSearchParams(params));

  try {
    const response = await fetch(String(API_URL), {
      method,
      body: JSON.stringify(data),
      headers,
    });
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.log('Something went wrong while fetching data. Error: ', error);
  }
};

export default apiCall;
