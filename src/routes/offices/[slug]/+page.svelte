<script>
	import { onMount, onDestroy } from 'svelte';
	import maplibregl from 'maplibre-gl';

	let mapContainer;
	let map;
	let marker;

	onMount(() => {
		const { location } = data.office;

		const center = [location.lon, location.lat];
		map = new maplibregl.Map({
			container: mapContainer,
			style: 'https://demotiles.maplibre.org/style.json', // style URL
			center,
			zoom: 3
		});

		map.on('load', function () {
			marker = new maplibregl.Marker().setLngLat(center).addTo(map);
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});

	export let data;
</script>

<h1>{data.office.name}</h1>

<img src={data.office.photo.url} alt={data.office.photo.description} />

<p>{@html data.office.description}</p>

<div class="map-container" bind:this={mapContainer}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	.map-container {
		width: 400px;
		height: 400px;
	}
</style>
