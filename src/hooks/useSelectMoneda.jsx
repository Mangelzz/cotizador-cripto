import { useState } from "react";

const useSelectMoneda = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <label className="text-white block text-2xl font-bold my-4">
        {label}
      </label>
      <select
        className="w-full text-xl p-4 rounded-xl"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">--Seleccione--</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectMonedas];
};
export default useSelectMoneda;
