import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const  galleryContaiter= document.querySelector(".gallery");

function createdMarkup (){
    const galleryMarkup = galleryItems
    .map(
      (item) =>
     
        `<a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src= '${item.preview}'
            data-source= '${item.original}'
            alt='${item.description}'
          />
        </a>
      `
    )
    .join("");

    galleryContaiter.insertAdjacentHTML("beforeend", galleryMarkup);



}

createdMarkup ();

galleryContaiter.addEventListener('click',onGalleryItemClick)

function onGalleryItemClick(event){
    event.preventDefault();
    console.dir(event.target)
    console.dir(event.target.alt)
    var modalBox = new SimpleLightbox('.gallery a', 
    {overlayOpacity:0.8,
      captionType	:'att',
      captionsData: 'alt',




    });
}

