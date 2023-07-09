const menuBtn = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    hamburgerMenu.classList.add("hamburger-clicked");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    hamburgerMenu.classList.remove("hamburger-clicked");
  }
});
// window.addEventListener("scroll", function() {
//     const servicesImg = document.querySelector(".services-back-img");
//     const scrollPos = window.scrollY;
//     servicesImg.style.transform = `translateY(-${scrollPos}px)`;
//   });

document.addEventListener("DOMContentLoaded", function () {
  var circle = document.querySelector(".circle");
  var dynamicText = document.querySelector("#dynamic-text");

  circle.addEventListener("mouseover", function () {
    dynamicText.textContent =
      "Transforming MNCs with Global Talent Solutions for Exceptional Team Building.";
  });

  circle.addEventListener("mouseout", function () {
    dynamicText.textContent =
      "Empowering MNCs to Build Exceptional Teams: Your Global Talent Acquisition Solution";
  });
});
var expandTimeoutId;

function expandQuote(event) {
  var target = event.target;
  var quote = target
    .closest(".partners-container")
    .querySelector(".partners-quote");
  clearTimeout(expandTimeoutId);
  quote.classList.add("expanded");
}

function shrinkQuote(event) {
  var target = event.target;
  var quote = target
    .closest(".partners-container")
    .querySelector(".partners-quote");

  quote.classList.remove("expanded");
  // Set the desired delay time in milliseconds (e.g., 500ms = 0.5 seconds)
}


// partners animation
const partnersDivs = document.querySelectorAll('.partners');

partnersDivs.forEach((div, index) => {
  if (index === 0) {
    div.classList.add('clicked');
  }

  div.addEventListener('click', () => {
    partnersDivs.forEach((div) => {
      div.classList.remove('clicked');
    });
    div.classList.add('clicked');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    const location = document.getElementById('searchLocation').value;
    const jobTitle = document.getElementById('searchJob').value;
    const url = `hireingPage.html?location=${encodeURIComponent(location)}&jobTitle=${encodeURIComponent(jobTitle)}`;
    window.location.href = url; // Redirect to the results page with query parameters
  });
});