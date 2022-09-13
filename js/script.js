const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// for smooth scroling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // console.log(e);
    e.preventDefault();

    const href = link.getAttribute("href");
    console.log(href);

    // scroll back to top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other links
    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigations
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
///////////////////////////////////////////////////////////
//sticky nav

const sectionHeroEl = document.querySelector(".section-hero");

const obsr = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    //In the viewport

    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obsr.observe(sectionHeroEl);

//////////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
/////////////////////////////////////
// for smooth scroling animation
