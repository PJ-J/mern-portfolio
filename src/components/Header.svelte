<script>
	import { scrollto } from 'svelte-scrollto';
	import { activeSection } from '../stores/store';
  import { draw } from 'svelte/transition';
	export let state;
  let show = false;

	$: if (state > 0.1) activeSection.update(() => 'start');
</script>

<div class="header-wrapper">
	<header style="--state:{state}">
		<div class="background -z-20" />
		<div style="text-align: center">
			<h1 class="title font-bebas text-offWhite" id="start">PJ Jones</h1>
			<h2 class="subtitle font-bebas text-offWhite">I do stuff</h2>
		</div>
    <div class="flex flex-col place-items-center">
      <div class="m-4 h-[263px]">
      {#if show}
      <svg width="189" height="263" viewBox="0 0 189 263" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path transition:draw={{ delay:500 }} d="M13.0786 123.465C26.5796 102.651 50.9327 91.7052 61.4217 88.8339C83.7826 105.288 109.648 104.479 119.785 102.018C132.583 100.19 142.111 94.2249 145.275 91.4708C180.996 112.988 187.817 150.596 186.762 166.71C186.762 193.29 170.941 218.804 163.03 228.238C140.107 254.396 106.366 260.818 92.3613 260.759C68.3128 262.588 43.0807 245.348 33.4706 236.5C7.87517 214.983 1.82789 181.008 2.00369 166.71C2.00369 143.365 9.387 128.153 13.0786 123.465Z" stroke="#06DD8F" stroke-width="3"/>
        <path transition:draw d="M83.5717 57.1911C83.5717 40.8775 86.8531 23.3217 88.4939 16.583C95.385 31.6308 96.2874 54.73 95.8772 64.3987C98.4086 58.2107 110.292 43.3035 115.918 36.6234C123.231 36.6234 128.34 45.413 129.981 49.8078C115.39 55.7848 107.655 82.1537 112.226 82.1537C115.882 82.1537 130.508 68.2075 137.364 61.2344C139.614 48.8586 131.622 39.6704 127.344 36.6234C121.578 30.8573 117.324 23.5561 115.918 20.6262C117.746 23.8608 126.055 29.0057 129.981 31.1738C138.595 36.6234 142.814 49.8078 144.572 49.8078C146.33 49.8078 153.361 36.6234 153.713 31.1738C153.994 26.8141 149.611 19.63 147.385 16.583C151.744 18.8331 155.881 25.3726 157.405 28.3611C161.061 33.002 158.928 44.5926 157.405 49.8078C155.576 54.5894 149.963 61.5274 147.385 64.3987L150.549 79.8684C149.002 89.2909 139.239 95.9828 134.552 98.1509C126.817 105.042 103.436 104.069 92.7129 102.722C81.0402 104.972 58.6677 88.4237 48.9404 79.8684C35.4395 74.3837 32.2987 48.7531 32.4159 36.6234C34.9473 22.4193 41.4399 15.4696 44.3698 13.7703C39.9133 20.2394 39.1143 26.193 39.2718 28.3611C37.7249 43.2683 42.0259 56.488 44.3698 61.2344C47.3231 68.5474 67.5159 81.2748 77.2431 86.7244C75.4149 76.1768 64.4102 61.2344 57.0269 43.8309C56.1831 33.1427 51.2844 11.1334 48.9404 1.46475C64.9376 19.2198 70.3872 52.0931 83.5717 57.1911Z" stroke="#06DD8F" stroke-width="3"/>
        <path transition:draw={{ delay:1000 }} d="M63.0039 165.655C71.02 160.874 74.5476 145.732 75.3094 138.759C61.3866 133.696 58.6091 129.032 58.9606 127.333C45.8816 128.036 35.5802 139.462 32.0643 145.088C33.6113 150.15 53.3353 160.909 63.0039 165.655Z" stroke="#06DD8F" stroke-width="3"/>
        </svg>
        {/if}
      </div>
        <div>
          <button class="text-coral font-bebas bg-offWhite p-2 rounded border border-coral" on:click={() => show = !show}>
            Draw tomato
          </button>
        </div>
    </div>
		<div class="scroll" use:scrollto={'#about'}>
			scroll down<br />
			&darr;
		</div>
	</header>
</div>

<style>
	.header-wrapper {
		margin-bottom: 100vh;
	}
	header {
		display: flex;
		width: 100%;
		height: 100vh;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		position: fixed;
		top: calc(-1 * (20vh - (20vh * var(--state))));
		bottom: 0;
		left: 0;
		right: 0;
	}

	header * {
		opacity: var(--state);
	}

	header .background {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: url('../assets/immo-wegmann-S-de8PboZmI-unsplash.jpg');
		background-size: cover;
		background-position-x: left;
		position: relative;
		z-index: -2;
	}

	header .background::before {
		content: '';
		display: block;
		position: fixed;
		z-index: -1;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: inherit;
		filter: brightness(0.2);
		opacity: max(var(--state) * 2);
		transform: scale(calc(1 - var(--state) + 1));
	}

	.scroll {
		position: absolute;
		bottom: calc(250px - (var(--state) * 150px));
		text-align: center;
		color: #ddd;
		opacity: calc((var(--state) * 1) - 0.5);
		cursor: pointer;
		transition: opacity 0.1s;
	}
	.scroll:hover {
		color: white;
	}

	/* img {
      width: 180px;
      margin-right: 30px;
    } */
	.title {
		font-size: 70px;
		margin: 0;
	}
	/* .title .highlight {
      color: #2ada87;
    } */
	.subtitle {
		font-size: 28px;
		font-weight: 500;
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		.title {
			font-size: 50px;
		}
		.subtitle {
			font-size: 22px;
		}
		.scroll {
			font-size: 14px;
		}
	}
</style>
