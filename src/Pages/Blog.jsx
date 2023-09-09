import React, { useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BlogPost from "../Components/BlogPost";
export default function Blog() {
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
    {
        imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-G2roup-58-970x970.jpg',
        Date: 'May 16, 2020',
        Title: "Checking Your Blood Pressure"
    },
    {
        imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Medical-doctor-970x970.jpg',
        Date: 'May 16, 2020',
        Title: "Meet Our Nurses"

    },
    {
        imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/Mask-3Group-59-970x970.jpg',
        Date: 'May 16, 2020',
        Title: "How To Do A Body..."
    },
    {
        imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/male-nurse-with-stethoscope-MBQ4P3Y-970x970.jpg',
        Date: 'May 16, 2020',
        Title: "Take Care Of Yourself"
    },
    {
        imgpath: 'https://demo.phlox.pro/medical/wp-content/uploads/sites/166/2020/05/obstetrician-at-work-PNT4KUF-970x970.jpg',
        Date: 'May 16, 2020',
        Title: "How To Check Your Health"
    }

])
  return <>
    <TopNavbar />
    <Header />
    <BlogPost Post={post} colclass={'col-md-5'} col10class={'col-10'} gap={'gap-5'}/>
    <Footer />
  </>
}