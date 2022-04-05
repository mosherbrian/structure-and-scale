// eslint-disable-next-line @typescript-eslint/no-unused-vars
const convertWeight = (function () {

	function gramsToKilograms(g) {
		return parseFloat(g)/ 1000;
	}

	function gramsToMilligrams(g) {
		return parseFloat(g)* 1000;
	}

	function kilogramsToGrams(kg) {
		return parseFloat(kg) * 1000;
	}

	function kilogramsToMilligrams(kg) {
		return parseFloat(kg) * 1000 * 1000;
	}

	function milligramsToGrams(mg) {
		return parseFloat(mg) / 1000;
	}

	function milligramsToKilograms(mg) {
		return parseFloat(mg) / 1000 / 1000;
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
