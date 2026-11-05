<script>
    // @ts-nocheck
    const banderas = import.meta.glob("../assets/*.webp", {
        eager: true,
        import: "default",
    });
    export let pais;
    let p;
    /*[0]=Nombre_pais[1]=capita [2]=poblacion [3]=moneda [4]area [5]=bandera*/
    const paises = {
        colombia: [
            "Colombia",
            "Bogota",
            "51,52 millones",
            "peso colombiano",
            "1,142 millones km²",
            "Flag_of_Colombia.svg.webp",
        ],
        venezuela: [
            "Venezuela",
            "Caracas",
            "28,2 millones",
            "Bolivar",
            "916.44 m²",
            "Flag_of_Venezuela.svg.webp",
        ],
        ecuador: [
            "Ecuador",
            "Quito",
            "17,8 millones",
            "Dolar estadounidense",
            "256.370 km²",
            "Flag_of_Ecuador.svg.webp",
        ],
        peru: [
            "Peru",
            "Lima",
            "33,72 millones",
            "Sol peruano",
            "1.285.215 km²",
            "Flag_of_Peru_(1825–1884).svg.webp",
        ],
        brasil: [
            "Brasil",
            "Brasilia",
            "214,millones ",
            "Real brasileño",
            "8,51 millones km²",
            "Flag_of_Brazil.svg.webp",
        ],
        chile: [
            "Chile",
            "Santiago",
            "19,6 millones",
            "Peso chileno",
            "756.102 km²",
            "Flag_of_Chile.svg.webp",
        ],
    };
    p = paises[pais];
</script>

<div class="main">
    <div class="col1">
        <img
            src={banderas["../assets/" + p[5]]}
            alt="bandera_colombia"
            width="300"
            height="200"
        />
    </div>
    <div class="col2">
        <div class="linea"><strong>Pais:</strong>{p[0]}</div>
        <div class="linea"><strong>Capital:</strong>{p[1]}</div>
        <div class="linea"><strong>Poblacion:</strong>{p[2]}</div>
        <div class="linea"><strong>Moneda:</strong>{p[3]}</div>
        <div class="linea"><strong>Extension:</strong>{p[4]}</div>
    </div>
</div>

<style>
    .main {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        grid-auto-rows: minmax(100px, auto);
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(186, 190, 182);
        border-width: 2px;
        margin-left: auto;
        width: 600px;
        box-shadow: 5px 5px 5px black;
        margin-right: 5px;
        margin-bottom: 10px;
    }
    .col1 {
        grid-column: 1;
        grid-row: 1;
        margin: 5px;
    }
    .col2 {
        grid-column: 2;
        grid-row: 1;
        margin: 5px;
        border-color: black;
        width: max-content;
    }
    strong {
        color: blue;
        font-weight: bolder;
    }
    .linea {
        font-size: 20px;
        margin-bottom: 18px;
    }
</style>
