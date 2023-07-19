const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <div className="text-white py-3 flex items-center gap-4 mt-7">
      <img
        className="block w-28"
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt={IMAGEURL}
      />
      <div>
        <p className="text-xl mb-3">
          El precio es de: <span className="font-bold">{PRICE}</span>
        </p>
        <p className="text-sm mb-3">
          El precio más alto del día es: <span className="font-bold">{HIGHDAY}</span>
        </p>
        <p className="text-sm mb-3">
          El precio más bajo del día es: <span className="font-bold">{LOWDAY}</span>
        </p>
        <p className="text-sm mb-3">
          Variación últimas 24 horas: <span className="font-bold">{CHANGEPCT24HOUR}</span>
        </p>
        <p className="text-sm mb-3">
          Última actualización: <span className="font-bold">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};
export default Resultado;
