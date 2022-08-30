<script>
	import Callout from '../lib/Callout.svelte';
	import Hero from '../lib/Hero.svelte';

	export let data;
</script>

<Hero />

<h2>Our team</h2>

<section class="team">
	{#each data.employees as employee}
		<figure>
			<img src={employee.photo.url} alt={employee.photo.description} />
			<figcaption>
				<p><strong>{employee.name}</strong> — {employee.jobTitle}</p>
				<p>
					<em>Joined in {employee.startDate} </em>
				</p>
			</figcaption>
		</figure>
	{/each}
</section>

<Callout>
	Want to sync your website to the software that your recruitment team uses? Use
	<a href="https://www.contentful.com/marketplace/">a Contentful integration</a> or create your own!
</Callout>

<style>
	.team {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 20px;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
