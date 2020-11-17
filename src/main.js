let rainbowList = document.querySelectorAll("div[class^=level]");
let n = 1;
let color = (e) => {
  let t = e.currentTarget;
  setTimeout(() => {
    t.classList.remove("x");
  }, n * 1000);
  n += 1;
};
let uncolor = (e) => {
  let t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 1000);
  n += 1;
}; // e.currentTarget属性在事件函数执行完毕后，将无法访问，所以先通过闭包将其引用
for (let i = 0; i < rainbowList.length; i++) {
  rainbowList[i].addEventListener("click", color, true);
  rainbowList[i].addEventListener("click", uncolor);
}
