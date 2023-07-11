// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let contador = 0;
  for (let i = 0; i < birdsPerDay.length; i++) contador += birdsPerDay[i];
  return contador;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let day = 0;
  if (week !== 1){
   day = 7*(week-1);
  }
  let contador = 0;
  for (day; day < 7*week; day++) contador+=birdsPerDay[day];
  return contador;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i=0;i<birdsPerDay.length;i= i+2){
    birdsPerDay[i]++;
  }return  birdsPerDay;
}
