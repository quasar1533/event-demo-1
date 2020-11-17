//这里说明有关事件模型的特殊情况，正常情况下如果事件的目标对象上刚好有两个监听器，分别是冒泡和捕获阶段的监听器，它们的callback执行顺序并不一定按照捕获冒泡顺序进行， 而是依据监听器的放置顺序。
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

rainbowList[6].addEventListener("click", () => console.log(2));
rainbowList[6].addEventListener("click", () => console.log(1), true);
