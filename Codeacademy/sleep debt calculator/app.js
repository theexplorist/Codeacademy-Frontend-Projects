const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 8;
      break;

    case "tuesday":
      return 4;
      break;

    case "wednesday":
      return 5;
      break;

    case "thursday":
      return 9;
      break;

    case "friday":
      return 6;
      break;

    case "saturday":
      return 6.5;
      break;

    case "sunday":
      return 5.5;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let overUnder = Math.abs(actualSleepHours - idealSleepHours);
  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect Sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("More than needed sleep");
    console.log(`You are ${overUnder} hours over sleep`);
  } else {
    console.log("Should get some rest");
    console.log(`You are ${overUnder} hours under sleep`);
  }
};

calculateSleepDebt();
