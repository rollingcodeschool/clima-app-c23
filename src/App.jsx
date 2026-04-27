import CardClima from "./components/CardClima"
import Formulario from "./components/Formulario"
import Error from "./components/Error"


function App() {

  return (
<div className="min-h-screen bg-linear-to-b from-[#000830] to-[#01165d] text-white flex flex-col items-center p-8">
  <h1 className="text-3xl font-semibold">Clima App</h1>
  <span className="text-2xl">☁️</span>
  <Formulario></Formulario>
  <CardClima></CardClima>
  <Error></Error>
</div>
  )
}

export default App
