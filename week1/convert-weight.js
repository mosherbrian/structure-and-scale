// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Weight = (function () {
	let units = 'mg';

	// weight in milligrams
	function Constructor(weight) {
		units = 'mg';
		this.weight = parseFloat(weight);
	}

	Constructor.prototype.inGrams = function () {
		units = 'g';
		return this.weight / 1000;
	};

	Constructor.prototype.inKg = function () {
		units = 'kg';
		return this.weight / 1000 / 1000;
	};

	Constructor.prototype.inMg = function () {
		units = 'mg';
		return this.weight;
	};

	Constructor.prototype.units = function () {
		return units;
	};

	return Constructor;
})();
