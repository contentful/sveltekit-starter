import { env } from '$env/dynamic/private';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = env;

export async function load({ params }) {
	const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID;

	const query = `
  {
    officeCollection(where: {slug:"${params.slug}"}) {
      items{
        name
        location {
          lat
          lon
        }
        photo {
          url
          description
        }
        description{
          json
        }
      }
    }
  }
  `;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + CONTENTFUL_ACCESS_TOKEN
		},
		body: JSON.stringify({ query })
	});

	if (response.ok) {
		const { data } = await response.json();
		const { items } = data.officeCollection;

		const officeData = items[0];
		// convert description to HTML
		officeData.description = documentToHtmlString(officeData.description.json);

		return {
			office: officeData
		};
	}

	return {
		status: 404,
		errors: {
			message: 'Cannot connect to the API'
		}
	};
}
