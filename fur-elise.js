function selectHoursWeeks(value) {
  const annualHolidayHours = document.getElementById("annual-holiday-hours");
  const annualHolidayWeeks = document.getElementById("annual-holiday-weeks");
  
  switch(value) {
    case "hours":
      calcHolidayHours();
      annualHolidayWeeks.type = "hidden";
      annualHolidayHours.type = "number";
      break;
    case "weeks":
      calcHolidayWeeks();
      annualHolidayHours.type = "hidden";
      annualHolidayWeeks.type = "number";
      break;
  }
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
  calcHolidayWeeks;
}

function calcHolidayHours() {
  const annualHolidayWeeks = document.getElementById("annual-holiday-weeks").value;
  const contractHours = document.getElementById("contract-hours").value;

  const annualHolidayHours = annualHolidayWeeks * contractHours;
  document.getElementById("annual-holiday-hours").value = annualHolidayHours.toFixed(1);

  calcMinimumHours();
}

function calcHolidayWeeks() {
  const annualHolidayHours = document.getElementById("annual-holiday-hours").value;
  const contractHours = document.getElementById("contract-hours").value;

  const annualHolidayWeeks = annualHolidayHours / contractHours;
  document.getElementById("annual-holiday-weeks").value = annualHolidayWeeks.toFixed(1);
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

/* theme selection based on browser preference */
function checkTheme(dark) {
  if (dark) {
    let theme = document.getElementById("theme");
    theme.href = theme.href.replace("-light", "-dark");
  }
}