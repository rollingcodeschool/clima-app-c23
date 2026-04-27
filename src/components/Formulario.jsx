import React from "react";

const Formulario = () => {
  return (
    <form className="mt-9">
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Ciudad</label>
          <input
            type="text"
            className="bg-[#1a1a1a] border border-gray-700 rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ej: San Miguel de Tucumán"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">País</label>
          <select className="bg-[#1a1a1a] border border-gray-700 rounded p-2 focus:outline-none">
            <option>Argentina</option>
          </select>
        </div>
        <div className="flex gap-2 md:col-span-2">
          <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded transition shadow-md">
            Buscar
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition shadow-md">
            Resetear
          </button>
        </div>
      </section>
    </form>
  );
};

export default Formulario;
