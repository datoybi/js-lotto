import Component from '../core/Component.js';

export default class WinningNumber extends Component {
  template() {
    const { ticketCount } = this.state;
    const $form = this.$target.querySelector(
      'form[data-cy="winning-number-form"]',
    );
    $form.innerHTML =
      ticketCount > 0
        ? `
    		<form class="mt-9" data-cy="winning-number-form">
            <label class="flex-auto d-inline-block mb-3"
              >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
            >
            <div class="d-flex">
              <div>
                <h4 class="mt-0 mb-3 text-center">당첨 번호</h4>
                <div>
                  <input
                    type="number"
                    class="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    class="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    class="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    class="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    class="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    class="winning-number mx-1 text-center"
                  />
                </div>
              </div>
              <div class="bonus-number-container flex-grow">
                <h4 class="mt-0 mb-3 text-center">보너스 번호</h4>
                <div class="d-flex justify-center">
                  <input type="number" class="bonus-number text-center" />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="open-result-modal-button mt-5 btn btn-cyan w-100"
            >
              결과 확인하기
            </button>
          </form>
    	`
        : '';
  }

  init() {
    this.templateHTML =
      '<form class="mt-9" data-cy="winning-number-form"></form>';
    this.$target.innerHTML = `${this.$target.innerHTML}${this.templateHTML}`;
  }

  render() {
    this.template();
  }
}
