import "./Home.css"
import Lottie from "lottie-react";
import HomeAinmation from '../../../src/animation/HomeAnimation.json'
import { useRef } from "react";
import { motion, } from "framer-motion";
import Stars from "../Stars/Stars";
import { pVariants, spanVariants } from './HomeVariants';
import { socialMediaIcons } from "./socialMediaIcons"
import ScrollUp from './../ScrollUp/ScrollUp';



const Home = () => {


  const lottieRef = useRef();
  const text = 'Front End web developer';




  return <>
    <ScrollUp />

    <section id="#home" className="home d-flex flex-column justify-content-center    ">

      <Stars />

      <div className=" myContainer homeMainContent d-flex justify-content-center ">

        <div className="row text-white w-100   pt-4 ">

          {/* col1===============================================================> */}
          <div className="col-md-6     col1 col-sm-10 mx-auto   p-0    d-flex flex-column  justify-content-center ">
            <div>

              <h6 className=" fw-bold spicalColor ">HI There, I'm</h6>

              <div>
                <h1 className="color2 ">Omar Mohamed</h1>
                <motion.h3 variants={pVariants} initial="hidden" animate="visible">
                  {text.split("").map((char, index) =>
                    <motion.span className="color3" variants={spanVariants} key={index}>{char}</motion.span>
                  )}
                </motion.h3>
              </div>

            </div>

            {/* socialMediaIcons====================================================> */}
            <div className="socialAccount mt-4 d-flex ">
              {socialMediaIcons.map((icon, index) =>

                <a key={index} href={icon.link} target="_blank" rel="noreferrer">
                  <button className={`button ${icon.marginRate}`}>
                    <i className={`fa-brands ${icon.name}`}></i>
                  </button>
                </a>
              )}





            </div>

          </div>




          {/* col2===============================================================> */}
          <div className="col-md-6     col-sm-10 mx-auto    homeAnimation  d-flex justify-content-end  ">
            <div className=" w-75">

              <Lottie lottieRef={lottieRef} onLoadedImages={() => { lottieRef.current.setSpeed(.5) }} animationData={HomeAinmation} />

            </div>
          </div>

        </div>

      </div>


      {/* scrollDown===============================================> */}
      <div className=" d-flex justify-content-center">
        <a href="##about" className="scrollDown position-relative d-flex justify-content-center cursorPointer" >
          <motion.div initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} className="pointer position-absolute" />
        </a>
      </div>




    </section>
  </>

}



export default Home;