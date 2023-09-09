import React from "react";
import 'aos/dist/aos.css'
export default function CareAmenities() {
    return <>
      <div className="container-fluid mb-5 text-light pt-5 pb-5" style={{ backgroundColor: '#292929'}} data-aos="fade-up">
        <div className="row justify-content-center ">
            <div className="col-11 pt-5 pb-5">
                <div className="row align-items-center">
                    <div className="col-xl-6  d-flex flex-column gap-4 pe-sm-5 pt-4 pb-4">
                        <h3 className="fs-sm-5 fs-6 fw-bold text-center text-sm-start"  style={{ color: "#4facfe" }} data-aos="fade-left">CARE & AMENITIES</h3>
                        <h1 className="fw-bold text-center text-sm-start" style={{fontSize:"50px"}} data-aos="fade-down">Why Choose Us?</h1>
                        <div className="w-25 m-sm-0 m-auto" style={{height:"4px",  background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)'}} data-aos="fade-right"></div>
                        <p className="mb-5 pe-md-5 fs-sm-5 fs-6 text-center text-sm-start" data-aos="fade-up">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy wit.</p>
                        <ul class="list-group footer_ul pe-sm-5 fs-sm-5 fs-6  text-center text-sm-start" data-aos="fade-down">
                                <li class="list-group-item fs-sm-5 fs-6 ">my entire soul, like these sweet</li>
                                <li class="list-group-item fs-sm-5 fs-6">mornings of spring which I enjoy with my whole heart.</li>
                                <li class="list-group-item fs-sm-5 fs-6">serenity has taken possession</li>
                                
                            </ul>
                        <button className="btn btn_send_now mt-4 rounded-0 text-uppercase text-light pt-3 pb-3 ps-5 pe-5 align-self-sm-start align-self-center" data-aos="fade-left">Read more</button>
                    </div>
                    <div className="col-xl-6 position-relative pt-4 pb-4 flex-column gap-4 d-flex align-items-center">
                    <div className=" d-lg-none d-block col-xl-12 col-md-8 col-12  pt-4 pb-4 ps-4 pe-4" style={{ fontWeight: 400,background: 'linear-gradient(90deg, #4facfe, #39b3d7,#39b3d7)' }} data-aos="fade-down">
                    <div className="row justify-content-center gx-0 flex-xl-row flex-column gap-xl-0 gap-5  align-items-center">
                    <div className="col-xl-6 col-md-8 col-12  ">
                    <div className="d-flex gap-3 align-items-center justify-content-lg-start justify-content-center">
                        <div>
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Person.svg" alt="" srcset="" data-aos="fade-up"/>
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <div className="fs-sm-1 fs-3"  data-aos="fade-up">
                                +2500
                                </div>
                                <div className="fs-sm-5 fs-6 text-uppercase">
                              Satisfied patients
                                </div>
                            </div>

                    </div>
                </div>
                <div className="col-xl-6 col-md-8 ">
                   <div className="d-flex gap-3 align-items-center justify-content-lg-start justify-content-center">
                        <div>
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Drugstore.svg" alt="" srcset="" data-aos="fade-left" />
                        </div>
                        <div className="d-flex flex-column gap-1 ">
                            <div className="fs-sm-1 fs-3 ">
                                +256
                                </div>
                                <div className="fs-sm-5 fs-6 text-uppercase">
                             CLINIC OF BEDS
                                </div>
                            </div>

                    </div>
                </div>
                    </div>

                </div> 
                        <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_54-1.jpg" className="w-100" alt="" srcset=""  data-aos="fade-left" />

                        <div className="position-absolute d-lg-block d-none top-100 start-50 translate-middle  col-xl-12 col-lg-6 col-10 pt-4 pb-4 ps-4 pe-4" style={{ fontWeight: 400,background: 'linear-gradient(90deg, #4facfe, #39b3d7,#39b3d7)' }}  data-aos="fade-down">
                    <div className="row justify-content-center gx-0 flex-xl-row flex-column gap-xl-0 gap-5  align-items-center">
                    <div className="col-xl-6 col-lg-8 col-12  ">
                    <div className="d-flex gap-3 align-items-center justify-content-md-start justify-content-center">
                        <div>
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Person.svg" alt="" srcset=""  data-aos="fade-up"/>
                        </div>
                        <div className="d-flex flex-column gap-1 "  data-aos="fade-down">
                            <div className="fs-1 ">
                                +2500
                                </div>
                                <div className="fs-5 text-uppercase">
                              Satisfied patients
                                </div>
                            </div>

                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-12">
                   <div className="d-flex gap-3 align-items-center justify-content-md-start justify-content-center">
                        <div>
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Drugstore.svg" alt="" srcset=""   data-aos="fade-right"/>
                        </div>
                        <div className="d-flex flex-column gap-1 "  data-aos="fade-left">
                            <div className="fs-1 ">
                                +256
                                </div>
                                <div className="fs-5 text-uppercase">
                             CLINIC OF BEDS
                                </div>
                            </div>

                    </div>
                </div>
                    </div>

                </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
}