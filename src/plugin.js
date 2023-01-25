import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  window.onload = setup;
  window.onpopstate = setup;
}

// PCのとき、矢印キーで移動ができるように
function setup() {
  console.log("hello")
  const prev = document.getElementsByClassName("pagination-nav__link--prev");
  const next = document.getElementsByClassName("pagination-nav__link--next");

  function pageNate(e) {
    const active = document.activeElement.tagName;
    if (active != "BODY") {
      return;
    }
    if (e.key == "ArrowLeft" && prev.length == 1) {
      prev[0].click();
    } else if (e.key == "ArrowRight" && next.length == 1) {
      next[0].click();
    }
  }
  document.addEventListener("keydown", pageNate);
}
