// Fech API - Multiple

const url = "https://rickandmortyapi.com/api/character"
const url2 = "https://rickandmortyapi.com/api/episode"

const cunsultarAPI = async () => {

    const inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado);

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    const fin = performance.now()
    console.log(`Tiempo de Primero ${fin-inicio}`);


}

cunsultarAPI()

const cunsultarAPI2 = async () => {
    const inicio = performance.now()

    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()
    console.log(resultado);
    console.log(resultado2);
    const fin = performance.now()
    console.log(`Tiempo de Segundo ${fin-inicio}`);
}

cunsultarAPI2()