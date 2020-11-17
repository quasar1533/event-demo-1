let div = document.querySelector("#btn");
div.addEventListener("click", (e) => {
  let t = e.target.textContent;
  if (e.target.tagName.toLowerCase() === "button") {
    console.log(`click button: ${t}`);
  }
});
