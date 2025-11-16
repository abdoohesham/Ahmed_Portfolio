function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  let current = "";
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });

  const scrollTop = document.getElementById("scrollTop");
  if (window.pageYOffset > 300) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

const projectImages = {
  1: ["pizza1.jpg", "pizza2.jpg", "pizza3.jpg"],
  2: ["dessert1.png", "dessert2.png", "dessert3.png"],
  3: ["perfume1.jpg", "perfume2.jpg", "perfume3.jpg"],
};

let currentImageIndex = { 1: 0, 2: 0, 3: 0 };

function changeImage(projectId, direction) {
  const images = projectImages[projectId];
  currentImageIndex[projectId] =
    (currentImageIndex[projectId] + direction + images.length) % images.length;
  const currentImage = images[currentImageIndex[projectId]];

  const placeholder = document.getElementById("project" + projectId);
  placeholder.src = currentImage;
}
const images = projectImages[projectId];
currentImageIndex[projectId] =
  (currentImageIndex[projectId] + direction + images.length) % images.length;
const currentImage = images[currentImageIndex[projectId]];

const placeholder = document.getElementById("project" + projectId);
placeholder.innerHTML =
  '<div class="image-placeholder-icon">' +
  currentImage.icon +
  "</div>" +
  '<p style="font-weight: 600; margin-bottom: 0.25rem;">' +
  currentImage.title +
  "</p>" +
  '<p style="font-size: 0.875rem; opacity: 0.7;">' +
  currentImage.desc +
  "</p>";
