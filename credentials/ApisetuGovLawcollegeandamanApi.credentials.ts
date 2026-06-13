import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovLawcollegeandamanApi implements ICredentialType {
        name = 'N8nDevApisetuGovLawcollegeandamanApi';

        displayName = 'Apisetu Gov Lawcollegeandaman API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovLawcollegeandaman/apisetu-gov-lawcollegeandaman.svg', dark: 'file:../nodes/ApisetuGovLawcollegeandaman/apisetu-gov-lawcollegeandaman.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/lawcollegeandaman/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/lawcollegeandaman/v3',
                        description: 'The base URL of your Apisetu Gov Lawcollegeandaman API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
