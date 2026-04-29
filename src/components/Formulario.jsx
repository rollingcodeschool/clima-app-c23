import React, { useState } from "react";
import CardClima from "./CardClima";
import Error from "./Error";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [climaData, setClimaData] = useState({});
  const APIKey = import.meta.env.VITE_CLIMA_API_KEY;

  const consultarAPI = async (data) => {
    try {
      console.log(data);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${APIKey}&units=metric&lang=es`,
      );
      console.log(response);
      if (response.ok) {
        const datosRespuesta = await response.json();
        setClimaData(datosRespuesta);
        console.log(datosRespuesta);
      } else {
        setClimaData({});
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrio un error, vuelve a intentarlo en otro momento");
    }
  };

  return (
    <>
      <form
        className="my-9 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 "
        onSubmit={handleSubmit(consultarAPI)}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Ciudad</label>
          <input
            type="text"
            className="bg-slate-950 border border-gray-700 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ej: San Miguel de Tucumán"
            {...register("city", {
              required: "La ciudad es obligatoria",
            })}
          />
          <p className="text-sm text-red-500">{errors.city?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">País</label>
          <select
            className="bg-slate-950 border border-gray-700 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("country", {
              required: "El país es obligatorio",
            })}
          >
            <option value="AR">Argentina</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
          </select>
          <p className="text-sm text-red-500">{errors.country?.message}</p>
        </div>
        <div className="flex gap-2 md:col-span-2 ml-auto">
          <button
            className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded transition shadow-md cursor-pointer"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
      {Object.keys(climaData).length > 0 ? <CardClima></CardClima> : <Error />}
    </>
  );
};

export default Formulario;
