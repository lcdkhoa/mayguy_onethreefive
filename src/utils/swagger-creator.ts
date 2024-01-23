import fs from 'fs';
import yaml from 'js-yaml';
import * as _ from 'lodash';

const OthersConverter = (key: string, value: any) => {
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

function convertJson(jsonData: any) {
	let result = {
		required: Object.keys(jsonData),
		type: 'object',
		properties: {},
	};

	Object.entries(jsonData).forEach(([key, value]) => {
		if (
			typeof value === 'object' &&
			value !== null &&
			Object.keys(value).length !== 0 &&
			!Array.isArray(value)
		) {
			result.properties[key] = convertJson(value);
		} else if (Array.isArray(value)) {
			result.properties[key] = {
				type: 'array',
				items: {
					anyOf: value.map((element, index) => {
						const data: any = convertJson(element);
						data.title = 'Object ' + index;
						return data;
					}),
				},
			};
		} else {
			result.properties[key] = OthersConverter(key, value);
		}
	});

	return result;
}

const jsonRequest = {
	transactionId: '5fd41608-9948-4700-a199-02bcde3aeadb',
	quoteId: 'ASMT',
	systemDate: '12/05/2023',
	channelId: 'SNB',
	policyHolder: {
		firstName: 'AHMED',
		lastName: 'ABDELLLATIF',
		dob: '12/06/1981',
		age: 42,
		gender: 'M',
		nationality: 'Egyptian',
		nationalId: '2287962464',
		address: {
			city: 'الرياض',
		},
		contact: {
			email: 'ahmed_3atef@hotmail.com',
			phoneNumber: '966530581000',
		},
	},
	coverage: {
		language: 'en',
		currency: {
			input: 'SAR',
			expectedOutput: 'SAR',
		},
		ncdCode: 5,
		promoCode: '',
		loyaltyFlag: 3,
		userSpecificDiscountFlag: true,
		policyTerm: null,
		policyEffectiveDate: '06/12/2023',
		paymentTerm: null,
		frequency: '',
		category: 'Comprehensive',
		specific: {
			registrationType: 'Serial',
			deductibleOption: 25000,
			repairOption: 'Workshop',
			vehicle: {
				maker: 'دودج',
				model: 'دورانجو',
				age: 11,
				usage: 'Private',
				estimatedValue: 500000,
				seatingCapacity: 5,
			},
			drivers: [
				{
					id: '2287962464',
					dob: '12/06/1981',
					gender: 'M',
					licenseYears: 0,
					licenseType: '',
					isOwner: true,
				},
				{
					id: '2287962464',
					dob: '12/06/1982',
					gender: 'F',
					licenseYears: 0,
					licenseType: '',
					isOwner: true,
				},
			],
		},
		optionalCover: {
			paDriver: false,
			paPassenger: true,
			extensionGCC: false,
			extensionBahrain: false,
			carReplacement: false,
			morni: false,
		},
	},
};

const jsonResponse = {
	transactionId: '52b1b0a1-ba9a-4230-8bdd-7dfc01c5d134',
	quoteId: 'ASMT',
	systemDate: '12/05/2023',
	channelId: 'SNB',
	data: {
		selectedProduct: {
			premiums: {
				comprehensive: {
					recommended: {
						commission: 328.76,
						optionalCover: {
							paDriver: 0,
							extensionGCC: 0,
							morni: 0,
							extensionBahrain: 0,
							carReplacement: 0,
							paPassenger: 800,
						},
						additionalPremium: 800,
						netPremium: 2520.46,
						discountAndLoading: {
							eventDiscountPercent: 0,
							loyaltyDiscountPercent: 10,
							userSpecificDiscount: 278.34,
							eventDiscountName: '',
							eventDiscount: 0,
							promotionalDiscountPercent: 0,
							ncdAmount: 3340.09,
							promotionalDiscount: 0,
							ncdPercent: 60,
							loyaltyDiscount: 556.68,
							userSpecificDiscountPercent: 5,
						},
						grossPremium: 2191.71,
						vat: 328.76,
						deductibleOption: 25000,
						basePremium: 5566.82,
					},
					selected: {
						optionalCover: {
							extensionBahrain: 0,
							morni: 0,
							paPassenger: 800,
							extensionGCC: 0,
							paDriver: 0,
							carReplacement: 0,
						},
						additionalPremium: 800,
						discountAndLoading: {
							loyaltyDiscountPercent: 10,
							eventDiscountName: '',
							loyaltyDiscount: 556.68,
							userSpecificDiscount: 278.34,
							ncdAmount: 3340.09,
							promotionalDiscount: 0,
							userSpecificDiscountPercent: 5,
							eventDiscountPercent: 0,
							eventDiscount: 0,
							ncdPercent: 60,
							promotionalDiscountPercent: 0,
						},
						vat: 328.76,
						deductibleOption: 25000,
						grossPremium: 2191.71,
						commission: 328.76,
						basePremium: 5566.82,
						netPremium: 2520.46,
					},
				},
				thirdParty: {
					discountAndLoading: {
						eventDiscountPercent: 0,
						promotionalDiscountPercent: 0,
						loyaltyDiscount: 166.73,
						eventDiscount: 0,
						promotionalDiscount: 0,
						eventDiscountName: '',
						userSpecificDiscountPercent: 5,
						loyaltyDiscountPercent: 10,
						userSpecificDiscount: 83.36,
						ncdAmount: 833.63,
						ncdPercent: 50,
					},
					grossPremium: 1383.54,
					additionalPremium: 800,
					commission: 27.67,
					deductibleOption: 0,
					optionalCover: {
						paDriver: 0,
						morni: 0,
						paPassenger: 800,
					},
					netPremium: 1591.07,
					basePremium: 1667.25,
					vat: 207.53,
				},
			},
			productDetails: {
				productFeatures:
					'- Cover all the losses and damages to the insured vehicle as a result of a traffic accident.\n- Compensate for the losses related to natural disasters such as hail and floods.\n- Compensate for cases of theft.\n- A choice between the vast network of certified workshops or agency for repairs.',
				productVersion: 'from PC',
				productName: 'Motor Insurance',
				productRef: '',
				media: '',
				lineOfBusiness: 'Motor',
				productStatus: 'from PC',
				url: 'https://www.der3.com/motor-comprehensive-quote',
				productDescription:
					"With Arabian Shield, getting the right amount of coverage for your car is easier than you think. If you are looking for motor insurance you've come to the right place. Here, when you start with a free online quote, you end up with valuable peace of mind.",
				lineOfBusinessID: '',
				productCode: 'from PC',
			},
			specific: {
				bodyType: 'SUV',
				vehicle: {
					model: 'Durango',
					maker: 'Dodge',
				},
				bodyTypeArabic: 'SUV',
				makeNationality: 'USA',
			},
		},
		policyExpiryDate: '2024-06-11T00:00',
		vatPercentage: 15,
		commissionPercentage: 15,
	},
};

const inputUrl = 'https://api-sandbox.360f.com/360-admin/api/v1';
const inputTitle = '360-Admin';
const inputDescription = '360-Admin';
const inputVersion = '1.0.0';
const inputMethod = 'POST';
const inputPath = '/connector';
const jsonInputBadError = {};
const jsonInputInternalError = {};

const body = {
	openapi: '3.0.1',
	info: {
		title: inputTitle,
		description: inputDescription ? inputDescription : inputTitle,
		version: inputVersion ? inputVersion : '',
	},
	servers: [
		{
			url: inputUrl,
		},
	],
	paths: {
		[inputPath]: {
			[inputMethod.toLowerCase()]: {
				tags: [''],
				operationId: '',
				summary: '',
				requestBody: {
					description: '',
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/InputSchema',
							},
						},
					},
				},
				responses: {
					200: {
						description: 'OK',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/OutputSchema',
								},
							},
						},
					},
					400: {
						description: 'Bad Request',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/BadRequestSchema',
								},
							},
						},
					},
					500: {
						description: 'Internal Server Error',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/InternalErrorSchema',
								},
							},
						},
					},
				},
			},
		},
	},
	tags: [
		{
			name: '',
		},
	],
	components: {
		schemas: {
			InputSchema: convertJson(jsonRequest),
			OutputSchema: convertJson(jsonResponse),
			BadRequestSchema: _.isEmpty(jsonInputBadError)
				? {}
				: convertJson(jsonInputBadError),
			InternalErrorSchema: _.isEmpty(jsonInputInternalError)
				? {}
				: convertJson(jsonInputInternalError),
		},
	},
};

// const convertedJson = convertJson(jsonInput);
const yamlData = yaml.dump(body);
const yamlFilePath = 'd:/file.yaml';
fs.writeFileSync(yamlFilePath, yamlData, 'utf8');
