import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import contentfulFetch from '$lib/contentful-fetch';

export async function load({ params }) {
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
          url(transform: {
            format: AVIF
          })
          description
        }
        description{
          json
        }
      }
    }
  }
  `;

	const response = await contentfulFetch(query);

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
