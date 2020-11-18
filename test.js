//实现一个自动添加事件委托的函数
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
