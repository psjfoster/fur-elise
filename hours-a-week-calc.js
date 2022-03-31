const contractHours = 40;
const durationWeeks = 78;
const holidayHours = 224;

const minimumPercentage = 20;
const minimumHours = calcMinimumHours(contractHours); // 579.2

const plannedHours = 760;
const adjustedContractHours = adjustContractHours(plannedHours); // 51.6

function calcMinimumHours(contractHours) {
  let holidayHoursPerWeek = holidayHours / durationWeeks;
  return (minimumPercentage * 0.01 * (contractHours - holidayHoursPerWeek) * durationWeeks);
}

function adjustContractHours(plannedHours) {
  let holidayHoursPerWeek = holidayHours / durationWeeks;
  let adjustedHours = ((plannedHours / minimumPercentage / 0.01 / durationWeeks) + holidayHoursPerWeek);
  return adjustedHours;
}