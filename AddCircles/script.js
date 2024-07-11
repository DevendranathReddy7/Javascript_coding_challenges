const button = document.querySelector(".add_button");
const circleContainer = document.querySelector(".circleContainer");
const count = document.querySelector(".count");

button.addEventListener("click", function () {
  const newCircle = document.createElement("div");
  newCircle.classList.add("circle");
  circleContainer.appendChild(newCircle);

  newCircle.addEventListener("click", function () {
    newCircle.classList.toggle("circle_clicked");

    const currentBg = window.getComputedStyle(newCircle);
    const bgColor = currentBg.backgroundColor;
    if (bgColor === "rgb(0, 128, 0)") {
      count.textContent = Number(count.textContent) + 1;
    } else {
      count.textContent = Number(count.textContent) - 1;
    }
  });
});
