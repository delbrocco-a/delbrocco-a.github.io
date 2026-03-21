document.getElementById("to-top").addEventListener(
  "click", function toTop() {
    window.scroll({top: 0, behavior: "smooth"})
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
);

document.getElementById('scroll-down').addEventListener(
  'click', function scrollDown() {
      window.scroll({top: 1000, behavior: "smooth"})
      document.documentElement.scrollTop = 1000;
      document.body.scrollTop = 1000;
  }
);