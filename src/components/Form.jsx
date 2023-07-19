import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMoneda from "../hooks/useSelectMoneda";
import Error from "./Error";

const Form = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMoneda("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMoneda(
    "Elige la criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptomonedas = resultado.Data.map((criptomoneda) => {
        const objeto = {
          id: criptomoneda.CoinInfo.Name,
          nombre: criptomoneda.CoinInfo.FullName,
        };

        return objeto;
      });
      setCriptos(arrayCriptomonedas);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({ moneda, criptomoneda });

  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <input
          className="bg-[#9497FF] w-full p-3 text-white font-bold uppercase text-xl rounded-md cursor-pointer hover:bg-[#7A7DFE] transition-all mt-8"
          type="submit"
          value="Cotizar"
        />
      </form>
    </>
  );
};
export default Form;
