// time.getDay() - get the day of the week as a string.
// time.getMonth() - get the month of the year as a string.
// time.addSeconds() - add a number of seconds to a date.
// time.addMinutes() - add a number of minutes to a date.
// time.addHours() - add a number of hours to a date.
// time.addDays() - add a number of days to a date.
// time.addMonths() - add a number of months to a date.
// time.addYears() - add a number of years to a date.

function getDay(date) {
	return [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	][date.getDay()];
}

function getMonth(date) {
	return [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	][date.getMonth()];
}

function addSeconds(date, seconds) {
	date.setTime(seconds * 1000 + date.getTime());
}

function addMinutes(date, minutes) {
	date.setTime(minutes * 60 * 1000 + date.getTime());
}

function addHours(date, hours) {
	date.setTime(hours * 60 * 60 * 1000 + date.getTime());
}

function addDays(date, days) {
	date.setTime(days * 24 * 60 * 60 * 1000 + date.getTime());
}

function addMonths(date, months) {
	const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 31, 31, 30, 31];
	let daysToAdd = 0;
	for (let i = 1; i <= months; i++) {
		daysToAdd += monthDays[(date.getMonth() + i) % 12];
	}
	date.setTime(daysToAdd * 24 * 60 * 60 * 1000 + date.getTime());
}

function addYears(date, years) {
	date.setTime(years * 365 * 24 * 60 * 60 * 1000 + date.getTime());
}

export {
	getDay,
	getMonth,
	addSeconds,
	addMinutes,
	addHours,
	addDays,
	addMonths,
	addYears
};
