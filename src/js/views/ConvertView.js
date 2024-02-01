import { isValidAmount } from "../helpers";

class ConvertView {
  #form = document.querySelector(".convert");

  addHandlerCalculateCurrency(p_handler) {
    this.#form.addEventListener("submit", e => {
      e.preventDefault();

      const currency = {
        oldAmount: +e.target[0].value,
        from: e.target[1].value.toUpperCase(),
        to: e.target[2].value.toUpperCase(),
      };
      this.#form.reset();

      if (!this.#checkCurrency(currency)) return;

      p_handler(currency);
    });
  }

  #checkCurrency(p_curr) {
    if (!isValidAmount(p_curr.oldAmount)) {
      alert("Geben Sie einen Gültigen Betrag ein");
      return false;
    }

    if (p_curr.from === p_curr.to) {
      alert("Wählen Sie unterschiedliche Währungen aus");
      return false;
    }

    return true;
  }
}

export default new ConvertView();
