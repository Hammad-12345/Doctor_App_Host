import React, { useState } from "react";
import 'aos/dist/aos.css'
export default function ContactusComponent() {
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
        <div className="d-flex justify-content-center  pt-5 pb-5  " style={{ fontWeight: 600, fontSize: '2.3rem', backgroundColor: "#eeeeee" }} data-aos="fade-left">Contact</div>

        <div className="container-fluid mt-5 mb-5 pt-5 pb-5">
            <div className="row gx-0 align-items-center">
                <div className="col-md-5 col-12 ps-md-3 pe-md-3 d-flex flex-column gap-3" data-aos="fade-right">
                    <h3 className="fw-bold fs-5" style={{ color: "#4facfe" }}>Contact us</h3>
                    <h1 className="fw-bold display-4">Please Get In Touch</h1>
                    <p className="fs-4">A wonderful serenity has taken possession of my.</p>
                    <form className="row gy-5">
                        <div className="col-md-6 col-12" data-aos="fade-up">
                            <input type="text" placeholder="Your Name *" name="Name" value={FormFields.Name} className="form-control contact_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-md-6 col-12" data-aos="fade-down">
                            <input type="email" placeholder="Your email *" name="Email" value={FormFields.Email} className="form-control contact_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-md-6 col-12" data-aos="fade-left">
                            <input type="text" placeholder="Phone Number *" name="Phone_Number" value={FormFields.Phone_Number} className="form-control contact_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-md-6 col-12" data-aos="fade-right">
                            <input type="text" placeholder="Department *" name="Department" value={FormFields.Department} className="form-control contact_input ps-0" onChange={SetField} />
                        </div>
                        <div className="col-12" data-aos="fade-up">
                            <input type="text" placeholder="Request *" name="Request" value={FormFields.Request} className="form-control contact_input ps-0" onChange={SetField} />
                        </div>
                    </form>
                    <div className="d-flex justify-content-between  align-items-center mt-4">
                        <button className="btn btn_send_now text-uppercase text-light   ps-5 pe-5 pt-3 pb-3 rounded-0" onClick={Submit} data-aos="fade-down">Send now</button>
                        <div className="rounded-circle" style={{ width: "50px", height: "50px", backgroundColor: "#444", position: "relative" }}>
                            <div className="rounded-circle" style={{ width: "6px", height: "6px", backgroundColor: "white", position: "absolute", top: "5px", left: "10px", }} data-aos="fade-down"></div>
                        </div>
                    </div>


                    <p className="text-danger" data-aos="fade-up">
                        {
                            showtext && <>One or more fields have an error. Please check and try again.</>
                        }
                    </p>
                </div>
                <div className="col-md-7 col-12 ps-md-3 pe-md-3" >
                    <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Patricia%20C.%20Amedee%204401%20Waldeck%20Street%20Grapevine%20Nashville,%20TX%207605+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html" data-aos="fade-up">distance maps</a></iframe>
                    <div className="row gx-0 pt-4 pb-4  text-light" style={{ background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)'}}>
                        <div className="col-lg-6 col-12 d-flex gap-2 ps-3 pe-3 pt-3 pb-3" data-aos="fade-down">
                        <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/hospital-location.svg" alt="" srcset="" />
                        <p data-aos="fade-left">
                            Patricia C. Amedee 4401 Waldeck Street
                            Grapevine Nashville, TX 76051</p>
                    
                        </div>
                        <div className="col-lg-6 col-12 d-flex gap-2 ps-3 pe-3 pt-3 pb-3">
                        <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/emergency_call_1.svg" height={"50px"} alt="" srcset="" data-aos="fade-right" />
                        <div className="d-flex flex-column gap-1" >
                            <div data-aos="fade-down">
                                (001) 88451234
                            </div>
                            <div data-aos="fade-up">
                                (001) 88455438
                            </div>

                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}