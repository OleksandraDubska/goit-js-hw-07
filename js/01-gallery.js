import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryCards = galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
        </div>`
        ).join('');

galleryRef.innerHTML = galleryCards;
galleryRef.addEventListener('click', onModalOpen);

function onModalOpen(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }

    const modal = basicLightbox.create(`
        <div class="modal">
            <img src="${event.target.dataset.source}">
        </div>
         `,
        {
            onShow: (modal) => {
                document.addEventListener('keydown', onModalClose);
            },
            onClose: (modal) => {
                window.removeEventListener('click', () => modal.close());
                document.removeEventListener('keydown', onModalClose);
            },
        },
    );
    modal.show();

    function onModalClose(event) {
        if (event.code !== "Escape") {
            return;
        }
        
        modal.close();
    }  
}
    
