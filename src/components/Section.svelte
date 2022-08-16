<script>
  import { onMount } from "svelte";
  import { activeSection } from "../stores/store";

  export let title = "",
    key;
    // debug = false;

  let scrollY, height, width, contentHeight, el, bottom, state;

  $: top = el?.getBoundingClientRect()?.top + scrollY;
  $: bottom = el?.getBoundingClientRect()?.bottom + scrollY;

  // $: debug && console.log(top, scrollY);

  $: if (scrollY - top + 400 > 0 && scrollY - top < height) {
    activeSection.update(() => key);
  }

  let exitState = 1;
</script>

<style>
  .section-wrapper {
    margin-top: 0;
    opacity: var(--opacity);
    height: var(--height);
  }

  .section {
    padding-top: min(200px, 10vh);
    padding-bottom: 100px;
    max-width: 100%;
  }

  .section.sticky {
    position: fixed !important;
    top: calc((1 - var(--exitState)) * -10vh);
    width: var(--width);
  }

  .title {
    top: 0;
    left: 0;
    font-size: 80px;
    margin: 0;
    color: white;
    opacity: 0.3;
  }

  .content {
    top: 150px;
    margin-left: 4px;
    font-size: 18px;
  }

  @media screen and (max-width: 900px) {
    .title {
      font-size: 50px;
    }
    .content {
      margin-left: 1px;
    }
  }
</style>

<svelte:window bind:scrollY={scrollY} />

<div 
  class="section-wrapper" 
  bind:clientHeight={height} 
  bind:clientWidth={width}
  bind:this={el} 
  style="--opacity:{exitState}; --exitState:{exitState}; --height:{contentHeight}px; --width:{width}px"
  id="{key}"
>
  <div class="section" class:sticky={exitState < 1} bind:clientHeight={contentHeight}>
    <h1 class="title" id={title}>{title}</h1>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</div>