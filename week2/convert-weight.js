// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Weight = (function () {
	const conversionFactors = {
		mg: {mg: 1, grams: 0.001, kg: 0.000001},
		grams: {mg: 1000, grams: 1, kg: 0.001},
		kg: {mg: 1000 * 1000, grams: 1000, kg: 1}
	};

	function Constructor(weight, options = {}) {
		let settings = Object.assign(
			{
				units: 'mg'
			},
			options
		);

		// Make sure valid units were provided
		if (!['mg', 'grams', 'kg'].includes(settings.units)) {
			throw `[Convert.js]: "${settings.units}" is not a valid weight`;
		}

		this.weight = parseFloat(weight);
		this.units = settings.units;
	}

	function convert(val, fromUnits, toUnits) {
		return val * conversionFactors[fromUnits][toUnits];
	}

	Constructor.prototype.inGrams = function () {
		return convert(this.weight, this.units, 'grams');
	};

	Constructor.prototype.inKg = function () {
		return convert(this.weight, this.units, 'kg');
	};

	Constructor.prototype.inMg = function () {
		return convert(this.weight, this.units, 'mg');
	};

	Constructor.prototype.addGrams = function (val) {
		this.weight += convert(parseFloat(val), 'grams', this.units);
		return this;
	};

	Constructor.prototype.addKg = function (val) {
		this.weight += convert(parseFloat(val), 'kg', this.units);
		return this;
	};

	Constructor.prototype.addMg = function (val) {
		this.weight += convert(parseFloat(val), 'mg', this.units);
		return this;
	};

	Constructor.prototype.units = function () {
		return this.units;
	};

	return Constructor;
})();
