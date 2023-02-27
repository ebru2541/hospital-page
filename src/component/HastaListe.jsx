import React, { useState } from "react";
import data from "../helpers/hastalar";

const HastaListe = (e) => {
  const [toggle, setToggle] = useState(false);

  const [dataSon, setDataSon] = useState(data);

  const handleDeleteClick = (id) => {
    const deleteLis = dataSon.filter((del) => del.id != id);
    console.log(deleteLis);
    setToggle(!toggle)
   
    setDataSon([...deleteLis]);
  };

  const handleDivClick = (id) => {
    const uptadeList = dataSon.map((doktor) => {
      if (doktor.id == id) {
        return {
          ...doktor,
          bittiMi: !doktor.bittiMi,
        };
      }
      return doktor;
    });

    setDataSon(uptadeList);
  };

  return (
    <div>
      {dataSon.map(({ id, text, day, bittiMi, doktor }) => (
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
            onClick={(e) => handleDeleteClick(id)}
          >
            ❌
          </div>
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
