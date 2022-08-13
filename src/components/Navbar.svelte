<script>
  import { activeSection } from "../stores/store";
  import { navItems } from "../stores/data";
  import { scrollto } from "svelte-scrollto";

  let scrollY;
  let opacity = 0;
  //$: opacity = Math.min(Math.max(scrollY - 500, 0) / 100, 1);
  $: opacity = scrollY > 0 ? 1 : 0;
</script>

<style>
  .navbar {
    position: fixed;
    right: 10vh;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar a {
    margin: 12px;
    text-decoration: none;
    color: #7c7c7c;
    transition: color 0.1s;
  }

  .navbar a:hover {
    text-decoration: underline;
  }

  .navbar a.active {
    color: #ccc;
  }

  .separator {
    display: block;
    height: 25px;
    width: 2px;
    background: #313131;
  }

  @media screen and (max-width: 900px) {
    .navbar {
      top: 0;
      left: 0;
      right: 0;
      transform: none;
      flex-direction: row;
      justify-content: space-around;
      overflow-x: auto;
      padding: 10px;
      background: #181818;
      /* border-bottom: 1px solid #2ada8877; */

      transition: border-bottom-color 0.2s, background 0.2s, opacity 0.2s;
      /* opacity: var(--opacity); */
    }
    .navbar.transparent {
      background: transparent;
      border-bottom-color: transparent;
      opacity: 0.8;
    }
    .navbar a {
      margin: 7px;
      font-size: 14px;
    }
    .separator {
      display: none;
    }
  }
</style>

<svelte:window bind:scrollY={scrollY} />

<div class="navbar" class:transparent={!opacity}>
  {#each navItems as {text, key}, i}
    <a href="#{key}" on:click|preventDefault={()=>{}} use:scrollto={"#" + key} class:active={key === $activeSection}>{text}</a>

    {#if i !== navItems.length - 1}
      <span class="separator"></span>
    {/if}
  {/each}
</div>