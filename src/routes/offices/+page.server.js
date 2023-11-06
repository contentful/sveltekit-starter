import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/contentful-fetch'

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
`

export async function load() {
  const response = await contentfulFetch(query)

  if (!response.ok) {
    throw error(response.status, {
      message: response.statusText,
    })
  }
  const { data } = await response.json()
  const { items } = data.officeCollection

  return {
    offices: items,
  }
}
