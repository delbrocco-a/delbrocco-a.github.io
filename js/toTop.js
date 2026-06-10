document.getElementById("to-top").addEventListener(
  "click", function toTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }
);

document.getElementById('scroll-down').addEventListener(
  'click', function scrollDown() {
    window.scroll({ top: 1000, behavior: "smooth" });
  }
);
