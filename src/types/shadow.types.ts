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
