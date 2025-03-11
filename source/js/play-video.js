const videoElement = document.querySelector('.video');
const linkElement = videoElement.querySelector('.video__link');
const imageElement = videoElement.querySelector('.video__image-wrapper img');
const buttonElement = videoElement.querySelector('.button-play');

// generate video url
const generateUrl = function (id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${id}${query}`;
};

// creating iframe
const createIframe = function (id) {
  const iframeElement = document.createElement('iframe');

  iframeElement.setAttribute('allowfullscreen', '');
  iframeElement.setAttribute('allow', 'autoplay; encrypted-media');
  iframeElement.setAttribute('src', generateUrl(id));
  iframeElement.classList.add('video__image-wrapper');

  return iframeElement;
};

const onPlayVideoButtonClick = () => {
  const videoHref = videoElement.getAttribute('data-video');
  const deletedLength = 'https://youtu.be/'.length;
  const videoId = videoHref.substring(deletedLength, videoHref.length);
  const iframe = createIframe(videoId);
  linkElement.remove();
  imageElement.remove();
  buttonElement.remove();
  videoElement.appendChild(iframe);
};

const setupVideo = () => {
  buttonElement.addEventListener('click', onPlayVideoButtonClick);
  linkElement.removeAttribute('href');
};

export { setupVideo };
