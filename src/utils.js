import { BMI_INFO } from "./constants";

export function calcBMI(type, weight, height) {
  if (type === "metric") {
    return (weight / Math.pow(height / 100, 2)).toFixed(1);
  }

  if (type === "imperial") {
    return ((weight / Math.pow(height, 2)) * 703).toFixed(1);
  }
}

export function calcIdealWeight(type, bmi, height) {
  if (type === "metric") {
    return (bmi * Math.pow(height / 100, 2)).toFixed(1);
  }

  if (type === "imperial") {
    return ((bmi / 703) * Math.pow(height, 2)).toFixed(1);
  }
}

export function getBmiName(bmi) {
  return BMI_INFO.filter((item) => bmi >= item.bmi.min && bmi < item.bmi.max)[0]
    ?.name;
}

export function convertLbsToStLbs(lbs) {
  const st = Math.floor(lbs / 14);
  const lbsRemainder = Math.floor(lbs % 14);
  return `${st}st ${lbsRemainder}lbs`;
}
