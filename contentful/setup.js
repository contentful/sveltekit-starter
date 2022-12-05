import * as dotenv from 'dotenv';
import spaceImport from 'contentful-import';

dotenv.config();

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
	throw new Error(
		[
			'Parameters missing...',
			'Please ensure your .env file exists and contains the variables CONTENTFUL_SPACE_ID and CONTENTFUL_MANAGEMENT_TOKEN'
		].join('\n')
	);
}

spaceImport({
	contentFile: './contentful/export.json',
	spaceId: CONTENTFUL_SPACE_ID,
	managementToken: CONTENTFUL_MANAGEMENT_TOKEN
})
	.then(() => console.log('✅ The content model of your space is set up!'))
	.catch((e) => console.error(e));
