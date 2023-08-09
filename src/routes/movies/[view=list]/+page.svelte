<script lang="ts">
	import ResulstsPage from '$lib/components/ResulstsPage.svelte';

	export let data;
</script>

<div class="column">
	<h1>{data.title}</h1>

	<ResulstsPage movies={data.movies} next="/movies/{data.view}?page" />
</div>
