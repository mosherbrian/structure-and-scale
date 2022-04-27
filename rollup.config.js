import pkg from './package.json';

const banner = `/*! ${pkg.name} v${pkg.version} | ${
	pkg.description
} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

const formats = ['iife', 'es', 'cjs'];

export default formats.map(function (format) {
	return {
		input: 'week4/time.js',
		output: {
			file: `build/time${format === 'iife' ? '' : `.${format}`}.js`,
			format: format,
			name: 'Time',
			banner: banner,
			exports: 'default'
		}
	};
});
