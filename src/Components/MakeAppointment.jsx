import React, { useState } from "react";
import 'aos/dist/aos.css'
export default function MakeAppointment () {
    const [showtext, updatetext] = useState(false)
    const [FormFields, UpdatefField] = useState({
        Name: "",
        Email: "",
        Phone_Number: "",
        Department: "",
        Request: ""

    })
    const SetField = (e) => {
        UpdatefField({ ...FormFields, [e.target.name]: e.target.value })
    }
    const Submit = () => {
        if (FormFields.Name === "" || FormFields.Email === "" || FormFields.Phone_Number === "" || FormFields.Department === "" || FormFields.Request === "") {
            updatetext(true)
        }
        else {
            updatetext(false)

        }
    }
    return <>
        <div className="container-fluid  mb-5  text-light">
            <div className="row  align-items-end ">
                <div className="col-md-6 col-12 ps-md-3 pe-md-3 d-flex flex-column gap-4 pt-5 pb-5 " data-aos="fade-up" style={{ backgroundColor: '#292929',}}>
                    <h3 className="fw-bold fs-5 text-uppercase" style={{ color: "#38f9a5" }}> Appointment</h3>
                    <h1 className="fw-bold display-5">Make An Appointment</h1>
                    <div className="w-25" style={{height:"4px",  background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)'}}></div>
                      
                    <p className="fs-4">A wonderful serenity has taken possession of my.</p>
                    <form className="row gy-5">
                        <div className="col-md-6 col-12">
                            <input type="text" placeholder="Your Name *" name="Name" value={FormFields.Name} className="form-control footer_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="email" placeholder="Your email *" name="Email" value={FormFields.Email} className="form-control footer_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="text" placeholder="Phone Number *" name="Phone_Number" value={FormFields.Phone_Number} className="form-control footer_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-md-6 col-12">
                            <input type="text" placeholder="Department *" name="Department" value={FormFields.Department} className="form-control footer_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder="Request *" name="Request" value={FormFields.Request} className="form-control footer_input ps-0" onChange={SetField} />
                        </div>
                    </form>
                    <div className="d-flex justify-content-between  align-items-center mt-4">
                        <button className="btn btn_send_now text-uppercase text-light   ps-5 pe-5 pt-4 pb-4 rounded-0" onClick={Submit}>Send now</button>
                        <div className="rounded-circle" style={{ width: "50px", height: "50px", backgroundColor: "#444", position: "relative" }}>
                            <div className="rounded-circle" style={{ width: "6px", height: "6px", backgroundColor: "white", position: "absolute", top: "5px", left: "10px", }}></div>
                        </div>
                    </div>


                    <p className="text-danger">
                        {
                            showtext && <>One or more fields have an error. Please check and try again.</>
                        }
                    </p>
                </div>
                <div className="col-md-6 col-12 ps-md-0 pe-md-0" data-aos="fade-down">
                   <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_56-1.jpg" className="w-100" style={{height:"800px"}} alt="" srcset="" />
                </div>
            </div>
        </div>
    </>
}