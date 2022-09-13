<script>
	export let data;
</script>

<h1>{data.office.name}</h1>

<img src={data.office.photo.url} alt={data.office.photo.description} />

<p>{@html data.office.description}</p>

<div class="map-container">
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
</div>

<style>
	.map-container {
		width: 400px;
		height: 400px;
	}
</style>
