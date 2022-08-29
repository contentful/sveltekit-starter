<script>
	export let data;
</script>

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

<section>
	<h2>Job listings</h2>

	<p>
		Want to sync your website to the software that your recruitment team uses? Use
		<a href="https://www.contentful.com/marketplace/">a Contentful integration</a> or create your own!
	</p>
</section>

<style>
	.team {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 20px;
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
