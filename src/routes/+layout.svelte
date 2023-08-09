<script>
	import { page } from '$app/stores';
	import '../styles.css';
	import TheMovieDB from '$lib/images/TheMovieDB.svg';
	import logo from '$lib/images/logo.svg';
</script>

<nav>
	<a href="/">
		<img alt="svelteflix" src={logo} />
	</a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/waitlist">waitlist</a>
		<a href="/login">Log In</a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>
		Data provided by
		<a href="https://www.themoviedb.org/">
			<img src={TheMovieDB} alt="The movie DB logo" />
		</a>
	</p>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
		margin: 0 auto;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	img {
		height: 1rem;
	}
	.links {
		display: flex;
		gap: 1rem;
	}
	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}
	footer {
		display: flex;
		justify-content: center;
		height: 5rem;
	}
</style>
