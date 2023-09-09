import React from "react";
export default function FixThing()
{
    return<>
    <div className="position-fixed end-0" style={{height:"300px",top:"50%",zIndex:"10000"}}>
    <ul class="list-group bg-transparent  d-flex flex-column gap-2 "  style={{height:"300px"}}>
                                <li class="list-group-item text-light d-flex gap-2" style={{backgroundColor: '#292929'}}>
                                    <img src="https://demo.phlox.pro/medical/wp-content/plugins/demo-tools/public/assets/img/Group-3.svg" alt="" srcset="" />
                                    <div>Browser Demos</div>
                                </li>
                                <li class="list-group-item text-light d-flex gap-2" style={{backgroundColor: '#292929'}}>
                                <img src="https://demo.phlox.pro/medical/wp-content/plugins/demo-tools/public/assets/img/buy.svg" alt="" srcset="" />
                                    <div>Buy Now !</div>
                                </li>
                                <li class="list-group-item text-light d-flex gap-2" style={{backgroundColor: '#292929'}}>
                                    <img src="https://demo.phlox.pro/medical/wp-content/plugins/demo-tools/public/assets/img/export.svg" alt="" srcset="" />
                                    <div>Export Section ?</div>
                                </li>
                              
                            </ul>
    </div>
       
    </>
}