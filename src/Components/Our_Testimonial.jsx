import React, { useState } from "react";
import 'aos/dist/aos.css'
export default function Testimonial() {
    const [OurTestomonials] = useState([
        {
            imgpath: "https://tryolabs.com/icons/quotes.svg",
            Title: 'You know you’re in love when can’t fall asleep because reality is finally better.',
            ClientName: "Maria Angel",
            UserImgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-Group-56@2x.png",
            patients: "Dental patients"

        },
        {
            imgpath: "https://tryolabs.com/icons/quotes.svg",
            Title: 'You know you’re in love when can’t fall asleep because reality is finally better.',
            ClientName: "William Robert",
            UserImgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-Group-553@2x.png",
            patients: "Dental patients"

        },
        {
            imgpath: "https://tryolabs.com/icons/quotes.svg",
            Title: 'You know you’re in love when can’t fall asleep because reality is finally better.',
            ClientName: "William Robert",
            UserImgpath: "https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-Group-57@2x.png",
            patients: "Dental patients"

        },



    ])
    let [NumberState, UpdateNumber] = useState(0)
    const [Newdata, UpdateNewData] = useState([OurTestomonials[0]])
    const [Previousdatastate, updatepreviousdata] = useState([])
    const Nextdata = () => {
        if (NumberState !== OurTestomonials.length - 1) {
            if (OurTestomonials[++NumberState]) {
                Previousdatastate.push(Newdata[0])
                updatepreviousdata([...Previousdatastate])
                Newdata.splice(0, 1)
                Newdata.push(OurTestomonials[NumberState])
                UpdateNewData([...Newdata])
                UpdateNumber(NumberState)
            }
        }
    }
    const Previousdata = () => {
      
        if (OurTestomonials.length > 1) {
            if (Previousdatastate.length > 0) {
                Newdata.splice(0, 1)
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
        <div className="testomonial mb-5 pt-5 pb-5" >
            <div className="container-fluid pt-5 pb-5 mb-5">
                <div className=" row pt-5 pb-5 align-items-center justify-content-lg-start justify-content-end">
                    <div className="col-lg-6 mt-5 mb-5 d-flex flex-column gap-2 ps-5 pe-5">
                        <h3 style={{ color: "#4facfe" }} className="fs-5 fw-bold" data-aos="fade-left">Testimonial</h3>
                        <h1 className="display-4 fw-bold" data-aos="fade-up">Our Client Says</h1>
                        <div className="w-25 mt-3  " data-aos="fade-right" style={{ height: "4px", background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)' }}></div>
                        <p className="mt-3 w-75 fs-5" data-aos="fade-down">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring taken serenity.</p>
                        <div className="d-flex gap-3 ">
                            <button className="btn shadow " data-aos="fade-left" onClick={Previousdata} >
                                <i class="fa-solid fa-angles-left"></i>
                            </button>
                            <button className="btn shadow " data-aos="fade-right"  onClick={Nextdata}>
                                <i class="fa-solid fa-angles-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center " style={{ height: "600px", background: 'linear-gradient(90deg, #38f9a5,#4facfe,#39b3d7)' }} data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-10 shadow bg-light  pt-5 pb-5 ">
                                <div className="row justify-content-center">
                                    {
                                        Newdata.map(Element =>
                                        (
                                            <>
                                                <div className="col-8 d-flex flex-column gap-3" data-aos="fade-up">
                                                    <img src={Element.imgpath} className="w-25" alt="" data-aos="fade-right"/>
                                                    <p data-aos="fade-down">{Element.Title}</p>
                                                    <div className="border border-bottom-1" data-aos="fade-up"></div>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <img src={Element.UserImgpath} className="rounded-circle" alt="" data-aos="fade-left" />
                                                        <div className="d-flex flex-column">
                                                            <h3 className="fw-bold fs-5" data-aos="fade-down">{Element.ClientName}</h3>
                                                            <div data-aos="fade-left">{Element.patients}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}