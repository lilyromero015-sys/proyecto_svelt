<script>
    // @ts-nocheck

    export let numero; //exportamos la variable a numero par para poder llamarlo en app.svelte
    let resultado; //variable local
    $: if (numero === 0) resultado = "neutro";
    else if (numero % 2 === 0) resultado = "par";
    else resultado = "impar";
</script>

<!--las variables las llamamos entre llaves-->
<p>El numero {numero} es {resultado}</p>

<style>
    p {
        color: rgb(34, 5, 112);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
    }
</style>
