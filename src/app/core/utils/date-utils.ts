export function diffMonths(dt2: Date, dt1: Date) {

  let months = (dt2.getFullYear() - dt1.getFullYear()) * 12;
  months -= dt1.getMonth();
  months += dt2.getMonth() + 1;

  return months <= 0 ? 0 : months;

  // Calculate the difference in milliseconds between the two dates.
  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
  // Convert the difference from milliseconds to months by dividing it by the number of milliseconds in an hour, a day, a week, and approximately 4 weeks in a month.
  diff /= (60 * 60 * 24 * 7 * 4);
  // Round the result to the nearest integer using Math.round().
  return Math.abs(Math.round(diff));
}

function calculateText(years: number, months: number): string {
  let yearText = '';
  if (years === 1) {
    yearText = years + 'year';
  } else if (years > 1) {
    yearText = years + ' years';
  }

  let monthsText = '';
  if (years === 1) {
    monthsText = months + ' month';
  } else if (months > 1) {
    monthsText = months + ' months';
  }

  if (yearText && monthsText) {
    return yearText + ' and ' + monthsText;
  } else if (yearText && !monthsText) {
    return yearText;
  } else if (!yearText && monthsText) {
    return monthsText;
  } else {
    return '';
  }
}

export function getDateDifferenceText(dt1: Date, dt2: Date) {
  const monthsDifference = diffMonths(dt2, dt1);
  const years = Math.floor(monthsDifference / 12);
  const months = monthsDifference % 12;
  return calculateText(years, months);
}

export function getDatePeriod(dt1: Date, dt2: Date | undefined) {
  const df = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });
  const dateFromText = df.format(dt1);
  let dateToText;
  if (dt2) {
    dateToText = df.format(dt2);
  } else {
    dateToText = 'now';
  }
  return dateFromText + ' ' + dateToText;
}

