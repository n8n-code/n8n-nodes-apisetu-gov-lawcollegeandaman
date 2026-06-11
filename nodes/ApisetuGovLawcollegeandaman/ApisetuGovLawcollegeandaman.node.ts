import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovLawcollegeandaman implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Lawcollegeandaman',
		name: 'N8nDevApisetuGovLawcollegeandaman',
		icon: { light: 'file:./apisetu-gov-lawcollegeandaman.svg', dark: 'file:./apisetu-gov-lawcollegeandaman.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Download Andaman Law College Transfer Certificate via DigiLocker.',
		defaults: { name: 'Apisetu Gov Lawcollegeandaman' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovLawcollegeandamanApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
