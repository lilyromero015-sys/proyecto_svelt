<script>
  //importamos el componente parimpar.svelte y lo llamamos parImpar
  import ParImpar from "./lib/parImpar.svelte";
  let valor = 0;
  //escuchamos el evento "imput"
  /** @param {any} event */
  // El signo + convierte automáticamente el texto "0" en el número 0
  const listenInput = (event) => (valor = +event.target.value);
</script>

<main>
  <!--llamamos al componente ingresando un numero impar en este caso 5-->
  <ParImpar numero={valor} />
  <!--en el elemento imput se coloca en value la variable valor que vale 0-->
  <!--tambien se llama el evento on:input para que reaccione al ingresar el numero-->
  <input value={valor} on:input={listenInput} />
</main>
