<script>
	export let data;
</script>

<h1>Hello offices</h1>

<section>
	{#each data.offices as office}
		<a href={`/offices/${office.slug}`}>
			<figure>
				<img src={office.photo.url} alt={office.photo.description} />
				<figcaption>
					<p>{office.name}</p>
				</figcaption>
			</figure>
		</a>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 30px;
	}

	figure {
		box-shadow: 0 0 10px 0 #e2e6e8;
	}

	a:hover img,
	a:active img {
		filter: sepia(0.6);
	}

	figcaption {
		text-align: center;
		padding: 10px;
	}
</style>
