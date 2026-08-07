function Hamburger() {
  var x = document.getElementById("NavButtons");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function CollapseMenu() {
  var x = document.getElementById("NavButtons");
  x.style.display = "none";
}
