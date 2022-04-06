/* theme selection */
function toggleTheme() {
  if (document.getElementById("theme").href.includes("-light")) {
    let moon = document.getElementById("moon");
    moon.style.cursor = "pointer";
    moon.style.filter = "grayscale(100%)";
    moon.onclick = turnDark;
  }
}

function turnDark() {
  let theme = document.getElementById("theme");
  theme.href = theme.href.replace("-light", "-dark");
  toggleTheme();
  let moon = document.getElementById("moon");
  moon.reset
}

/* on the job calculator */
function calcMinimumHours() {
  const annualHolidayHours = document.getElementById("annual-holiday-hours").value;
  const contractHours = document.getElementById("contract-hours").value;
  const durationWeeks = document.getElementById("course-duration").value;
  
  const calcHolidayHours = annualHolidayHours * (durationWeeks / 52);
  const minimumHoursMultiplier = 
    document.getElementById("minimum-otj-percent").value / 100;

  document.getElementById("minimum-hours").value = 
      (((contractHours * durationWeeks) - calcHolidayHours) * minimumHoursMultiplier).toFixed(1);
}

function adjustContractHours() {
  const annualHolidayHours = document.getElementById("annual-holiday-hours").value;
  const durationWeeks = document.getElementById("course-duration").value;

  const calcHolidayHours = annualHolidayHours * (durationWeeks / 52);
  const minimumHoursMultiplier = 
      document.getElementById("minimum-otj-percent").value / 100;

  const plannedHours = document.getElementById("planned-hours").value;

  // conditional checks in future?
  document.getElementById("contract-hours").value = 
      (((plannedHours / minimumHoursMultiplier) + calcHolidayHours) / durationWeeks).toFixed(1);
  calcMinimumHours();
  animateSuccess();
}

function animateSuccess() {
  const contract = document.getElementById("contract");
  contract.classList.remove("success");
  
  /* void triggers "reflow" */
  void contract.offsetWidth

  contract.classList.add("success"); 
}