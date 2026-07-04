const homeToggle = document.querySelector("#home-toggle");
const homeContent = document.querySelector("#home-content");
const cvToggle = document.querySelector("#cv-toggle");
const cvContent = document.querySelector("#cv-content");

function setExpanded(button, panel, expanded) {
  button.setAttribute("aria-expanded", String(expanded));
  panel.hidden = !expanded;

  if (expanded) {
    panel.classList.remove("is-open");
    requestAnimationFrame(() => panel.classList.add("is-open"));
  }
}

homeToggle.addEventListener("click", () => {
  const expanded = homeToggle.getAttribute("aria-expanded") === "true";
  setExpanded(homeToggle, homeContent, !expanded);

  const icon = homeToggle.querySelector(".button-icon");
  icon.textContent = expanded ? "+" : "-";

  if (!expanded) {
    homeContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

cvToggle.addEventListener("click", () => {
  const expanded = cvToggle.getAttribute("aria-expanded") === "true";
  setExpanded(cvToggle, cvContent, !expanded);

  if (!expanded) {
    cvContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
