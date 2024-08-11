function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function setActiveLink() {
  var navLinks = document.querySelectorAll(".topnav a");

  navLinks.forEach(function (link) {
    var sectionId = link.getAttribute("href").substring(1);
    var section = document.getElementById(sectionId);

    if (
      section &&
      window.scrollY >= section.offsetTop &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
