import React, { useState } from "react";
import 'aos/dist/aos.css'
export default function OurDepartment() {
    const [Department]=useState([
        {
            imgpath:"https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/bandages.svg",
            departmentname:"Eye Treatment"
            
        },
        {
            imgpath:"https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/pills_3.svg",
            departmentname:"Nuclear Magnetic"
            
        },
        {
            imgpath:"https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/heartbeats.svg",
            departmentname:"Traumatology"
            
        },
        {
            imgpath:"https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/wheelchairs.svg",
            departmentname:"Infantile Paralysis"
            
        },
    ])
 
    return <>
        <div className="container-fluid mb-5" style={{marginTop:"-80px"}}>
            <div className="row justify-content-center gx-0">
                <div className="col-11 ">
                    <div className="row gx-0 gap-lg-5 gy-lg-0 gy-5">
                        <div className="col-lg-2 col-12  text-uppercase fs-3 text-light fw-bold d-flex flex-column align-items-center justify-content-center  pt-5 pb-5" style={{ background: 'linear-gradient(90deg, #4facfe, #39b3d7,#39b3d7)',height:"230px"}} data-aos="fade-right">
                            <div>Our</div>
                            <div>Departments</div>
                        </div>
                        {
                            Department.map(Element=>
                                (
                                    <>
                                    <div className="col-lg-2 col-sm-6 col-12 d-flex flex-column align-items-center justify-content-center shadow pt-lg-0 pb-lg-0 pt-4 pb-4 overall" data-aos="fade-down">
                                        <div className="mb-4 ">
                                            <img src={Element.imgpath} alt="" srcset="" />
                                        </div>
                                        <div>{Element.departmentname}</div>
                                    </div>
                                    </>
                                ))
                        }
                     
                    </div>

                </div>
            </div>
        </div>
    </>
}