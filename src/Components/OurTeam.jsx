import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css'
export default function OurTeam({ data }) {

    const [showstate, updateshowstate] = useState(true)
    const [newstate] = useState(data)
    const [OurTeamState] = useState([
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-Gr1oup-60-2.jpg',
            Name: 'DR. MARIA ANGEL',
            Specialist: "General Dentist",
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_58-1-1.jpg',
            Name: 'DR. WILLIAM ROBERT',
            Specialist: "General Dentist",
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_54.jpg',
            Name: 'DR. MICHEL BERNADO',
            Specialist: "General Dentist",
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_57.jpg',
            Name: 'DR. EMMA ASBORN',
            Specialist: "General Dentist",
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/obstetrician-at-work-PNT4KUF-1.jpg',
            Name: 'DR. MARIA PERSLEY',
            Specialist: "General Dentist",
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask_Group_56.jpg',
            Name: 'DR. JOHN MILWAKI',
            Specialist: "General Dentist",
        },


    ])
    useEffect(() => {
        const url = document.URL
        if (url === 'http://localhost:3000/') {
            updateshowstate(false)
            console.log("hello")
        }
        else 
        {
            updateshowstate(true)
        }
    }, [])
    return <>
        <h3 style={{ color: "#4facfe" }} className="d-flex justify-content-center fs-6 fw-bold" data-aos="fade-left">Our Team</h3>
        <h1 className="d-flex justify-content-center fw-bold " style={{ marginTop: "5px" }} data-aos="fade-right">The Most Qualified Staff</h1>
       <div className="d-flex justify-content-center">
       <div className="w-25 mt-3  " style={{height:"4px",  background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)'}} data-aos="fade-down"></div>
       </div>
        {
            showstate ? <>
                {
                    OurTeamState.map(Element =>
                    (
                        <>
                            <div className="col-lg-4 col-md-6 ps-2 pe-2 d-flex flex-column gap-0 mt-4 mb-4 " data-aos="fade-right">
                                <div>
                                    <img src={Element.imgpath} className="w-100" alt="" srcset="" />
                                </div>
                                <div className="d-flex flex-column gap-2 ps-3 pe-3 shadow-sm pt-4 pb-4 overall" style={{ border: "1px solid rgb(68 68 68 / 5%)", borderTop: "none" }}>
                                    <h4 className="mb-0 fw-bold" data-aos="fade-up">{Element.Name}</h4>
                                    <span data-aos="fade-down">{Element.Specialist}</span>
                                    <ul class="list-group d-flex flex-row gap-4">
                                        <li class="list-group-item" data-aos="fade-up"><i class="fa-brands fa-facebook-f"></i></li>
                                        <li class="list-group-item" data-aos="fade-down"><i class="fa-brands fa-twitter"></i></li>
                                        <li class="list-group-item" data-aos="fade-left"><i class="fa-brands fa-pinterest"></i></li>



                                    </ul>
                                </div>
                            </div>
                        </>

                    ))
                }
            </> : 
            <>
             {
                    newstate.map(Element =>
                    (
                        <>
                            <div className="col-lg-4 col-md-6 ps-2 pe-2 d-flex flex-column gap-0 mt-4 mb-4 " data-aos="fade-right">
                                <div>
                                    <img src={Element.imgpath} className="w-100" alt="" srcset="" data-aos="fade-up" />
                                </div>
                                <div className="d-flex flex-column gap-2 ps-3 pe-3 shadow-sm pt-4 pb-4 overall" style={{ border: "1px solid rgb(68 68 68 / 5%)", borderTop: "none" }}>
                                    <h4 className="mb-0 fw-bold" data-aos="fade-left">{Element.Name}</h4>
                                    <span data-aos="fade-right">{Element.Specialist}</span>
                                    <ul class="list-group d-flex flex-row gap-4">
                                        <li class="list-group-item" data-aos="fade-down"><i class="fa-brands fa-facebook-f"></i></li>
                                        <li class="list-group-item" data-aos="fade-left"><i class="fa-brands fa-twitter"></i></li>
                                        <li class="list-group-item" data-aos="fade-up"><i class="fa-brands fa-pinterest"></i></li>



                                    </ul>
                                </div>
                            </div>
                        </>

                    ))
                }
            </>


        }
    </>
}