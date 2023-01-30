document.getElementById("hamburger").addEventListener("click", () => {
    const mobileMenu = document.querySelector("section.mobile-menu");
    mobileMenu.style.display = "block";
  });
  
  document.querySelector(".close-button").addEventListener("click", () => {
    const mobileMenu = document.querySelector("section.mobile-menu");
    mobileMenu.style.display = "none";
  });
  
  const mobileMenuOptions = document.querySelectorAll("ul.mobile-list li");
  mobileMenuOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const mobileMenu = document.querySelector("section.mobile-menu");
      mobileMenu.style.display = "none";
    });
  });
  