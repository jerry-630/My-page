const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervarId;
const startChangingColor = function () {
  if (!intervarId) {
    intervarId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervarId);
  intervarId = null;
};

document.querySelector("#Start").addEventListener("click", startChangingColor);
document.querySelector("#Stop").addEventListener("click", stopChangingColor);
