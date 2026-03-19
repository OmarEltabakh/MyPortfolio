

import React, { useEffect, useState } from 'react'
import './ScrollUp.css'

const ScrollUp = () => {

    const [sctolled, setSctolled] = useState("false");

    const handleScoll = () => {
        if (window.scrollY > 500) {
            setSctolled("true")

        }
        else {
            setSctolled("false")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScoll);
        return () => window.removeEventListener("scroll", handleScoll);


    }, [])




    return <>

        <a style={{ opacity: sctolled === "false" ? 0 : 1 }} href='##home' className='scrollUp shadow-lg d-flex justify-content-center align-items-center cursorPointer' >
            <i className="fa-solid fa-angle-up color3 "></i>
        </a>






    </>
}

export default ScrollUp
