import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContaiter = document.querySelector(".gallery");

function createdMarkup() {
  const galleryMarkup = galleryItems
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src= '${item.preview}'
            data-source= '${item.original}'
            alt='${item.description}'
          />
        </a>
      </div>`
    )
    .join("");

  galleryContaiter.insertAdjacentHTML("beforeend", galleryMarkup);
}

createdMarkup();

galleryContaiter.addEventListener("click", showLargeImgOnClick);
;
function showLargeImgOnClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return  
  }
   const modal = basicLightbox
  .create(
    `
    <img width="1400" height="1400" src="${event.target.dataset.source}">
`
  )
  modal.show();

    
    document.addEventListener("keydown", onKeyPress);


    function onKeyPress(event) {
      
        if (event.code !== "Escape") {
          return;
        } else {
            modal.close();
            galleryContaiter.removeEventListener("keydown", showLargeImgOnClick);   
        
        }
    
      }

}


// const onGalleryImgClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const carousel = basicLightbox.create(
//     `      <img src="${event.target.dataset.source}" width="800" height="600">  `,
//     {
//       onShow: (carousel) => {
//         document.addEventListener("keydown", onEscapeKeyDown);
//       },
//       onClose: (carousel) => {
//         document.removeEventListener("keydown", onEscapeKeyDown);
//       },
//     }
//   );
//   carousel.show();
//   function onEscapeKeyDown(event) {
//     if (event.code !== "Escape") {
//       return;
//     }
//     carousel.close();
//   }
// };
