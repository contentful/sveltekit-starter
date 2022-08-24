import { env } from '$env/dynamic/private';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = env;

console.log(
	`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/explore?access_token=${CONTENTFUL_ACCESS_TOKEN}`
);

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

// todo employees
// {
// 	employeeCollection{
//     items{
//       name,
//       jobTitle
//       employeeSince
//     }
//   }
// }

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

		console.log(items);

		return {
			offices: items
		};
	}

	return {
		status: 404,
		errors: {
			password: 'Cannot Connect to the API'
		}
	};
}
