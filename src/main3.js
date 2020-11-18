let btn = document.createElement("button");
let span = document.createElement("span");
span.innerText = "click me";
let div = document.querySelector("#button");
div.appendChild(btn);
btn.appendChild(span);

function on(eventType, element, selector, callback) {
  if (!(element instanceof Element)) {
    element = document.querySelector(element);
  }
  element.addEventListener(eventType, (e) => {
    let t = e.target;
    while (!t.matches(selector)) {
      if (t === element) {
        t = null;
        break;
      }
      t = t.parentNode;
    }
    t && callback.call(t, e, t); //针对事件的函数，所以传入事件和选定的节点本身
  });
} //传入想要委托的元素与能够触发事件的子元素的选择器

on("click", "#button", "button", (e) => {
  console.log("hello!");
});
