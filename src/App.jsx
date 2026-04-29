import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import { useEffect, useState } from "react";

function App() {
  // const [personaje, setPersonaje] = useState({});
  // // este useEffect funciona solo en montaje
  // useEffect(() => {
  //   solicitarPersonajeAPI();
  // }, []);

  // const solicitarPersonajeAPI = async() => {
  //   console.log("aqui llamo a la api");
  //   // solicitar un personaje o el Clima
  //   // Dejo el link de la api del clima https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires,AR&appid=TU_API_KEY&units=metric&lang=es
  //   const response = await fetch("https://dragonball-api.com/api/characters/1");
  //   console.log(response);
  // };

  return (
    <main className="min-h-screen bg-linear-to-b from-[#000830] to-[#01165d] text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-semibold mb-5">
        Clima App <span>⛅</span>
      </h1>

      <Formulario></Formulario>
  
      {/* <Error></Error> */}
    </main>
  );
}

export default App;
