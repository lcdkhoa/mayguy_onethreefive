import ObjectHandler from '../components/ObjectHandler';
import SwaggerCreator from '../components/SwaggerCreator';

export const ToolCardList = [
	{
		id: 1,
		title: 'Object-Handler',
		description:
			'Object-Handler: Convert complex nested data structures into flat formats and back, enhancing simplicity and efficiency in data management.',
		imageUrl: '/images/cards/object_handler.png',
		component: ObjectHandler,
		path: '/tools/object-handler',
		isSelected: false,
	},
	{
		id: 2,
		title: 'Swagger-Creator',
		description:
			'Swagger-Creator: Fill in some needed Information of API, this tool will help creating Yaml Swagger file 3.0',
		imageUrl: '/images/cards/swagger_converter.png',
		component: SwaggerCreator,
		path: '/tools/swagger-creator',
		isSelected: false,
	},
];

export const ToolSwaggers = [
	{
		id: 1,
		title: 'API URL',
		name: 'api_url',
		icon: '/images/cards/swagger_converter.png',
		textHolder: 'https://api.example.com',
	},
	{
		id: 2,
		title: 'API Title',
		name: 'api_title',
		icon: '/images/cards/swagger_converter.png',
		textHolder: 'Example API',
	},
	{
		id: 3,
		title: 'API Description',
		name: 'api_description',
		icon: '/images/cards/swagger_converter.png',
		textHolder: 'This is an example API',
	},
	{
		id: 4,
		title: 'API Version',
		name: 'api_version',
		icon: '/images/cards/swagger_converter.png',
		textHolder: '1.0.0',
	},
	{
		id: 5,
		title: 'API Method',
		name: 'api_method',
		icon: '/images/cards/swagger_converter.png',
		textHolder: 'GET, POST, PUT, DELETE',
	},
	{
		id: 6,
		title: 'API Path',
		name: 'api_path',
		icon: '/images/cards/swagger_converter.png',
		textHolder: '/example',
	},
	{
		id: 7,
		title: 'API Input Schema',
		name: 'api_input_schema',
		icon: '/images/cards/swagger_converter.png',
		textHolder: "Please input API's input schema",
	},
	{
		id: 8,
		title: 'API Output Schema',
		name: 'api_output_schema',
		icon: '/images/cards/swagger_converter.png',
		textHolder: "Please input API's output schema",
	},
	{
		id: 9,
		title: 'API Bad Error Schema',
		name: 'api_bad_error_schema',
		icon: '/images/cards/swagger_converter.png',
		textHolder: "Please input API's bad error schema",
	},
	{
		id: 10,
		title: 'API Network Error Schema',
		name: 'api_network_error_schema',
		icon: '/images/cards/swagger_converter.png',
		textHolder: "Please input API's network error schema",
	},
];
