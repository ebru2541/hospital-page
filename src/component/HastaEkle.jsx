import React, { useState } from "react";

const HastaEkle = ({ dataDoktor, hastaSon}) => {
  console.log(dataDoktor)
  console.log()
    const handleDeleteClick = (e) => {
      e.target.className === "icon" && e.target.closest(".liste").remove();
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 box">
          <div className="img">
            <img
              src={dataDoktor.img}
              width="140px"
              height="140px"
              alt=""
              role="button"
            ></img>
          </div>
          <div className="name">
            <div className="name-box">{dataDoktor.doktor}</div>
          </div>

          <div>
            <h6 className="m-2">Hasta Bilgileri</h6>
            <input type="text" className="w-75 " />
            <h6 className="m-2">Day & Time</h6>
            <input type="date" className="w-75" />
            <br></br>
            <button type="button" class="btn btn-warning mt-3 me-2">
              <span className="text-danger">{dataDoktor.doktor}</span> için
              kayıt oluştur
            </button>
            <br></br>
            <button type="button" class="btn btn-info mt-2">
              Geri Dön
            </button>
          </div>
        </div>
        <div className="col-6 box">
          <div>
            {hastaSon.map(({ text, doktor, day }) => (
              <div className="liste-hasta" role="button">
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
        </div>
      </div>
    </div>
  );
};

export default HastaEkle;
