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

// Start Sorting
var searchFilter = () => {
  let selectedColor = document.getElementById("filterByColor").value;
  console.log(selectedColor);
  const input = document.querySelector(".form-control");
  const cards = document.getElementsByClassName("col");
  console.log(cards[1]);
  let textBox = input.value;
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body");
    if (
      (cards[i].classList.contains(selectedColor) || selectedColor == "") &&
      title.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1
    ) {
      cards[i].classList.remove("d-none");
    } else {
      cards[i].classList.add("d-none");
    }
  }
};
// End Sorting
