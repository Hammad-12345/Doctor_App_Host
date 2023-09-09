import React from "react";
import 'aos/dist/aos.css'
export default function MedicalCenter() {
    return <>
        <div className="medicalcenter">
            <div className="container-fluid mt-5 mb-5 pt-5 pb-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-7 col-12 d-flex flex-column gap-4">
                        <div className="d-flex justify-content-between align-items-center gap-4">
                            <div style={{height:"5px",width:"160px",  background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)'}} data-aos="fade-up"></div>
                            <h3 style={{flex:"1"}} className="fw-bold " data-aos="fade-left">Medical Center</h3>
                        </div>
                        <h1 className="fw-bold text-center text-sm-start" style={{fontSize:"70px"}} data-aos="fade-up">Take Care of Your Health Now</h1>
                        <p className="text-center text-sm-start" data-aos="fade-right">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which</p>
                        <button className="btn btn_send_now text-uppercase text-light rounded-0 align-self-sm-start align-self-center pt-3 pb-3 ps-5 pe-5" data-aos="fade-down">Read more</button>
                    </div>
                    <div className="col-lg-6 col-md-8 col-12" data-aos="fade-left">
                        <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Nurse-with-Sethscope-e1590486457246.png" className="w-100" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}