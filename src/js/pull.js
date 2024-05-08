

function Pages(url) {


     PageVariable(url);
     embedHTML();
     highlightNav();
     console.log(localStorage.getItem("PageVar"))
}

function PageVariable(url) {
    localStorage.setItem("PageVar", url);
}

function embedHTML() {
  const url = localStorage.getItem("PageVar");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "document";
  xhr.onload = function () {
    const responseHTML = xhr.response.documentElement;
    const myContentElement = responseHTML.querySelector("#MyContent");
    const currentMyContentElement = document.querySelector("#MyContent");
    if (myContentElement && currentMyContentElement) {
      currentMyContentElement.innerHTML = myContentElement.innerHTML;
      highlightContent();
    } else {
      console.error("Could not find the #MyContent element in either the response HTML or the current document.");
    }
  };
  xhr.send();
  let myVariable = localStorage.getItem('PageVar');
  localStorage.removeItem('PageVar');
  localStorage.setItem("PageVar", url);
}

function highlightNav() {
  console.log(localStorage.getItem("PageVar"));
  const NavItems = document.querySelectorAll("#NavButtons a");
  let NavItem;

  if (localStorage.getItem("PageVar") === '/src/pages/Intro.html') {
    NavItem = document.querySelector("#NavButtons a:first-child");
  } else if (localStorage.getItem("PageVar") === '/src/pages/Analysis.html') {
    NavItem = document.querySelector("#NavButtons a:nth-child(2)");
  } else if (localStorage.getItem("PageVar") === '/src/pages/Design.html') {
    NavItem = document.querySelector("#NavButtons :nth-child(3)");
  } else if (localStorage.getItem("PageVar") === '/src/pages/Programming.html') {
    NavItem = document.querySelector("#NavButtons a:nth-child(4)");
  } else if (localStorage.getItem("PageVar") === '/src/pages/ContactMe.html') {
    NavItem = document.querySelector("#NavButtons a:nth-child(5)");
  } else {
    return;
  }

  for (let i = 0; i < NavItems.length; i++) {
    NavItems[i].style.borderBottom = "0px solid #8FC1E3";
    NavItems[i].style.pointerEvents = "auto";
    NavItems[i].style.color = "#3D7190";

  }

  NavItem.style.color = "#8FC1E3";
  NavItem.style.borderBottom = "3px solid #8FC1E3";
  NavItem.style.pointerEvents = "none";
}






