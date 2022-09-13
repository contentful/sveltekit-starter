<script>
	export let photo;
	export let slug;
	export let name;
</script>

<a href={`/offices/${slug}`}>
	<figure>
		<img src={photo.url} alt={photo.description} />
		<figcaption>
			<p>{name}</p>
		</figcaption>
	</figure>
</a>

<style>
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
