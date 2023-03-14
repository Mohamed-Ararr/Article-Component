window.onload = function () {
  let shareButton = document.querySelector("a");
  let socialMediaBox = document.querySelector(".social-media");
  let isVisible = false;

  shareButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (!isVisible) {
      socialMediaBox.style.display = "block";
      isVisible = !isVisible;
    } else {
      socialMediaBox.style.display = "none";
      isVisible = !isVisible;
    }
  });
};
