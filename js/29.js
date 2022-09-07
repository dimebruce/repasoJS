// Fech API

const url = "https://rickandmortyapi.com/api/character"

const cunsultarAPI = () => {
    fetch(url)
        .then( (respuesta) => {
            return respuesta.json()
        })
        .then( (resultado) => {
            console.log(resultado);
        })
}

cunsultarAPI()