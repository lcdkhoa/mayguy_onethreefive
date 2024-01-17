import ObjectHandler from '../components/ObjectHandler';
import SwaggerConverter from '../components/SwaggerConverter';

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
		title: 'Swagger-Converter',
		description:
			'Swagger-Converter: Convert JSON to YAML with support for Swagger 2.0',
		imageUrl: '/images/cards/swagger_converter.png',
		component: SwaggerConverter,
		path: '/tools/object-handler',
		isSelected: false,
	},
];
