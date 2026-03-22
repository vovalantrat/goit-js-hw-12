import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox;

export function createGallery(images) {
  const markup = images.map(img => `
    <li class="li-elem">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" />
      </a>
      <div class="status">
        <p class="status-item">Likes <span class="status-number">${img.likes}</span></p>
        <p class="status-item">Views <span class="status-number">${img.views}</span></p>
        <p class="status-item">Comments <span class="status-number">${img.comments}</span></p>
        <p class="status-item">Downloads <span class="status-number">${img.downloads}</span></p>
      </div>
    </li>
  `).join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox(".gallery a", {
      captions: true,
      captionsData: "alt",
      captionDelay: 250
    });
  }
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("visible");
}

export function hideLoader() {
  loader.classList.remove("visible");
}