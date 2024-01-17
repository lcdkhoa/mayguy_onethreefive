const OthersConverter = (key: any, value: any) => {
	const data = {
		type: typeof value,
		example: value,
		description: key
			.replace(/([A-Z])/g, ' $1')
			.trim()
			.replace(/\b\w/g, (c) => c.toUpperCase()),
	};
	return data;
};

function convertJson(jsonData: Object) {
	let result = {
		required: Object.keys(jsonData),
		type: 'object',
		properties: {},
	};

	Object.entries(jsonData).forEach(([key, value]) => {
		if (typeof value === 'object') {
			result.properties[key] = convertJson(value);
		} else {
			result.properties[key] = OthersConverter(key, value);
		}
	});

	return result;
}
