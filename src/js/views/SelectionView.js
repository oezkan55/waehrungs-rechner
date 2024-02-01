class SelectionView {
  #selectBoxes = document.querySelectorAll(".convert__select-box");

  addHandlerUpdateSelection(p_handler) {
    this.#selectBoxes.forEach(p_el =>
      p_el.addEventListener("change", e => {
        const selected = this.#getSelection(e.target);
        p_handler(selected);
      })
    );
  }

  #getSelection(p_target) {
    const optionFrom = p_target.querySelector("[selected]");
    const currencyUnit = p_target.value;
    const optionTo = p_target.querySelector(`[value="${currencyUnit}"]`);
    const currencySymbol = p_target.previousElementSibling.firstElementChild;

    return {
      optionFrom,
      currencyUnit,
      optionTo,
      currencySymbol,
    };
  }
}

export default new SelectionView();
