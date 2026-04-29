const CardClima = ({climaData}) => {
  
  return (
    <div className="w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center shadow-2xl">
      <h2 className="text-xl font-medium mb-2">{climaData.name}, {climaData.sys.country}</h2>

      <div className="flex flex-col items-center mb-6">
        <img className="size-24" src={`https://openweathermap.org/img/wn/${climaData.weather[0].icon}@2x.png`} alt={climaData.weather[0].main}></img>
        <p className="text-5xl font-bold">{climaData.main.temp} °C</p>
        <p className="text-gray-300 text-sm mt-2">
          Sensación térmica {climaData.main.feels_like} °C. 
        </p>
        <p className="text-gray-300 text-sm mt-2">
          {climaData.weather[0].description}
        </p>
      </div>

      <hr className="border-white/10 my-6" />

      <div className="grid grid-cols-2 gap-y-4 text-left text-sm text-gray-200">
        <div>Temperatura mínima: {climaData.main.temp_min} °C</div>
        <div>Temperatura máxima: {climaData.main.temp_max} °C</div>
        <div>Humedad: {climaData.main.humidity} %</div>
        <div>Presión: {climaData.main.pressure}  hPa</div>
      </div>
    </div>
  );
};

export default CardClima;
