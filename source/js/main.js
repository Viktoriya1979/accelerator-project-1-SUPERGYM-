import { sliderLooping, createFocusOnElement } from './slider-swiper.js';
import { setupVideo } from './play-video.js';
import { openTab } from './tabs.js';

setupVideo();
openTab();
sliderLooping.init();
createFocusOnElement();

// window.addEventListener('DOMContentLoaded', () => {
//   window.addEventListener('load', () => {
//     setupVideo();
//     openTab();
//     sliderLooping.init();
//     createFocusOnElement();
//   });
// });
