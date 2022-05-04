import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';

const banner = `/*! ${pkg.name} v${pkg.version} | ${
	pkg.description
} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

const files = ['home.js', 'place.js'];
const minify = true;

export default files.map(function (file) {
	return {
		input: `week5/places_bundle/src/${file}`,
		output: {
			file: `week5/places_bundle/${file}`,
			format: 'iife',
			banner: banner,
			name: file.replace('.js', ''),
			plugins: minify ? [terser()] : null,
			sourcemap: minify
		}
	};
});
