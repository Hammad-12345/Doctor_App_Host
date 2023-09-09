import React from "react";
import 'aos/dist/aos.css'
export default function EmergencyCallComponent() {
    return <>
        <div className="container-fluid pt-5 pb-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-11 text-light pt-5 pb-5" style={{ backgroundColor: '#292929' }}>
                    <div className="row justify-content-center flex-lg-row flex-column align-items-center">
                        <div className="col-lg-5 col-md-8 col-12 d-flex gap-3 align-items-center pt-3 pb-3 justify-content-md-start justify-content-center text-center" data-aos="fade-up">
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/emergency_call_1.svg" alt="" srcset="" data-aos="fade-down" />
                            <div className="d-flex flex-column  gap-2">
                                <div className="fs-3" data-aos="fade-right">
                                    In Case Of Emergency Call
                                </div>
                                <div className="fs-1" style={{ color: '#38f9a5'}} data-aos="fade-down">
                                    (510) 352-6578
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-12 d-flex  align-items-center pt-3 pb-3 justify-content-center ">

                            <div className="d-flex flex-column gap-3">
                                <div className="fs-3" data-aos="fade-left">
                                    Need Doctor For Checkup?
                                </div>
                                <div>
                                    <button className="btn btn_send_now rounded-0 text-uppercase pt-3 pb-3 ps-5 pe-5 text-light" data-aos="fade-down">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 pt-2 pb-2" style={{background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)'}} data-aos="fade-down">

                </div>
            </div>
        </div>
    </>
}