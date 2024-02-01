import icons from "url:../img/icons/sprite.svg";

class RenderView {
  #contentMessage = document.querySelector(".footer__message");

  renderResult(p_currency) {
    this.#contentMessage.textContent = `${p_currency.oldAmount} ${p_currency.from} ===> ${p_currency.newAmount} ${p_currency.to}`;
  }

  updateSelection(p_sel) {
    p_sel.optionFrom.removeAttribute("selected");
    p_sel.optionTo.setAttribute("selected", "");

    p_sel.currencySymbol.setAttribute(
      "href",
      `${icons}#icon-${p_sel.currencyUnit}`
    );
  }
}

export default new RenderView();
