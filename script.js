const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -5% 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));

const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  if (!button) return;
  const original = button.textContent;
  button.textContent = "Request Sent";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
    form.reset();
  }, 1800);
});
