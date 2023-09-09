import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Header() {
  const [ShowState, UpdateShowState] = useState(true)
  const ShowSearchBar = () => {
    if (!ShowState) {
      UpdateShowState(true)
    }
    else {
      UpdateShowState(false)
    }
  }
  useEffect(()=>
  {
AOS.init({duration:2000})
  },[])
  return <>
    {
      ShowState ?
        <>
          <nav className="navbar navbar-expand-lg navbar-light navbar_main pt-3 pb-3" data-aos="fade-up">
            <div className="container-fluid ">
              <div className="d-lg-none">
                <img src="https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/footer.jpg" width={"100px"} height={"100px"} alt="" srcset="" />
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 gap-4 ">
                  <li class="nav-item ">
                    <Link class="nav-link active text-light fw-normal" aria-current="page" to={"/"}>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link text-light fw-normal" to={'/TimeTable'}>Time Table</Link>
                  </li>
                  <li class="nav-item ">
                    <Link class="nav-link text-light fw-normal" to={"/About"} >
                      About
                    </Link>

                  </li>
                  <li class="nav-item ">
                    <Link class="nav-link text-light fw-normal" to={"/Blog"} >
                      Blog
                    </Link>

                  </li>
                  <li class="nav-item ">
                    <Link class="nav-link text-light fw-normal" to={"/Contact"}>
                      Contact
                    </Link>

                  </li>
                  <li class="nav-item ">
                    <button className="nav-link border-0 btn text-light" onClick={ShowSearchBar}>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>

                  </li>



                </ul>

              </div>
            </div>
          </nav>
        </>
        :
        <>
          <div className="container mt-2">
            <div className="row justify-content-center">
              <div className="col-10 position-relative">
                <input type="text" className="form-control pt-3 pb-3 border-top-0 border-start-0 border-end-0 border-bottom-1 rounded-0 border-dark" />
                <button className="btn position-absolute top-0 end-0 me-2 fs-4" onClick={ShowSearchBar}><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>

          </div>
        </>
    }


  </>
}