// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Weight = (function () {
	const unitEnum = ['mg', 'grams', 'kg'];
	const conversionFactors = [
		[1, 0.001, 0.000001], // mgs to X
		[1000, 1, 0.001], // grams to X
		[1000 * 1000, 1000, 1] // kgs to X
	];

	function Constructor(weight, options = {}) {
		let settings = Object.assign(
			{
				units: 'mg'
			},
			options
		);

		this.weight = parseFloat(weight);
		this.settings = settings;
	}

	function convert(val, fromUnits, toUnits) {
		return (
			val *
			conversionFactors[unitEnum.findIndex((e) => e === fromUnits)][
				unitEnum.findIndex((e) => e === toUnits)
			]
		);
	}

	Constructor.prototype.inGrams = function () {
		return convert(this.weight, this.settings.units, 'grams');
	};

	Constructor.prototype.inKg = function () {
		return convert(this.weight, this.settings.units, 'kg');
	};

	Constructor.prototype.inMg = function () {
		return convert(this.weight, this.settings.units, 'mg');
	};

	Constructor.prototype.addGrams = function (val) {
		this.weight += convert(parseFloat(val), 'grams', this.settings.units);
		return this;
	};

	Constructor.prototype.addKg = function (val) {
		this.weight += convert(parseFloat(val), 'kg', this.settings.units);
		return this;
	};

	Constructor.prototype.addMg = function (val) {
		this.weight += convert(parseFloat(val), 'mg', this.settings.units);
		return this;
	};

	Constructor.prototype.units = function () {
		return this.settings.units;
	};

	return Constructor;
})();
