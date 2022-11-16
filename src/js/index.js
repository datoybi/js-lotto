/* eslint-disable no-new */
import App from './components/App.js';

const $app = document.querySelector('#app');
const initialState = { ticket: 0 };

new App($app, initialState || undefined);

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
