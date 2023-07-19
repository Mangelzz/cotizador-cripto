import { useEffect, useState } from "react";
import Form from "./components/Form";
import imageCripto from "./img/imagen-criptos.png";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const App = () => {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false)
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <div className="max-w-[900px] mx-auto w-[90%] md:grid md:grid-cols-2 md:gap-8">
      <img
        src={imageCripto}
        alt="imagen cripto"
        className="w-4/5 max-w-[400px] mt-28 mx-auto block"
      />
      <div className="text-center">
        <h1 className="text-white text-3xl text-center font-bold mt-20 mb-12 after:content-[''] after:w-[100px] after:h-2 after:bg-[#66A2FE] after:block after:mt-2 after:mx-auto">
          Cotiza criptomonedas al instante
        </h1>
        <Form setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </div>
  );
};
export default App;
