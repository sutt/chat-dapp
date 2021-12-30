<script>
	import Answer from './Answer.svelte'
import Nested from './Nested.svelte';
	import MyNested from './Nested.svelte'
	let name = 'world';
	let count = 0
	const src = 'assets/rick.gif'
	let string = `here's some <strong>HTML</strong>`
	const myClick = (e) => {count++}
	$: doubled = count * 2
	let quadrupled = count * 4
	// $: if (count > -1) alert("hey")
	const myObject = {
		attribute1: "atta-boy-1",
		attribute2: false
	}
	const nums = [13,17,26]
</script>

<h1>Hello {name.toUpperCase()}</h1>
<!-- <Answer answer={count}/>
<Answer {...myObject}/> -->
<ul class="listicle">
	{#each nums as num}
		<li>{num}</li>
	{/each}
</ul>
<!-- <p>string as html</p>
<p>{@html string}</p> -->
<p>my-nested:</p>
<MyNested />

	<button on:click={myClick}>
		{#if (count < 1)}
			Click to get started
		{:else}
			Click me {count} times
		{/if}
	</button>

<p>Doubled: {doubled}</p>
<p>Quadrupled: {quadrupled} (no $)</p>

<!-- {console.log("yo"); null} -->
<!-- <img src={src} alt="should worked tho"> -->

<style>
	h1 {
		color: purple
	}
</style>