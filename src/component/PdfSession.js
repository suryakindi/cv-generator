import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./pdfsession.css";

const PdfSession = () => {
  const cvRef = useRef(null);
  const storageKeys = ['profile', 'datajob', 'datacourse', 'dataskill'];

  const isStorageEmpty = storageKeys.every(key => localStorage.getItem(key) === null);

  if (isStorageEmpty) {
    return null;
  }

  const profile = JSON.parse(localStorage.getItem('profile'));
  const job = JSON.parse(localStorage.getItem('datajob'));
  const course = JSON.parse(localStorage.getItem('datacourse'));
  const skill = JSON.parse(localStorage.getItem('dataskill'));

  useEffect(() => {
   
    window.print();
  }, []);

  return (
    <>
      
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
            {job.map((jobdetail, index) => (
              <div key={index} className="cv-item">
                <h3>{jobdetail.jobDesk}</h3>
                <p>{jobdetail.company} ({jobdetail.startMonth}/{jobdetail.startYear} - {jobdetail.endMonth}/{jobdetail.endYear})</p>
                <p>Description: <span dangerouslySetInnerHTML={{ __html: jobdetail.description }} /></p>
              </div>
            ))}
          </section>
          <section className="cv-section">
            <h2>Education</h2>
            {course.map((coursedetail, index) => (
              <div key={index} className="cv-item">
                <p>{coursedetail.course} ({coursedetail.startMonth}/{coursedetail.startYear} - {coursedetail.endMonth}/{coursedetail.endYear})</p>
              </div>
            ))}
          </section>
          <section className="cv-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              {skill.map((skilldetail, index) => (
                <li key={index}>{skilldetail.skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default PdfSession;
