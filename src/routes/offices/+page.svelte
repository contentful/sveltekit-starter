<script>
	import Header from '../../lib/Header.svelte';
	import Card from './Card.svelte';

	export let data;
</script>

<Header />

<h2>Cities</h2>

<section>
	{#each data.offices as office}
		<Card photo={office.photo} name={office.name} slug={office.slug} />
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 30px;
		max-width: var(--max-width);
		margin: 0 auto;
	}
</style>
