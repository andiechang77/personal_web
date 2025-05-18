document.querySelector(".hamburger").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  const mainSection = document.querySelector("main");

  navLinks.classList.toggle("hidden");

  if (!navLinks.classList.contains("hidden")) {
    const navHeight = navLinks.offsetHeight;
    console.log(navHeight);
    mainSection.style.marginTop = `${navHeight}px`;
  } else {
    mainSection.style.marginTop = "0";
  }
});
