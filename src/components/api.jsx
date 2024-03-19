import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchItems = async (seachQuery, page) => {
  const accessKey = "qtjjq751w9p3YJz69Iq2isXfNtxnbkYar5CNnOgOijs";
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: seachQuery,
        page: page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
    });
    return response.data.results;
  } catch (error) {
    toast.error("Try again later");
    throw error;
  }
};
