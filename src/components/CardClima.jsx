const CardClima = () => {
  return (
    <div className="w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center shadow-2xl">
      <h2 className="text-xl font-medium mb-2">San Miguel de Tucumán, AR</h2>

      <div className="flex flex-col items-center mb-6">
        <img className="size-24" src={`https://openweathermap.org/img/wn/01n@2x.png`}></img>
        <p className="text-5xl font-bold">10 °C</p>
        <p className="text-gray-300 text-sm mt-2">
          Sensación térmica 9.61 °C. 
        </p>
        <p className="text-gray-300 text-sm mt-2">
          Nubes
        </p>
      </div>

      <hr className="border-white/10 my-6" />

      <div className="grid grid-cols-2 gap-y-4 text-left text-sm text-gray-200">
        <div>Temperatura mínima: 10 °C</div>
        <div>Temperatura máxima: 10 °C</div>
        <div>Humedad: 100%</div>
        <div>Presión: 1024 hPa</div>
      </div>
    </div>
  );
};

export default CardClima;
