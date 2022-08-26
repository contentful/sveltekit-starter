<script>
	export let data;
</script>

<h1>Hello offices</h1>

<section>
	{#each data.offices as office}
		<figure>
			<img src={office.photo.url} alt={office.photo.description} />
			<figcaption>
				<p>{office.name}</p>
			</figcaption>
		</figure>
	{/each}
</section>

<style>
</style>
