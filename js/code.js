window.onload = function () {
  let shareButton = document.querySelector(".profile a");
  let socialMediaBox = document.querySelector(".social-media");
  let isVisible = false;
  let screenWidth = window.innerWidth;

  window.onresize = function () {
    screenWidth = window.innerWidth;
    console.log(screenWidth);
  };

  shareButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (screenWidth > 560) {
      if (!isVisible) {
        socialMediaBox.style.display = "block";
        shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
        isVisible = !isVisible;
      } else {
        socialMediaBox.style.display = "none";
        shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        isVisible = !isVisible;
      }
    } else {
      if (!isVisible) {
        socialMediaBox.style.display = "block";
        isVisible = !isVisible;
      } else {
        socialMediaBox.style.display = "none";
        isVisible = !isVisible;
      }
    }
  });
};
