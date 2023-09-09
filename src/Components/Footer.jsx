import React from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'

export default function Footer() {
    return <>
        <div className="container-fluid pt-3 pb-3 footer ">
            <div className="row justify-content-center">
                <div className="col-11 pt-5 pb-5 mt-3 mb-3  border-top-0 border-start-0 border-end-0  " style={{ borderBottom: '1px solid #919191' }}>
                    <div className="row align-items-center gy-5">
                        <div className="col-xl-4 col-sm-6 col-8  get_free fs-2 pb-3" data-aos="fade-up">Get Free Consultancy
                            Call (510) 352-6578
                        </div>
                        <div className="col-xl-3 col-sm-6 pb-3" data-aos="fade-down">
                            <input type="text" className="form-control footer_input ps-0" placeholder="Your Name" />
                        </div>
                        <div className="col-xl-3 col-sm-6 pb-3" data-aos="fade-right">
                            <input type="email" className="form-control footer_input ps-0" placeholder="Your email address" />
                        </div>
                        <div className="col-xl-2 col-sm-6 pb-3 d-flex justify-content-sm-center" data-aos="fade-left">
                            <button className="btn btn_send_now rounded-0 pt-3 pb-3 ps-5 pe-5 text-uppercase text-light">send now</button>
                        </div>
                    </div>
                </div>
                <div className="col-11 text-light pt-5 pb-5 mt-3 mb-3">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-sm-6 col-12 d-flex gap-3 flex-column">
                            <div>
                                <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/footer.jpg" alt="" srcset=""  data-aos="fade-down"/>
                            </div>
                            <div data-aos="fade-left">
                                Copyright © 2023 Modify by Phlox theme. All Rights Reserved.
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex flex-column gap-3" data-aos="fade-right">
                            <h3 className="footer_heading" data-aos="fade-up">Department</h3>
                            <ul class="list-group footer_ul " data-aos="fade-down">
                                <li class="list-group-item" data-aos="fade-right">Medical and Health</li>
                                <li class="list-group-item" data-aos="fade-left">Dental Care and Surgery</li>
                                <li class="list-group-item" data-aos="fade-down">Eye Treatment</li>
                                <li class="list-group-item"data-aos="fade-up">Children Chare</li>
                                <li class="list-group-item">Nuclear magnetic</li>
                                <li class="list-group-item">Traumatology</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex flex-column gap-3">
                            <h3 className="footer_heading" data-aos="fade-down">Useful links</h3>
                            <ul class="list-group footer_ul" data-aos="fade-up">
                              <li class="list-group-item nav-item ">  <Link to={'/'} className="nav-link text-light pt-0">  Home </Link></li>
                                 <li class="list-group-item nav-item"><Link  to={'/TimeTable'} className="nav-link text-light pt-0">Time Table</Link></li>
                                 <li class="list-group-item nav-item"><Link  to={'/About'} className="nav-link text-light pt-0">About</Link></li>
                                 <li class="list-group-item nav-item"><Link  to={'/Blog'} className="nav-link text-light pt-0">Blog</Link></li>
                                 <li class="list-group-item nav-item"><Link  to={'/Contact'} className="nav-link text-light pt-0">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12  d-flex flex-column gap-3">
                            <h3 className="footer_heading"> Our Contacts</h3>
                            <ul class="list-group footer_ul" data-aos="fade-up">
                                <li class="list-group-item">
                                    Patricia C. Amedee 4401 Waldeck Street
                                    Grapevine Nashville, TX 76051
                                </li>
                                <li class="list-group-item">info@yourdomain.com</li>
                                <li class="list-group-item">+99 (0) 101 0000 888

                                </li>
                                <li class="list-group-item">

                                    <ul class="list-group d-flex flex-row gap-4" data-aos="fade-down">
                                        <li class="list-group-item"><i class="fa-brands fa-facebook-f"></i></li>
                                        <li class="list-group-item"><i class="fa-brands fa-twitter"></i></li>
                                        <li class="list-group-item"><i class="fa-brands fa-pinterest"></i></li>
                                        <li class="list-group-item"><i class="fa-brands fa-vimeo"></i></li>


                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}