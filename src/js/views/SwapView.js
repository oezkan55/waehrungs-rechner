class SwapView {
  #btn = document.querySelector(".btn--swap");
  #selectBoxFrom = document.querySelector(".convert__select-box--1");
  #selectBoxTo = document.querySelector(".convert__select-box--2");

  constructor() {
    this.#addHandlerSwapCurrency();
  }

  #addHandlerSwapCurrency() {
    this.#btn.addEventListener("click", this.#swapContent.bind(this));
  }

  #swapContent() {
    const contentForFrom = this.#selectBoxTo.innerHTML;
    const contentForTo = this.#selectBoxFrom.innerHTML;

    this.#selectBoxFrom.innerHTML = contentForFrom;
    this.#selectBoxTo.innerHTML = contentForTo;
  }
}

export default new SwapView();
