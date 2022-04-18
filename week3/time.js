// time.getDay() - get the day of the week as a string.
// time.getMonth() - get the month of the year as a string.
// time.addSeconds() - add a number of seconds to a date.
// time.addMinutes() - add a number of minutes to a date.
// time.addHours() - add a number of hours to a date.
// time.addDays() - add a number of days to a date.
// time.addMonths() - add a number of months to a date.
// time.addYears() - add a number of years to a date.

const Time = (function () {
	function Constructor(...dateArgs) {
		this.date = new Date(...dateArgs);
	}

	Constructor.prototype.getDay = function () {
		return [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		][this.date.getDay()];
	};

	Constructor.prototype.getMonth = function () {
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
		][this.date.getMonth()];
	};

	Constructor.prototype.addSeconds = function (seconds) {
		this.date.setTime(seconds * 1000 + this.date.getTime());
		return this;
	};

	Constructor.prototype.addMinutes = function (minutes) {
		this.date.setTime(minutes * 60 * 1000 + this.date.getTime());
		return this;
	};

	Constructor.prototype.addHours = function (hours) {
		this.date.setTime(hours * 60 * 60 * 1000 + this.date.getTime());
		return this;
	};

	Constructor.prototype.addDays = function (days) {
		this.date.setTime(days * 24 * 60 * 60 * 1000 + this.date.getTime());
		return this;
	};

	Constructor.prototype.addMonths = function (months) {
		const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 31, 31, 30, 31];
		let daysToAdd = 0;
		for (let i = 1; i <= months; i++) {
			daysToAdd += monthDays[(this.date.getMonth() + i) % 12];
		}
		this.date.setTime(
			daysToAdd * 24 * 60 * 60 * 1000 + this.date.getTime()
		);
		return this;
	};

	Constructor.prototype.addYears = function (years) {
		this.date.setTime(
			years * 365 * 24 * 60 * 60 * 1000 + this.date.getTime()
		);
		return this;
	};

	return Constructor;
})();

export default Time;
