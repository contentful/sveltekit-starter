<script>
	import Footer from '../lib/Footer.svelte';
</script>

<main>
	<slot />
	<Footer />
</main>

<style global>
	@import './global.css';

	main {
		max-width: 940px;
		margin: 0 auto;
	}
</style>
