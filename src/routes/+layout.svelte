<script>
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';
</script>

<main>
	<Header />
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
