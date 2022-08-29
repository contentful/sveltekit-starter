import contentfulFetch from '$lib/contentful-fetch';

const query = `
{
  officeCollection {
    items {
      name
      slug
      photo {
        url(transform: {
          format: AVIF
        })
        description
      }
    }
  }
}
`;

export async function load() {
	const response = await contentfulFetch(query);

	if (response.ok) {
		const { data } = await response.json();
		const { items } = data.officeCollection;

		return {
			offices: items
		};
	}

	return {
		status: 404,
		errors: {
			message: 'Cannot Connect to the API'
		}
	};
}
