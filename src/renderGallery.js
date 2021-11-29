export default function renderGallery(galleryItems) {
    return galleryItems
      .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
                   <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                   <div class="info">
                     <p class="info-item">
                       <b>Likes</b>
                       <span>${likes}</span>
                     </p>
                     <p class="info-item">
                       <b>Views</b>
                       <span>${views}</span>
                     </p>
                     <p class="info-item">
                       <b>Comments</b>
                       <span>${comments}</span>
                     </p>
                     <p class="info-item">
                       <b>Downloads</b>
                       <span>${downloads}</span>
                     </p>
                   </div>
                 </div>`;
      })
      .join('');
  }