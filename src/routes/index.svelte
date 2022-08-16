<script>
	import Main from '../components/Main.svelte';
	// import { onMount } from 'svelte';
	// export let loaded = false;

	
	// $:setTimeout(() => {
	// 		loaded = true;
	// 	}, 1000);
	

	// onMount(() => {
	// const removeWatermark = () => {
	//   const ids = [];
	//   const iframes = document.body.querySelectorAll("iframe");
	//   for (const iframe of iframes) {
	//     if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
	//   }
	//   for (const id of ids) {
	//     const node = document.createElement("div");
	//     node.style.setProperty("display", "none", "important");
	//     node.id = id;
	//     document.getElementById(id).remove();
	//     document.body.appendChild(node);
	//   }
	// };

	// document.querySelector(".loader").remove();

	// setTimeout(removeWatermark, 1000);

	// });
</script>

<!-- {#if loaded} -->
	<body class="loaded">
		<Main />
	</body>
<!-- {:else} -->
	<!-- <body>
		<Main />
	</body> -->
<!-- {/if} -->

<style>
	body {
		color: #b9b9b9;
		font-family: Roboto Mono;
		margin: 0;
	}

	body::before {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border: 50vw solid var(--neon-border-color);
		z-index: 10000;
		pointer-events: none;
		transition: border-width 0.5s ease, opacity 0.5s ease;
	}

	body.loaded::before {
		border-width: 15px;
		/* z-index: -1; */
	}

	/* :global(*) {
		box-sizing: border-box;
	}

	:global(a[href]) {
		color: inherit;
		text-decoration: underline;
	}

	:global(b, strong) {
		color: #ddd;
	} */

	@media screen and (max-width: 900px) {
		:global(body.loaded::before) {
			border-width: 4px;
			opacity: 0;
		}
	}
</style>
