import React, { useState } from "react";


const HastaListe = ({hastaSon, setHastaSon}) => {
  const [toggle, setToggle] = useState(false);
console.log(hastaSon)
  // const [dataSon, setDataSon] = useState(data);

  const handleDeleteClick = (id) => {
    const deleteLis = hastaSon.filter((del) => del.id !== id);
    setToggle(!toggle);
    setHastaSon(deleteLis);
  };

  const handleDivClick = (id) => {
    const uptadeList = hastaSon.map((doktor) => {
      if (doktor.id === id) {
        return {
          ...doktor,
          bittiMi: !doktor.bittiMi,
        };
      }
      return doktor;
    });

    setHastaSon(uptadeList);
  };

  return (
    <div className="box">
      {hastaSon?.map(({ id, text, day, bittiMi, doktor }) => (
        <>
          <div
            className="liste"
            onClick={() => handleDivClick(id)}
            role="button"
            key={id}
            disabled={toggle ? "disabled" : " "}
          >
            <div className="bilgi">
              <h2 className={bittiMi ? "text-danger" : ""}>{text}</h2>
              <p className="text-light">{day}</p>
              <h2 className={bittiMi ? "text-danger" : ""}>{doktor}</h2>
            </div>
            <div className="durum">
              <h3 className={bittiMi ? "text-danger" : ""}>
                Hasta Tedavi Edildi.
              </h3>
            </div>
            <div
              className="icon"
              role="button"
              onDoubleClick={(e) => handleDeleteClick(id, e)}
            >
              ❌
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HastaListe;
