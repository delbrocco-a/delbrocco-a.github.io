document.getElementById("to-top").addEventListener(
  "click", function toTop() {
    window.scroll({top: 0, behavior: "smooth"})
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
);