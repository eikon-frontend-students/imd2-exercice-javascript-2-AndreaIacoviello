document.addEventListener("DOMContentLoaded", () => {
  const changeColorBox = document.querySelector(".box.change-color");
  const toggleColorBox = document.querySelector(".box.toggle-color");
  const triggerBox = document.querySelector(".box.trigger");
  const targetBox = document.querySelector(".box.target");
  const triggerAllBox = document.querySelector(".box.trigger-all");
  const triggerAllSelfBox = document.querySelector(".box.trigger-all-self");

  changeColorBox.addEventListener("click", () => {
    changeColorBox.style.backgroundColor = "var(--blue-color)";
  });

  toggleColorBox.addEventListener("click", () => {
    const currentColor = toggleColorBox.style.backgroundColor;
    toggleColorBox.style.backgroundColor =
      currentColor === "var(--red-color)"
        ? "var(--orange-color)"
        : "var(--red-color)";
  });

  triggerBox.addEventListener("click", () => {
    targetBox.style.display = "none";
  });

  targetBox.addEventListener("click", () => {
    targetBox.style.display = "flex";
  });

  triggerAllBox.addEventListener("click", () => {
    changeColorBox.style.backgroundColor = "var(--blue-color)";
    toggleColorBox.style.backgroundColor = "var(--red-color)";
  });

  triggerAllSelfBox.addEventListener("click", () => {
    changeColorBox.style.backgroundColor = "var(--blue-color)";
    toggleColorBox.style.backgroundColor = "var(--red-color)";
    triggerAllSelfBox.style.backgroundColor = "var(--green-color)";
  });
});
