import React, { useState } from "react";
import data from "../helpers/hastalar";

const HastaListe = (e) => {
  const [toggle, setToggle] = useState("");

  const [dataSon, setDataSon] = useState([]);

  const handleDivClick = ({ e, id, text, day, bittiMi, doktor }) => {
    const h2 = e.target.querySelectorAll("h2");
    const h3 = e.target.getElementsByTagName("h3");
    setToggle(bittiMi);

    if (toggle) {
      if (e.target.className === "liste") {
        h2.forEach((item) => {
          item.style.color = "green";
          item.style.textDecoration = "none";
        });
        e.target.style.backgroundColor = "rgb(155, 119, 173)";
        h3[0].style.display = "none";
      }
    } else {
      h2.forEach((item) => {
        item.style.color = "red";
        item.style.textDecoration = "line-through";
      });
      e.target.style.backgroundColor = "rgb(163, 74, 157)";
      h3[0].style.display = "flex";
      h3[0].style.color = "red";
    }

    const newA = new Object({
      id: id,
      text: text,
      day: day,
      bittiMi: toggle,
      doktor: doktor,
    });

    setDataSon(newA);
    console.log("datas", dataSon);
    setToggle(!toggle);
  };

  const handleDeleteClick = (e) => {
    e.target.className === "icon" && e.target.closest(".liste").remove();
  };
  return (
    <div>
      {data.map(({ id, text, day, bittiMi, doktor }) => (
        <div
          className="liste"
          onClick={(e) => handleDivClick({ e, bittiMi, text, day, doktor, id })}
          role="button"
          key={id}
        >
          <div className="bilgi">
            <h2>{text}</h2>
            <p className="text-light">{day}</p>
            <h2>{doktor}</h2>
          </div>
          <div className="durum">
            <h3>Hasta Tedavi Edildi.</h3>
          </div>
          <div className="icon" onClick={handleDeleteClick}>
            ❌
          </div>
        </div>
      ))}
    </div>
  );
};

export default HastaListe;
