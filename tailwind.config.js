function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				skin: {
					dark: withOpacityValue("--color-background-dark"),
					medium: withOpacityValue("--color-background-medium"),
					light: withOpacityValue("--color-background-light"),
					accent: withOpacityValue("--color-accent"),
				},
			},
		},
	},
	plugins: [],
};
