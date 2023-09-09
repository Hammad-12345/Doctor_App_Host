import React, { useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MedicalCenter from "../Components/MedicalCenter";
import OurDepartment from "../Components/OurDepartment";
import Phlox from "../Components/WelcomeTophlox";
import OurServices from "../Components/OverServices";
import CareAmenities from "../Components/Cars&Amenities";
import OurTeam from "../Components/OurTeam";
import MakeAppointment from "../Components/MakeAppointment";
import Testimonial from "../Components/Our_Testimonial";
import EmergencyCallComponent from "../Components/EmercencyCallComp";
import BlogPost from "../Components/BlogPost";
export default function Home() {
    const [OurTeamNewstate] = useState([
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



    ])
    const [post] = useState([
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-G2roup-56-1-970x970.jpg',
            Date: 'May 16, 2020',
            Title: "Taylor Life In Other Word"
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-Gro1up-55-2-970x970.jpg',
            Date: 'May 16, 2020',
            Title: "How To Choose The Doctor…"
        },
        {
            imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-1Group-57-1-970x970.jpg',
            Date: 'May 16, 2020',
            Title: "How To Make A Checkup…"
        },


    ])
    return <>
        <TopNavbar />
        <Header />
        <MedicalCenter />
        <OurDepartment />
        <Phlox />
        <OurServices />
        <CareAmenities />
        <div className="medicalcenter mb-5">
            <div className="container-fluid   mb-5">
                <div className="row justify-content-center pt-5 pb-5">
                    <div className="col-11 mt-5 mb-5 pt-5 pb-5">
                        <div className="row  mb-4">
                            <OurTeam data={OurTeamNewstate} />
                        </div>
                        <div className="d-flex flex-column align-items-center" >
                            <button className="btn align-self-center text-uppercase rounded-0 ps-5 pe-5 pt-3 pb-3 text-light" style={{ background: 'linear-gradient(90deg, #4facfe, #39b3d7,#39b3d7)' }}data-aos="fade-down">View all Team</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
        <MakeAppointment />
        <Testimonial />
        <EmergencyCallComponent />
        <div className="container-fluid pt-5 pb-5 mb-5">
            <div className="row">
                <h3 style={{ color: "#4facfe" }} className="d-flex justify-content-center fs-5 fw-bold" data-aos="fade-up">our blog</h3>
                <h1 className="d-flex justify-content-center display-4 fw-bold" data-aos="fade-down">Latest from blog</h1>
                <div className="d-flex justify-content-center">
                    <div className="w-25 mt-3  " style={{ height: "4px", background: 'linear-gradient(90deg, #4facfe, #39b3d7,#38f9a5)' }} data-aos="fade-down"></div>
                </div>
            </div>
            <BlogPost Post={post} stylecom={'d-none'} colclass={'col-lg-4'} col6class={'col-md-6'} col12class={'col-12'} gap={'gap-0'} padding={'ps-5 pe-5'} />


        </div>

        <Footer />

    </>
}