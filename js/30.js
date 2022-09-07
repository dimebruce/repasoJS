// Fech API - Async Await

const url = "https://rickandmortyapi.com/api/character"

const cunsultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado);
}

cunsultarAPI()