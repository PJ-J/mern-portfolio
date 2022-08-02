<script>
	import Icon from '../components/Icon.svelte';
</script>

<body>
	<main class="container mx-auto my-6 flex place-content-center">
		<div class="flex flex-col place-items-center">
			<h1 class="font-shrikhard text-prettyBig text-offWhite text-center">PJ Jones</h1>
			<div class="relative bg-offWhite h-36 w-full rounded-lg">
        <h2 class="absolute top-5 -left-7 font-bebas text-veryBig text-dblue text-center">Developer</h2>
				<h2 class="absolute top-2 -left-5 font-bebas text-veryBig text-coral text-center">Developer</h2>
			</div>
			<Icon name="tomato" width="10rem" />
			<Icon name="leaf1" height="60rem" class="absolute top-12 -z-10" />
		</div>
	</main>
</body>
