import { env } from '$env/dynamic/private';
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = env;

const query = `
{
  officeCollection{
    items{
      name
      location {
        lat
        lon
      }
      photo {
        url
      }
    }
  }
}
`;

export async function load() {
	const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID;

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
