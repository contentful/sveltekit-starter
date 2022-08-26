<script>
	export let data;
</script>

<h1>Hello</h1>

<a href="/offices">Our offices</a>

<section>
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

<style>
	section {
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
