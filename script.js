//API: interfaz de aplicaciones https://pokeapi.co/
//A: application
//P: pprograming
//I: interface
console.log('Peticiones')

//callback
// const obtener = () => {
//     console.log('obtener')
// }
//obtener()

const buttonObtener = document.getElementById('button-obtener')
//Agregar evento al boton
//buttonObtener.addEventListener("click", obtener)

buttonObtener.addEventListener('click', async () => {
    console.log('obtener')
    const pokemonData = await obtenerPokemon()

    const pokemonArticle = document.getElementById('pokemon')
    //Crea un elemento HTML
    const h3 = document.createElement('h3')
    //le asigna un texto al elemento
    h3.innerText = pokemonData.name
    //Agregar un elemento como hijo
    pokemonArticle.appendChild(h3)

    //crear elemento imagen
    const img = document.createElement('img')
    img.src = pokemonData.sprites.front_default
    pokemonArticle.appendChild(img)
 })  
    


const obtenerPokemon = async () => {
    let nombrePokemon = "pikachu"
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    //const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await respuesta.json()
    console.log(data)
    return data
}



