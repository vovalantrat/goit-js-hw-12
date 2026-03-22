import{a as m,S as p,i as c}from"./assets/vendor-N9ACAAXH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d="55035088-7302bd2f5e79e745d79615534",f="https://pixabay.com/api/";function h(a){return m.get(f,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let n;function y(a){const r=a.map(t=>`
    <li class="li-elem">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="status">
        <p class="status-item">Likes <span class="status-number">${t.likes}</span></p>
        <p class="status-item">Views <span class="status-number">${t.views}</span></p>
        <p class="status-item">Comments <span class="status-number">${t.comments}</span></p>
        <p class="status-item">Downloads <span class="status-number">${t.downloads}</span></p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),n?n.refresh():n=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function g(){l.innerHTML=""}function L(){u.classList.add("visible")}function b(){u.classList.remove("visible")}const v=document.querySelector(".form");v.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();r&&(g(),L(),h(r).then(t=>{if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,class:"custom-toast"});return}y(t.hits)}).catch(()=>{c.error({message:"Something went wrong"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
