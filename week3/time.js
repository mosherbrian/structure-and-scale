// time.getDay() - get the day of the week as a string.
// time.getMonth() - get the month of the year as a string.
// time.addSeconds() - add a number of seconds to a date.
// time.addMinutes() - add a number of minutes to a date.
// time.addHours() - add a number of hours to a date.
// time.addDays() - add a number of days to a date.
// time.addMonths() - add a number of months to a date.
// time.addYears() - add a number of years to a date.

function Constructor(...dateArgs) {
	let lastArg = dateArgs?.[dateArgs.length - 1];
	let settings = lastArg?.days || lastArg?.month ? dateArgs.pop() : null;
	settings = Object.assign(
		{
			days: [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			],
			months: [
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
			]
		},
		settings ? settings : {}
	);

	Object.freeze(settings);
	Object.defineProperties(this, {
		date: {value: new Date(...dateArgs)},
		_settings: {value: settings}
	});
}

Constructor.prototype.getDay = function () {
	return this._settings.days[this.date.getDay()];
};

Constructor.prototype.getMonth = function () {
	return this._settings.months[this.date.getMonth()];
};

Constructor.prototype.addSeconds = function (seconds) {
	let newTime = new Constructor(
		seconds * 1000 + this.date.getTime(),
		this._settings
	);
	return newTime;
};

Constructor.prototype.addMinutes = function (minutes) {
	let newTime = new Constructor(
		minutes * 60 * 1000 + this.date.getTime(),
		this._settings
	);
	return newTime;
};

Constructor.prototype.addHours = function (hours) {
	let newTime = new Constructor(
		hours * 60 * 60 * 1000 + this.date.getTime(),
		this._settings
	);
	return newTime;
};

Constructor.prototype.addDays = function (days) {
	let newTime = new Constructor(
		days * 24 * 60 * 60 * 1000 + this.date.getTime(),
		this._settings
	);
	return newTime;
};

Constructor.prototype.addMonths = function (months) {
	const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 31, 31, 30, 31];
	let daysToAdd = 0;
	for (let i = 1; i <= months; i++) {
		daysToAdd += monthDays[(this.date.getMonth() + i) % 12];
	}
	let newTime = new Constructor(
		daysToAdd * 24 * 60 * 60 * 1000 + this.date.getTime(),
		this._settings
	);
	return newTime;
};

Constructor.prototype.addYears = function (years) {
	let newTime = new Constructor(
		years * 365 * 24 * 60 * 60 * 1000 + this.date.getTime(),
		this._settings
	);
	return newTime;
};

export default Constructor;
