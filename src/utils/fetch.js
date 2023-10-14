const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "wYtOcFF1IQ8kICTRUhmf0VGXQ9dwe6VPCiHCi7zR";

export default async (urlParams) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== "undefined" && urlParams.length > 0
          ? urlParams
          : ""
      }`
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
