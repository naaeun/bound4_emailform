export type ShadowValue = {
	color: string;
	type: 'dropShadow';
	x: number;
	y: number;
	blur: number;
	spread: number;
	opacity?: number;
};

export type Shadow = {
	[key: string]: {
		value: ShadowValue;
		type: 'boxShadow';
	};
};

const shadow: Shadow = {
	weak: {
		value: {
			color: '#11111114',
			type: 'dropShadow',
			x: 0,
			y: 2,
			blur: 12,
			spread: 1,
		},
		type: 'boxShadow',
	},
	moderate: {
		value: {
			color: '#1111111f',
			type: 'dropShadow',
			x: 0,
			y: 4,
			blur: 16,
			spread: 1,
		},
		type: 'boxShadow',
	},
	strong: {
		value: {
			color: '#11111129',
			type: 'dropShadow',
			x: 0,
			y: 8,
			blur: 20,
			spread: 3,
		},
		type: 'boxShadow',
	},
	extreme: {
		value: {
			color: '#11111133',
			type: 'dropShadow',
			x: 0,
			y: 12,
			blur: 24,
			spread: 4,
		},
		type: 'boxShadow',
	},
};

export default shadow;
