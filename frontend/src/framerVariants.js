export const modalVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const pageVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
	transition: {
		// duration: 0.05,
	},
};

export const dropdownVariant = {
	initial: {
		opacity: 0,
		y: '-20px',
	},
	animate: {
		opacity: 1,
		y: '20px',
	},
	exit: {
		opacity: 0,
		y: '15px',
	},
};

export const dropdownVariantNav = {
	initial: {
		opacity: 0,
		y: '-20px',
	},
	animate: {
		opacity: 1,
		y: '0px',
	},
	exit: {
		opacity: 0,
		// y: '0px',
	},
};
