const convertWeight = (function () {

	function gramsToKilograms(g) {
		return g / 1000;
	}

	function gramsToMilligrams(g) {
		return g * 1000;
	}

	function kilogramsToGrams(kg) {
		return kg * 1000;
	}

	function kilogramsToMilligrams(kg) {
		return kg * 1000 * 1000;
	}

	function milligramsToGrams(mg) {
		return mg / 1000;
	}

	function milligramsToKilograms(mg) {
		return mg / 1000 / 1000;
	}

	return {
		gramsToKilograms,
		gramsToMilligrams,
		kilogramsToGrams,
		kilogramsToMilligrams,
		milligramsToGrams,
		milligramsToKilograms
	};
})();

