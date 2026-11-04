<script>
  import Paises from "./lib/paises.svelte";
  const lista = ["colombia", "venezuela", "ecuador", "peru", "brasil", "chile"];
</script>

<div class="main">
  {#each lista as pais}
    <div>
      <Paises {pais} />
    </div>
  {:else}
    no existen elementos
  {/each}
</div>
<svelte:head>
  <title>Paises de sudamerica</title>
</svelte:head>

<style>
  .main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid: gap 10px;
    grid-auto-rows: minimax(100px, auto);
  }
</style>
