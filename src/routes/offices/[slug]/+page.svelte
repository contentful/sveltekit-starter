<script>
	export let data;
</script>

<h1>{data.office.name}</h1>

<section class="flex">
	<p>{@html data.office.description}</p>
	<img src={data.office.photo.url} alt={data.office.photo.description} />
</section>

<hr />

<section class="center">
	<h2>Come visit us!</h2>
	<iframe
		width="400"
		height="400"
		title="Map"
		frameborder="0"
		scrolling="no"
		marginheight="0"
		marginwidth="0"
		src="https://maps.google.com/maps?q={data.office.location.lat},{data.office.location
			.lon}&z=12&amp;output=embed"
	/>
</section>

<style>
	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}

	.center {
		text-align: center;
	}

	img {
		max-width: 400px;
		height: auto;
	}
</style>
