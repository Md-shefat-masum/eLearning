// postcss public/assets/styles/style.css -o public/assets/styles/style.css -w
module.exports = _ => ({
	plugins: {
		autoprefixer: {
			// browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
			flexbox: 'no-2009',
		},
	},
});