function hamburgerMenu() {
    var element = document.getElementById("nav");
    if (element.className === "navbar") {
        element.className += " responsive";
    } else {
        element.className = "navbar";
    }
  }
