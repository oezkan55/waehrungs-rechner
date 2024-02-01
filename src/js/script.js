import RenderView from "./RenderView";
import { calculateNewCurrency } from "./helpers";
import { animationInputLine } from "./sonsiges/animation";
import ConvertView from "./views/ConvertView";
import SelectionView from "./views/SelectionView";
import SwapView from "./views/SwapView";

const API =
  "https://v6.exchangerate-api.com/v6/b3f4caccbc7a27b8470803b4/latest/";

const controlConvertCurrency = async function (p_currency) {
  try {
    const resp = await fetch(`${API}${p_currency.from}`);

    if (!resp.ok)
      throw new Error(`${resp.status} Not Found ⚠️⚠️ Währung nicht gefunden`);

    const data = await resp.json();
    const exchangeRate = data.conversion_rates[p_currency.to];

    calculateNewCurrency(p_currency, +exchangeRate);
    RenderView.renderResult(p_currency);
  } catch (p_error) {
    alert(p_error.message);
  }
};

const controlSelection = function (p_sel) {
  RenderView.updateSelection(p_sel);
};

const init = function () {
  ConvertView.addHandlerCalculateCurrency(controlConvertCurrency);
  SelectionView.addHandlerUpdateSelection(controlSelection);
  SwapView;
  animationInputLine();
};
init();
