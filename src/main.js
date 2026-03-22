import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentPage = 1;
let currentQuery = "";
let totalHits = 0;

form.addEventListener("submit", async event => {
  event.preventDefault();

  const query = event.target.elements["search-text"].value.trim();
  if (!query) return;

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
        maxWidth: 432,
        class: "custom-toast"
      });
      return;
    }

    createGallery(data.hits);
    showLoadMoreButton();

  } catch (error) {
    iziToast.error({
      message: "Something went wrong",
    });

  } finally {
    hideLoader();
  }

});

loadMoreBtn.addEventListener("click", async () => {
  currentPage += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    const card = document.querySelector(".li-elem");
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });

  } catch {
    iziToast.error({ message: "Error" });
  } finally {
    hideLoader();
  }
});