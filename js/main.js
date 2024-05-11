let scrollTopButton = document.getElementById("scrolltopbutton");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 390) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});
scrollTopButton.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
