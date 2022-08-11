<script>
	import Icon from '../components/Icon.svelte';
	import { fade, blur, slide, scale, fly, draw } from 'svelte/transition';
	import {
		bounceIn,
		bounceOut,
		elasticOut,
		elasticIn,
		elasticInOut,
		bounceInOut,
		quintOut
	} from 'svelte/easing';
	import { spring } from 'svelte/motion';
	let isActive = true;
	let isDeveloper = true;

	const customAnimateFunction = () => {
		return {
			css: (t) => {
				return `
					transform: scale(${t});
				`;
			},
			easing: bounceOut,
			duration: 1000
		};
	};

	function drag(node) {
		let x;
		let y;

		const coords = spring({
			x: 0,
			y: 0
		});

		coords.subscribe((current) => {
			node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
		});

		node.addEventListener('mousedown', mousedown);

		function mousedown(event) {
			x = event.clientX;
			y = event.clientY;

			window.addEventListener('mouseup', mouseup);
			window.addEventListener('mousemove', mousemove);
		}

		function mouseup() {
			window.removeEventListener('mouseup', mouseup);
			window.removeEventListener('mousemove', mousemove);

			coords.update(() => {
				return { x: 0, y: 0 };
			});

			node.dispatchEvent(
				new CustomEvent('dragstop', {
					detail: { x, y }
				})
			);

			x = 0;
			y = 0;
		}

		function mousemove(event) {
			const dx = event.clientX - x;
			const dy = event.clientY - y;

			x = event.clientX;
			y = event.clientY;

			coords.update((current) => {
				return {
					x: current.x + dx,
					y: current.y + dy
				};
			});
		}
	}
</script>

<!-- this can be added to any node to apply this function -->
<!-- on:dragstop={event => {
	if (event.detail.x > 300) {
		isActive = false;
	}
}} -->

<body class="selection:opacity-0">
	<main class="container mx-auto my-6 flex place-content-center selection:none">
		<div class="flex flex-col place-items-center">
			<h1 use:drag class="font-shrikhard text-prettyBig text-offWhite text-center cursor-grabbing">
				PJ Jones
			</h1>
			<div use:drag on:click={() => (isDeveloper = !isDeveloper)} class="cursor-grabbing">
				<div class="relative bg-offWhite h-36 w-[600px] rounded-lg">
					{#if isDeveloper}
						<h2
							transition:scale={{ duration: 800 }}
							class="absolute top-5 left-2 font-bebas text-veryBig text-dblue text-center"
						>
							Developer
						</h2>
						<h2
							transition:scale={{ duration: 500 }}
							class="absolute top-2 font-bebas text-veryBig text-coral text-center"
						>
							Developer
						</h2>
					{:else}
						<h2
							transition:scale={{ duration: 800 }}
							class="absolute top-5 left-10 font-bebas text-veryBig text-dblue text-center"
						>
							Designer
						</h2>
						<h2
							transition:scale={{ duration: 500 }}
							class="absolute top-2 left-8 font-bebas text-veryBig text-coral text-center"
						>
							Designer
						</h2>
					{/if}
				</div>
			</div>
			<div class="m-4 h-[160px]">
				{#if isActive}
					<div
						class="cursor-grabbing"
						transition:scale={{ easing: bounceOut, duration: 1000, opacity: 1 }}
						use:drag
					>
						<Icon name="tomato" width="165px" />
					</div>
				{/if}
			</div>
			<button on:click={() => (isActive = !isActive)} class="font-shrikhard"
				>{#if isActive}Hide Tomato{:else}Show Tomato{/if}</button
			>
			<div class="absolute neon -z-10">
				<Icon name="leaf1" height="960px" class="" />
			</div>
			<div class="relative">
				<div class="blink2">
					<Icon name="tomatoOutline" height="300px" class="absolute right-[-100px]" />
				</div>
				<div class="blink">
					<Icon name="tomatoOutline" height="300px" class="absolute right-[100px]" />
				</div>
				<div class="blink3">
					<Icon name="tomatoOutline" height="300px" class="absolute left-0" />
				</div>
			</div>
		</div>
	</main>
</body>

<style>
	:root {
		/* Base font size */

		/* Set neon color */
		--neon-text-color: #f57b7b;
		--neon-border-color: #06dd8f;
		--off-white: #e7e1c5;
		--neon-off-red: #371f1f;
	}

	button {
		font-size: 2rem;
		color: var(--off-white);
		padding: 1rem 1rem 1rem;
		border: 0.1rem solid var(--off-white);
		border-radius: 1rem;
		text-transform: uppercase;
		animation: flicker 1.5s infinite alternate;
	}

	button::-moz-selection {
		background-color: var(--neon-border-color);
		color: var(--neon-text-color);
	}

	button::selection {
		background-color: var(--neon-border-color);
		color: var(--neon-text-color);
	}

	button:focus {
		outline: none;
	}

	.neon {
		filter: drop-shadow(0 0 5px var(--neon-border-color));
		animation: flickerSvg 5s infinite alternate;
	}

	.blink {
		/* filter: drop-shadow(0 0 5px var(--neon-border-color)); */
		animation: blink 3s infinite;
	}
	.blink2 {
		opacity: 0;
		/* filter: drop-shadow(0 0 5px var(--neon-border-color)); */
		animation: blink 3s infinite;
		animation-delay: .6s;
	}
	.blink3 {
		opacity: 0;
		/* filter: drop-shadow(0 0 5px var(--neon-border-color)); */
		animation: blink 3s infinite;
		animation-delay: 1.2s;
	}

	/* Animate neon flicker */
	@keyframes flicker {
		0%,
		19%,
		21%,
		23%,
		25%,
		54%,
		56%,
		100% {
			text-shadow: -0.2rem -0.2rem 1rem var(--off-white), 0.2rem 0.2rem 1rem var(--off-white),
				0 0 1rem var(--neon-text-color), 0 0 2rem var(--neon-text-color),
				0 0 3rem var(--neon-text-color), 0 0 4rem var(--neon-text-color),
				0 0 5rem var(--neon-text-color);

			box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem var(--neon-border-color),
				inset 0 0 2rem var(--neon-border-color), 0 0 4rem var(--neon-border-color),
				inset 0 0 4rem var(--neon-border-color);
		}

		20%,
		24%,
		55% {
			text-shadow: none;
			box-shadow: none;
		}
	}
	/* Animate neon flicker */
	@keyframes flickerSvg {
		0%,
		19%,
		21%,
		23%,
		25%,
		54%,
		56%,
		100% {
			filter: drop-shadow(0 0 5px var(--neon-border-color));
		}

		20%,
		24%,
		55% {
			filter: drop-shadow(0 0 0 var(--neon-border-color));
		}
	}

	@keyframes blink {
		0%,
		30%,
		100% {
			/* filter: invert(0%) sepia(83%) saturate(7432%) hue-rotate(209deg) brightness(0%) contrast(115%); */
			opacity: 0;
		}

		25% {
			filter: drop-shadow(0 0 5px var(--neon-text-color));
			opacity: 1;

			/* color: var(--neon-text-color); */
		}
	}
</style>
