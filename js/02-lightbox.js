import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryCards = galleryItems.map(({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description} />
        </a>`
        ).join('');

galleryRef.innerHTML = galleryCards;
galleryRef.addEventListener('click', onModalOpen);

let modal = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

function onModalOpen(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return
    }
}
