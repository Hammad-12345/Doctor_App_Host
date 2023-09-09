import 'aos/dist/aos.css'

export default function BlogPost({Post,stylecom,colclass,col10class,col6class,col12class,gap,padding}) {
   
    return <>
       <div className={`d-flex justify-content-center  pt-5 pb-5 ${stylecom} `}  style={{fontWeight:600,fontSize:'2.3rem',backgroundColor:"#eeeeee"}} data-aos="fade-right">Blog</div>
       <div className={`container-fluid mt-5 mb-5 pt-1 pb-1 ${padding} `}>
        <div className={`row  justify-content-center ${gap} mt-5 mb-5 pt-3 pb-3 `}>
           
                {
                Post.map(Element=>
                    (
                        <>
                        <div className={`${colclass} ${col10class} ${col6class} ${col12class} d-flex flex-lg-row flex-column overall pt-5 pb-5 ps-4 pe-3 align-items-lg-center gap-3 shadow `} >
                           <img src={Element.imgpath} width={"165px"} height={"165px"} className="img_blog" alt="" srcset="" data-aos="fade-down"/>
                            <div className="d-flex flex-column gap-2">
                                <div className=" date" style={{color:"rgb(68 68 68 / 61%)"}} data-aos="fade-up">{Element.Date}</div>
                                <div className="text-capitalize  title" style={{fontWeight:550}} data-aos="fade-left">{Element.Title}</div>
                            </div>
                        </div>
                        </>
                    ))
            }
             
           
        </div>
       </div>
    </>
}