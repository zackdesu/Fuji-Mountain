const scrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const secAttr = document.querySelector("#attraction");
  const scrSecAttr = secAttr.offsetTop;
  header.classList.toggle(
    "first",
    window.scrollY > 2 && window.scrollY <= scrSecAttr
  );
  header.classList.toggle("second", window.scrollY >= scrSecAttr);

  const under = document.querySelector(".undermountain");
  const scrUnder = under.offsetTop;
  const underH1 = document.querySelector(".undermountain h1");
  const underP = document.querySelectorAll(".undermountain p");

  if (window.scrollY > scrUnder - 400) {
    underH1.classList.add("to100");
    underP.forEach((e) => {
      e.classList.add("to100");
    });
  }

  const attH1 = document.querySelector("#attraction h1");
  const card = document.querySelectorAll(".card");
  if (window.scrollY > scrSecAttr - 400) {
    attH1.classList.add("to100");
    card.forEach((e) => {
      e.classList.add("to100");
    });
  }

  const pla = document.querySelector("#place");
  const scrPla = pla.offsetTop;

  const plaH1 = document.querySelector("#place h1");
  const plaIFrame = document.querySelector("#place iframe");
  if (window.scrollY > scrPla - 400) {
    plaH1.classList.add("to100");
    plaIFrame.classList.add("to100");
  }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");

window.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("hamburger")) {
    nav.classList.add("toggle");
  } else if (nav.classList.contains("toggle")) {
    nav.classList.remove("toggle");
  }
});
