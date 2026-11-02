// Highlight the chosen membership plan and confirm it on the page
function selectPlan(planName) {
  document.querySelectorAll(".plan").forEach(plan => {
    const isChosen = plan.dataset.plan === planName;
    plan.classList.toggle("selected", isChosen);
    const btn = plan.querySelector("button");
    if (btn) btn.textContent = isChosen ? "Selected ✓" : "Select";
  });

  const note = document.getElementById("selection");
  if (note) note.textContent = `You selected the ${planName} plan. Visit the front desk to finish signing up!`;
}

// Navbar gets a solid background after scrolling
const header = document.getElementById("siteHeader");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();