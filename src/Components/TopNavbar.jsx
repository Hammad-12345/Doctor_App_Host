import React, { useEffect } from "react";
import FixThing from "./SomeFixItems";
import  AOS  from "aos";
import 'aos/dist/aos.css'
export default function TopNavbar() {
    useEffect(()=>
    {
        AOS.init({duration:2000})
    },[])
    return <>
    <FixThing/>
        <div className="container-fluid pt-4 pb-4 bg-dark text-light">
            <div className="row justify-content-md-end justify-content-start align-items-lg-center flex-sm-row flex-column gap-sm-0 gap-4">
                <div className="col-xl-4 col-lg-5 col-5  d-md-block d-none" data-aos="fade-up">
                    <div className="d-flex gap-2 ">
                        <div>
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/hospital-location.svg" alt="" srcset="" />
                        </div>
                        <p>
                            Patricia C. Amedee 4401 Waldeck Street
                            Grapevine Nashville, TX 76051</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-md-6 col-12 d-sm-block d-flex justify-content-center" data-aos="fade-down">
                    <div className="d-flex gap-2">
                        <div>
                            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/emergency_call_1.svg" height={"50px"} alt="" srcset="" />
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <div>
                                (001) 88451234
                            </div>
                            <div>
                                (001) 88455438
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-12 d-sm-block d-flex justify-content-center" data-aos="fade-right">
                    <button className="btn btn-light text-dark rounded-0 text-uppercase ps-4 pe-4 pt-2 pb-2 fw-bold  appointmentbutton">
                        appointment
                    </button>
                </div>

            </div>
            <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/footer.jpg" className="logo d-lg-inline-block d-none" alt="" srcset="" data-aos="fade-left" />
        </div>
  

    </>
}