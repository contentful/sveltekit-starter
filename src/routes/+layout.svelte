<script>
  import Footer from '../lib/Footer.svelte'
  import Nav from '../lib/Nav.svelte'
</script>

<Nav />
<main>
  <slot />
  <Footer />
</main>

<style global>
  @import './global.css';
</style>
