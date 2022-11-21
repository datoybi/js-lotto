import App from './components/App.js';
import { INITIAL_STATE } from './utils/constant.js';

const $app = document.querySelector('#app');

new App($app, INITIAL_STATE || undefined);

// const $showResultButton = document.querySelector('.open-result-modal-button');
// const $modalClose = document.querySelector('.modal-close');
// const $modal = document.querySelector('.modal');
// const $lottoNumbersToggleButton = document.querySelector(
//   '.lotto-numbers-toggle-button',
// );

// const onModalShow = () => {
//   $modal.classList.add('open');
// };

// const onModalClose = () => {
//   $modal.classList.remove('open');
// };

// $showResultButton.addEventListener('click', onModalShow);
// $modalClose.addEventListener('click', onModalClose);
