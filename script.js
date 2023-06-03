window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle(
    "first",
    window.scrollY > 0 && window.scrollY <= 1350
  );
  header.classList.toggle("second", window.scrollY >= 1350);

  const underH1 = document.querySelector(".undermountain h1");
  const underP = document.querySelectorAll(".undermountain p");

  if (window.scrollY > 199) {
    underH1.classList.add("to100");
    underP.forEach((e) => {
      e.classList.add("to100");
    });
  }

  const attH1 = document.querySelector("#attraction h1");
  const card = document.querySelectorAll(".card");
  if (window.scrollY > 1000) {
    attH1.classList.add("to100");
    card.forEach((e) => {
      e.classList.add("to100");
    });
  }
});
