import 'aos/dist/aos.css'
export default function Schedule() {

    return <>
        <div className="d-flex justify-content-center  pt-5 pb-5 mb-5 " data-aos="fade-down" style={{ fontWeight: 600, fontSize: '2.3rem', backgroundColor: "#eeeeee" }} >Time Table</div>

        <div className="container-fluid mb-5">
            <div className="row justify-content-center">
                <div className="col-11 " style={{ overflowX:'auto'}}>
                    <table class="table table-striped" data-aos="fade-down">
                        <thead>
                            <tr className="bg-dark text-light text-center" >
                                <th scope="col " className="border border-light"></th>
                                <th scope="col  " className="border border-light">Monday</th>
                                <th scope="col " className="border border-light">Tuesday</th>
                                <th scope="col " className="border border-light">Wenesday</th>
                                <th scope="col " className="border border-light">Thursday</th>
                                <th scope="col " className="border border-light">Friday</th>
                                <th scope="col " className="border border-light">Saturday</th>
                                <th scope="col " className="border border-light">Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center" data-aos="fade-up">
                                <td  className=" ps-5 pe-5 ">
                                    <div>08:00</div>
                                    <div>Am</div>
                                </td>
                                <td className="pt-5 pb-5">
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <h4 className="fw-normal text-uppercase fs-5">John d tom</h4>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Office 112 Hall C</div>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Outpatient Surgery</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Laryngological clinic</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className="text-center" data-aos="fade-down">
                                <td >
                                    <div>10:00</div>
                                    <div>Am</div>
                                </td>
                                <td></td>
                                <td className="pt-5 pb-5">
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Pediatric Clinic Care</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">office 112 hall c</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Outpatient surgery</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td className="">
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <h4 className="fw-normal text-uppercase fs-5">John d tom</h4>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr className="text-center" data-aos="fade-left">
                                <td className=" ps-5 pe-5 ">
                                    <div>12:00</div>
                                    <div>Pm</div>
                                </td>
                                <td className="pt-5 pb-5">
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <h4 className="fw-normal text-uppercase fs-5">John d tom</h4>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Office 112 Hall C</div>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Outpatient Surgery</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Laryngological clinic</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className="text-center" data-aos="fade-right">
                                <td >
                                    <div>02:00</div>
                                    <div>Pm</div>
                                </td>
                                <td></td>
                                <td className="pt-5 pb-5">
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Pediatric Clinic Care</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">office 112 hall c</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Outpatient surgery</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td className="">
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <h4 className="fw-normal text-uppercase fs-5">John d tom</h4>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr className="text-center" data-aos="fade-up">
                                <td  className=" ps-5 pe-5 ">
                                    <div>04:00</div>
                                    <div>Pm</div>
                                </td>
                                <td className="pt-5 pb-5">
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <h4 className="fw-normal text-uppercase fs-5">John d tom</h4>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Office 112 Hall C</div>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Outpatient Surgery</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Laryngological clinic</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className="text-center" data-aos="fade-down">
                                <td >
                                    <div>06:00</div>
                                    <div>Pm</div>
                                </td>
                                <td></td>
                                <td className="pt-5 pb-5">
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Pediatric Clinic Care</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">office 112 hall c</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex flex-column gap-1">
                                        <div  style={{color:"#4facfe"}} className="fs-5 fw-normal">Outpatient surgery</div>
                                        <div className="fw-normal text-uppercase fs-5">John d tom</div>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td className="">
                                    <div className="d-flex flex-column gap-1">
                                        <div style={{color:"#4facfe"}} className="fs-5 fw-normal">Primary Health care</div>
                                        <h4 className="fw-normal text-uppercase fs-5">John d tom</h4>
                                        <div className="fs-6 fst-italic">Hall B ,Floor 2</div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
   

    </>
}