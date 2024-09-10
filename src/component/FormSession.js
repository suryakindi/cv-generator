import React, { useState } from "react";
import "./formsession.css";
import backgroundImage from '../image/background.png'; 
import { Editor } from '@tinymce/tinymce-react'; 
import { useNavigate } from 'react-router-dom';

export default function FormSession() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        SelfDescription : '',
    });
    
    const [formJob, setFormJob] = useState({
        jobCompany: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        jobDescription: '',
        jobDesk : ''
    });

    const [formCourse, setCourse] = useState({
        course: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        
    });

    const [formSkill, setSkill] = useState({
        skill: '',
       
        
    });

    const [dataJob, setDataJob] = useState([]);

    const [dataCourse, setDataCourse] = useState([]);
    const [dataSkill, setDataSkill] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleJobChange = (e) => {
        const { name, value } = e.target;
        setFormJob(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleCourse = (e) => {
        const { name, value } = e.target;
        setCourse(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    const handleSkill = (e) => {
        const { name, value } = e.target;
        setSkill(prevState => ({
          ...prevState,
          [name]: value
        }));
    };



    const handleClickAddJob = () => {
        if(formJob.jobCompany === ''){
            return;
        }
        setDataJob(prevJobs => [
            ...prevJobs,
            {
                company: formJob.jobCompany,
                startMonth: formJob.startMonth,
                startYear: formJob.startYear,
                endMonth: formJob.endMonth,
                endYear: formJob.endYear,
                description: formJob.jobDescription,
                jobDesk : formJob.jobDesk,
            }
        ]);

      
        setFormJob({
            jobCompany: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            jobDescription: '',
            jobDesk : '',
        });
    };

    const handleClickAddCourse = () => {
       
        if(formCourse.course === ''){
            return;
        }
        setDataCourse(prevCourse => [
            ...prevCourse,
            {
                course: formCourse.course,
                startMonth: formCourse.startMonth,
                startYear: formCourse.startYear,
                endMonth: formCourse.endMonth,
                endYear: formCourse.endYear,
               
            }
        ]);

      
        setCourse({
            course: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
        });
        
    };

    const handleskillAdd = () => {
       
        if(formSkill.skill === ''){
            return;
        }
        setDataSkill(PrevSkill => [
            ...PrevSkill,
            {
                skill: formSkill.skill,
               
               
            }
        ]);

      
        setSkill({
            skill: '',
        });
        
    };
    const Generatebutton = (e) => {
        e.preventDefault();
        localStorage.setItem('profile', JSON.stringify(formData));
        localStorage.setItem('datajob', JSON.stringify(dataJob));
        localStorage.setItem('datacourse', JSON.stringify(dataCourse));
        localStorage.setItem('dataskill', JSON.stringify(dataSkill));

        navigate('/pdf-session');

    };
    
    return (
        <div
            className="body-session"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="form-container">
                <form className="data-form">
                    <div><h3>Biodata Dirimu</h3></div>
                    <label htmlFor="name">Nama:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Masukkan nama Anda"
                        onChange={handleChange}
                    />

                    <label htmlFor="address">Alamat:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        placeholder="Masukkan alamat Anda"
                        maxLength="100"
                        onChange={handleChange}
                    ></textarea>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Masukkan email Anda"
                        onChange={handleChange}
                    />

                    <label htmlFor="phone">Telepon:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        placeholder="Masukkan nomor telepon Anda"
                        onChange={handleChange}
                    />

                    <label htmlFor="job-description">Deskripsi Dirimu:</label>
                    <textarea
                        id="SelfDescription"
                        name="SelfDescription"
                        value={formData.SelfDescription}
                        placeholder="Masukkan alamat Anda"
                        maxLength="500"
                        onChange={handleChange}
                    ></textarea>
                    
                        <div><h3>Riwayat Pekerjaan</h3></div>

                    <div>
                        <label htmlFor="job-company">Nama Perusahaan (PT):</label>
                        <input
                            type="text"
                            id="job-company"
                            name="jobCompany"
                            value={formJob.jobCompany}
                            onChange={handleJobChange}
                            placeholder="Masukkan nama perusahaan"
                        />

                        <label htmlFor="job-company">Posisi Pekerjaan:</label>
                        <input
                            type="text"
                            id="job-company"
                            name="jobDesk"
                            value={formJob.jobDesk}
                            onChange={handleJobChange}
                            placeholder="Masukkan Posisi Pekerjaan"
                        />

                        <label htmlFor="job-period">Periode Bekerja:</label>
                        <div className="job-period">
                            <input
                                type="text"
                                id="job-start-month"
                                name="startMonth"
                                value={formJob.startMonth}
                                onChange={handleJobChange}
                                placeholder="Bulan Mulai"
                            />
                            <input
                                type="text"
                                id="job-start-year"
                                name="startYear"
                                value={formJob.startYear}
                                onChange={handleJobChange}
                                placeholder="Tahun Mulai"
                            />
                            <span>-</span>
                            <input
                                type="text"
                                id="job-end-month"
                                name="endMonth"
                                value={formJob.endMonth}
                                onChange={handleJobChange}
                                placeholder="Bulan Akhir"
                            />
                            <input
                                type="text"
                                id="job-end-year"
                                name="endYear"
                                value={formJob.endYear}
                                onChange={handleJobChange}
                                placeholder="Tahun Akhir"
                            />
                        </div>

                        <label htmlFor="job-description">Deskripsi Pekerjaan:</label>
                        <Editor
                            id="job-description"
                            name="jobDescription"
                            apiKey="ghz9kqci2fk9u6dfht8jh4ycyl43sj9snrvlrwg4gsdp5jt6"
                            value={formJob.jobDescription}
                            init={{
                                height: 150,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | ' +
                                    'alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist outdent indent | removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={(content) => setFormJob(prevState => ({ ...prevState, jobDescription: content }))}
                        />

                        <br />
                        <button type="button"  className="add-button" onClick={handleClickAddJob}>Add +</button>

                        <div>
                            {dataJob.length > 0 && (
                                <>
                                    <h6>Daftar Pekerjaan</h6>
                                    <ul>
                                        {dataJob.map((job, index) => (
                                            <li key={index}>
                                                <small>Company: {job.company}</small> <br />
                                                <small>Period: {job.startMonth}/{job.startYear} - {job.endMonth}/{job.endYear}</small> <br />
                                                <small>Description: <span dangerouslySetInnerHTML={{ __html: job.description }} /></small> 
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                    </div>

                    <div><h3>Riwayat Pendidikan</h3></div>

                    <div>
                        <label htmlFor="job-company">Intansi Pendidikan:</label>
                        <input
                            type="text"
                            id="job-company"
                            name="course"
                            value={formCourse.course}
                            onChange={handleCourse}
                            placeholder="Masukkan nama perusahaan"
                        />

                        <label htmlFor="job-period">Periode:</label>
                        <div className="job-period">
                            <input
                                type="text"
                                id="job-start-month"
                                name="startMonth"
                                value={formCourse.startMonth}
                                onChange={handleCourse}
                                placeholder="Bulan Mulai"
                            />
                            <input
                                type="text"
                                id="job-start-year"
                                name="startYear"
                                value={formCourse.startYear}
                                onChange={handleCourse}
                                placeholder="Tahun Mulai"
                            />
                            <span>-</span>
                            <input
                                type="text"
                                id="job-end-month"
                                name="endMonth"
                                value={formCourse.endMonth}
                                onChange={handleCourse}
                                placeholder="Bulan Akhir"
                            />
                            <input
                                type="text"
                                id="job-end-year"
                                name="endYear"
                                value={formCourse.endYear}
                                onChange={handleCourse}
                                placeholder="Tahun Akhir"
                            />
                        </div>

                       

                        <br />
                        <button type="button" className="add-button" onClick={handleClickAddCourse}>Add +</button>

                        <div>
                            {dataCourse.length > 0 && (
                                <>
                                    <h6>Daftar Pendidikan</h6>
                                    <ul>
                                        {dataCourse.map((course, index) => (
                                            <li key={index}>
                                                <small>Pendidikan: {course.course}</small> <br />
                                                <small>Period: {course.startMonth}/{course.startYear} - {course.endMonth}/{course.endYear}</small> <br />
                                               
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                    </div>


                    <div><h3>Keahlian </h3></div>

                    <div>
                        <label htmlFor="job-company">Keahlian:</label>
                        <input
                            type="text"
                            id="job-company"
                            name="skill"
                            value={formSkill.skill}
                            onChange={handleSkill}
                            placeholder="Keahlian"
                        />

                       

                        <br />
                        <button type="button" className="add-button" onClick={handleskillAdd}>Add +</button>

                        <div>
                            {dataSkill.length > 0 && (
                                <>
                                    <h6>Daftar Keahlian</h6>
                                    <ul>
                                        {dataSkill.map((skill, index) => (
                                            <li key={index}>
                                                <small>Keahlian: {skill.skill}</small> <br />
                                                
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                    </div>

                    <br />
                    <button className="submit-button" onClick={Generatebutton}>Generate</button>
                </form>
            </div>
        </div>
    );
}
