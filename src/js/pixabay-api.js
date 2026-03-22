import axios from "axios";

const API_KEY = "55035088-7302bd2f5e79e745d79615534";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}