import { createPhotos } from './data.js';

const picturesContainer = document.querySelector('.pictures');

const getThumbnailTemplate = ({url, likes, comments}) => `<a href="#" class="picture js-picture">
    <img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
    <p class="picture__info">
      <span class="picture__comments">${comments.length}</span>
      <span class="picture__likes">${likes}</span>
    </p>
  </a>
`;

picturesContainer.insertAdjacentHTML('beforeend', createPhotos().map((photo) => getThumbnailTemplate(photo)).join(''));

export { getThumbnailTemplate };
