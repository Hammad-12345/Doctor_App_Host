import React, { useState } from "react";
import 'aos/dist/aos.css'
export default function OurServices() {
    const [Ourservices] = useState([
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/stethoscope.svg",
            ServocesName: "Family Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'

        },
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/injection.svg",
            ServocesName: "Family Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'

        },
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/infusion.svg",
            ServocesName: "Family Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'

        },
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/pills_1.svg",
            ServocesName: "Health Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'

        },
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/bandages.svg",
            ServocesName: "New Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'
        },
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/heartbeats.svg",
            ServocesName: "Surgical Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'
        },
        {
            imgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/wheelchairs.svg",
            ServocesName: "Teeth Care",
            Title: 'A wonderful serenity has taken possession of my entire soul, like.'
        },


    ])
    const [Newdata, UpdateNewData] = useState([Ourservices[0], Ourservices[1], Ourservices[2]])
    const [Previousdatastate, updatepreviousdata] = useState([])
    let [NumberState, UpdateNumber] = useState(2)
    const [caretstate] = useState(Ourservices.length > 3)

    const Nextdata = () => {
        if (NumberState !== Ourservices.length - 1) {
            if (Ourservices[++NumberState]) {
                Previousdatastate.push(Newdata[0])
                updatepreviousdata([...Previousdatastate])
                Newdata.splice(0, 1)
                Newdata.push(Ourservices[NumberState])
                UpdateNewData([...Newdata])
                UpdateNumber(NumberState)
            }
        }
    }
    const Previousdata = () => {
        if (Ourservices.length > 3) {
            if (Previousdatastate.length > 0) {
                Newdata.splice(2, 1)
                Newdata.unshift(Previousdatastate[Previousdatastate.length - 1])
                Previousdatastate.splice(Previousdatastate.length - 1, 1)
                updatepreviousdata([...Previousdatastate])
                UpdateNewData([...Newdata])
                NumberState--
                UpdateNumber(NumberState)

            }
        }

    }
  
    return <>
        <div className="container-fluid pt-5 pb-5">
            <div className="row justify-content-center pt-5 pb-5 ">
                <h3 className="d-flex justify-content-center  mb-3 fs-5 fw-bold" style={{ color: "#4facfe" }} data-aos="fade-up">our services</h3>
                <h1 className="d-flex justify-content-center text-center text-sm-start mb-3 fw-bold" style={{ fontSize: "50px" }} data-aos="fade-right">High-Quality Services</h1>
                <div className="w-25 mt-3" style={{ height: "4px", background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)' }} data-aos="fade-down"></div>
                <div className="col-11 mt-5 mb-5 pt-5 pb-5 ps-4 pe-4">
                    <div className="row  justify-content-between gx-5">
                        {
                            Newdata.map(Element =>
                            (
                                <>
                                    <div className="col-lg-4 col-md-6 d-flex flex-column gap-4 shadow align-items-center justify-content-center ps-5 pe-5 pt-4 pb-4 overall" style={{ minHeight: "300px" }} data-aos="fade-right">
                                        <img src={Element.imgpath} alt="" srcset="" />
                                        <h3>{Element.ServocesName}</h3>
                                        <p>{Element.Title}</p>
                                    </div>
                                </>
                            ))
                        }


                    </div>
                    {
                        caretstate && <>
                            <div className="row justify-content-center mt-5 mb-5">
                                <div className="col-1 d-flex justify-content-end " data-aos="fade-right">
                                    <button className="btn btn-primary" onClick={Previousdata} >
                                        <i class="fa-solid fa-caret-left" ></i>
                                    </button>
                                </div>
                                <div className="col-1" data-aos="fade-left">
                                    <button className="btn btn-primary" onClick={Nextdata}>
                                        <i class="fa-solid fa-caret-right" ></i>
                                    </button>
                                </div>




                            </div>
                        </>
                    }
                    <div className="d-flex justify-content-center">
                        <button className="btn  text-uppercase rounded-0 ps-5 pe-5 pt-3 pb-3 text-light" style={{ background: 'linear-gradient(90deg, #4facfe, #39b3d7,#39b3d7)' }} data-aos="fade-down">View all services</button>
                    </div>


                </div>
            </div>
        </div>
    </>
}