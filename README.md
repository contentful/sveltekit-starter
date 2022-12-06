# Contentful and Sveltekit starter

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcontentful%2Fsveltekit-starter)

Everything you need to build a [SvelteKit](https://kit.svelte.dev/) project with Contentful. This starter shows you how to:

- Fetch data from the Contentful GraphQL API
- Create dynamic routes
- Use the Svelte component Lifecycle
- Display a map using Google Maps
- Use [private Environment Variables](https://kit.svelte.dev/docs/modules#$env-static-private) server-side

## Quick Start

### Step 1. Get the source code and install dependencies

Clone this repository

```bash
git clone https://github.com/contentful/sveltekit-starter.git
```

Install dependencies.

```bash
npm install
```

### Step 2. Create an account and grab your secrets

Create a Contentful account with an empty space.
Go to your Contentful space and

- Find your [Space ID](https://www.contentful.com/help/find-space-id/)
- Create an access token for the [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- Create an access token for the [Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/).

### Step 3. Create an environment file

1. Rename the `.env.example` at the root of your project to `.env` (so it is ignored by Git).
2. In the new `.env` file, replace `YOUR_SPACE_ID`, `YOUR_DELIVERY_TOKEN` and `YOUR_MANAGEMENT_ACCESS_TOKEN` with the values from the previous step.

### Step 4. Import our content model

The project comes with a Contentful set up command that imports the required content model and adds sample content to your space.

Run the following command to import the content model.

```bash
npm run setup
```

### Step 5. Run the project locally

```bash
npm run dev
```

This will start the development server and open the app in a new browser tab.

The page will reload when you make changes.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
