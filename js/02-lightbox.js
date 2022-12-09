import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const gallery = document.querySelector('.gallery');


function creaatMarkup() {
  const imgMarkup  = galleryItems.map(item =>  
        
      `<img src="${item.preview}"alt="${item.description}" class="gallery__image">`).join("")
    console.log(imgMarkup )

    gallery.insertAdjacentHTML("beforeend", imgMarkup )
}
creaatMarkup()
gallery .addEventListener('click',onClick)

function onClick() {
    const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
    `)  
    instance.show()
 }


