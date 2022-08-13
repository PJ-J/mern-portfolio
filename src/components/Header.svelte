<script>
  import { scrollto } from "svelte-scrollto";  
  import { activeSection } from "../stores/store";
  export let state;
  
  $: if (state > 0.1) activeSection.update(() => "start");
  </script>
  
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
      background: url("../assets/immo-wegmann-S-de8PboZmI-unsplash.jpg");
      background-size: cover;
      background-position-x: left;
      position: relative;
      z-index: -2;
    }
  
    header .background::before {
      content: "";
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
  
  
  <div class="header-wrapper">
    <header style="--state:{state}">
      <div class="background"></div>
      <div style="text-align: center">
        <h1 class="title font-bebas text-offWhite" id="start">
          PJ Jones
        </h1>
        <h2 class="subtitle font-bebas text-offWhite">
          I do stuff
        </h2>        
      </div>
      <div class="scroll" use:scrollto={"#about"}>
        scroll down<br>
        &darr;
      </div>
    </header>
  </div>