export const animationInputLine = function () {
  const input = document.querySelector(".convert__input");
  const inputLine = document.querySelector(`.elastic-line`);

  const pathStart =
    "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
  const pathEnd =
    "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

  const toggleLineMove = function (p_path) {
    inputLine.classList.add("backward");
    inputLine.setAttribute("d", p_path);
  };

  input.addEventListener("focus", () => {
    if (input.value) return;

    toggleLineMove(pathEnd);
    inputLine.classList.remove("backward");

    setTimeout(function () {
      toggleLineMove(pathStart);
    }, 600);
  });
};
