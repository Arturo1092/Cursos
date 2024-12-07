// const getUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error al obtener usuario:", error)
//     }
// };

// getUsers();

// const getPokemon = async (name) => {
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//         if (!response.ok) throw new Error("Pokemon no encontrado");
//         const data = await response.json();
//         console.log (`Nombre: ${data.name}, Tipo: ${data.types[0].type.name}`)
//     }catch (error) {
//         console.error("Error:", error.message);
//     }
// };

// getPokemon("latios")

const getClima = async () => {
    try {
        const response = await fetch ("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true");
        const data = await response.json();

        const{temperature, windspeed} = data.current_weather;
        console.log (`Temperatura: ${temperature}°C`);
        console.log (`Velocidad del viento: ${windspeed} m/s`);
    } catch (error) {
        console.log ("Error al obtener el clima ", error)
    }
};

getClima();