import React from "react";
import OurTeam from "./OurTeam";
import 'aos/dist/aos.css'
export default function AboutUsComponents() {
    return <>
        <div className="d-flex justify-content-center  pt-5 pb-5  " style={{ fontWeight: 600, fontSize: '2.3rem', backgroundColor: "#eeeeee" }} data-aos="fade-down" >About</div>
        <div className="container-fluid mt-5 mb-5 pt-5 pb-5">
            <div className="row ps-md-5 pe-md-5 ps-2 pe-2 align-items-center gy-5 gx-3">
                <div className="col-md-6  d-flex flex-column gap-4" data-aos="fade-left">
                    <div className="fs-5" style={{ color: "#4facfe" }}>WHO WE ARE</div>
                    <div>
                        <div className="fw-bold display-4" > Choose Our </div>
                        <div className="fw-bold display-4">Hospital Take Care</div>

                    </div>
                </div>
                <div className="col-md-6 ps-md-3 pe-md-3" data-aos="fade-right">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </div>
                <div className="col-lg-4 ps-2 pe-2 col-md-6" data-aos="fade-down">
                    <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/young-female-doctor-with-stethoscope-PL5Z97Q.jpg" className="w-100" alt="" srcset="" />
                </div>
                <div className="col-lg-4 ps-2 pe-2 col-md-6" data-aos="fade-up">
                    <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-3Group-59.jpg" className="w-100" alt="" srcset="" />
                </div>
                <div className="col-lg-4 " style={{ fontWeight: 400 }} data-aos="fade-left">
                    <div className="row justify-content-center gx-0">
                        <div className="col-lg-11   d-flex flex-column gap-4 ps-4 pe-4 pt-5 pb-5 OpeningTiming  text-light">
                            <h3 className="text-uppercase pt-2 pb-2 ">Opening Hours</h3>
                            <div className="d-flex justify-content-between pt-2 pb-2">
                                <span>Monday</span>
                                <span>8:00 - 21.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Tuesday</span>
                                <span>8:00 - 21.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Wenesday</span>
                                <span>8:00 - 21.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Thursday</span>
                                <span>8:00 - 21.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Friday</span>
                                <span>8:00 - 21.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Saturday/Sunday</span>
                                <span>8:00 - 21.00</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6  mt-5 mb-5 pt-5 pb-5" data-aos="fade-down">
                    <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-1Group-57-1.jpg" className="w-100" alt="" srcset="" />
                </div>
                <div className="col-lg-6 mt-5 mb-5 pt-5 pb-5 d-flex flex-column gap-4 ps-md-4 pe-md-4" data-aos="fade-up">
                    <h4 className="text-uppercase" style={{ color: "#4facfe" }}>our experience</h4>
                    <h1 className="fw-bold display-4">Has Been Working Since 2000</h1>
                    <p style={{ color: "rgb(107 107 107 / 96%)" }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.

                    </p>
                    <button className="btn btn_send_now align-self-start text-uppercase text-light pt-3 pb-3 ps-5 pe-5 rounded-0 mt-5 mb-5">Read more</button>
                </div>
                <div className="col-lg-6 col-12 mt-5 mb-5 pt-5 pb-5 pe-lg-5  d-flex flex-column gap-4 " data-aos="fade-down">
                    <h4 className="text-uppercase" style={{ color: "#4facfe" }}>Advance services</h4>
                    <h1 className="fw-bold display-4">We Care About You</h1>
                    <p style={{ color: "rgb(107 107 107 / 96%)" }}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful.
                    </p>
                    <div className="row gy-5 flex-md-row justify-content-center gx-0">
                    <div className="col-md-6    ps-4 pe-4 pt-4 pb-4  advanceservices d-md-block d-flex flex-column justify-content-center align-items-center" data-aos="fade-left">
                        <h4>Family Care</h4>
                        <p>enjoy with my whole, like these sweet.</p>
                    </div>
                    <div className="col-md-6  ps-4 pe-4 pt-4 pb-4 advanceservices d-md-block d-flex flex-column justify-content-center align-items-center" data-aos="fade-right">
                        <h4>Dental Care</h4>
                        <p>enjoy with my whole, like these sweet.</p>
                    </div>
                    <div className="col-md-6  ps-4 pe-4  pt-4 pb-4 advanceservices d-md-block d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
                        <h4>Body Surgery</h4>
                        <p>enjoy with my whole, like these sweet.</p>
                    </div>
                    <div className="col-md-6  ps-4 pe-4 pt-4 pb-4 advanceservices d-md-block d-flex flex-column justify-content-center align-items-center" data-aos="fade-down">
                        <h4>Family Care</h4>
                        <p>enjoy with my whole, like these sweet.</p>
                    </div>
                    </div>

                </div>
                <div className="col-lg-6 mt-5 mb-5 pt-5 pb-5" data-aos="fade-up">
                    <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-Group-56.jpg" className="w-100" alt="" srcset="" />
                </div>
                <OurTeam/>

            </div>
        </div>


    </>
}