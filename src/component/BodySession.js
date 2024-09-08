import React from "react";
import { useNavigate } from 'react-router-dom'; // Import hook untuk navigasi
import "./bodysession.css"; // Import file CSS
import backgroundImage from '../image/background.png'; // Import gambar

export default function BodySession() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleClick = () => {
    localStorage.removeItem('profile');
    localStorage.removeItem('datajob');
    localStorage.removeItem('datacourse');
    localStorage.removeItem('dataskill');
    navigate('/form-session');
  };
  

  return (
    <>
      <div
        className="body-session"
        style={{
          backgroundImage: `url(${backgroundImage})`, 
        }}
      >
        <div className="cv-generator">
          <h1 className="cv-generator-title">CV Generator</h1>
          <p className="cv-generator-text">
            Ubah Data Diri Kalian Menjadi Format CV ATS Secara Otomatis
          </p>
          <p className="cv-generator-text">
            Dev : SuchenDev UGM - Urusan G4W0K Mangkat
          </p>
          <button className="try-it-button" onClick={handleClick}>Try It</button>
         
        </div>
      </div>
    </>
  );
}
