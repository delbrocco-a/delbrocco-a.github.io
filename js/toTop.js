document.getElementById("to-top").addEventListener(
  "click", function toTop() {
    window.scroll({top: 0, behavior: "smooth"})
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
);

document.getElementById('scroll-down').addEventListener(
  'click', function scrollDown() {
      window.scroll({top: 830, behavior: "smooth"})
      document.documentElement.scrollTop = 830;
      document.body.scrollTop = 830;
  }
);