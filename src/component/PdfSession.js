import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./pdfsession.css"; 
import { json } from "react-router-dom";

const PdfSession = () => {

const cvRef = useRef(null);
const storageKeys = ['profile', 'datajob', 'datacourse', 'dataskill'];

const isStorageEmpty = storageKeys.every(key => localStorage.getItem(key) === null);

if (isStorageEmpty) {
return;
}


  const profile = JSON.parse(localStorage.getItem('profile'));
  const job = JSON.parse(localStorage.getItem('datajob'));
  const course = JSON.parse(localStorage.getItem('datacourse'));
  const skill = JSON.parse(localStorage.getItem('dataskill'))


  const handleDownloadPDF = () => {
    const input = cvRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("CV.pdf");
    });
  };

  return (
    <>
     <button className="download-btn" onClick={handleDownloadPDF}>
        Download as PDF
      </button>
    <div>
      <div className="cv-container" ref={cvRef}>
        <header className="cv-header">
          <h1>{profile.name}</h1>
          <small><span>{profile.address} - {profile.email} - {profile.phone} </span></small>
        </header>
        <section className="cv-section">
         <p>{profile.SelfDescription}</p>
        </section>
        <section className="cv-section">
          <h2>Work Experience</h2>
          {
            job.map((jobdetail, index) => (
                <div className="cv-item">
                    <h3>{jobdetail.jobDesk}</h3>
                    <p>{jobdetail.company} ({jobdetail.startMonth}/{jobdetail.startYear} - {jobdetail.endMonth}/{jobdetail.endYear})</p>
                    <p>Description: <span dangerouslySetInnerHTML={{ __html: jobdetail.description }} /></p> 
                </div>
            ))
        }

         
        </section>
        <section className="cv-section">
          <h2>Education</h2>

        {
            course.map((coursedetail, index) => (
                <div className="cv-item">
                    <p>{coursedetail.course} ({coursedetail.startMonth}/{coursedetail.startYear} - {coursedetail.endMonth}/{coursedetail.endYear})</p>
                </div>
            ))
        }
          
        </section>
        <section className="cv-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            {
                skill.map((skilldetail, index) => (
                    <li>{skilldetail.skill}</li>
                ))
            }
          </ul>
        </section>
      </div>
     
    </div>
    </>
  );
};

export default PdfSession;
