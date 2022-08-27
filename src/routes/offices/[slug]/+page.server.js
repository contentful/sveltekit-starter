import { env } from '$env/dynamic/private';
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = env;

export async function load({ params }) {
	const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID;

	const query = `
  {
    officeCollection(where: {slug:"${params.slug}"}) {
      items{
        name
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

		return {
			office: items[0]
		};
	}

	return {
		status: 404,
		errors: {
			message: 'Cannot connect to the API'
		}
	};
}
