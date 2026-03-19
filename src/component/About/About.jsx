import { Tilt } from "react-tilt";
import "./About.css"
import { motion } from 'framer-motion';
import { defaultOptions } from "./Tilt"
import { childVariants, devVariances } from "./AboutVariants"
import Stars from './../Stars/Stars';
import SectionName from './../SectionName/SectionName';


const About = () => {



  const carts = [{ h2: "2+", h6: "Years Of Experience" }, { h2: "40+", h6: "Project Done" }, { h2: "50+", h6: "Problem Solving" },]


  return <>

    <section id="about" className="about  pt-5 ">


      <Stars />

      {/* sectionName======================================================================> */}
      <SectionName name="About Me" />




      {/* container==========================================================================> */}
      <div className="myContainer   ">






        {/* row1=============================================================================> */}
        <div className="row pt-5 w-100 m-auto row1     ">

          {/* row1.col1=======================================================================> */}
          <div className="col-md-6 details  col1  p-0       ">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=""
            >
              <h3 className="pb-2 ">I'm <span > Omar Mohamed</span>, a Web developer</h3>
              <p className="color1 w-90  ">
                I'm Omar Mohamed, a Full-Stack Web Developer (MERN). I specialize in building scalable web applications using MongoDB, Express.js, React, and Node.js. I am passionate about creating seamless user experiences and robust server-side logic through clean, efficient, and maintainable code.
              </p>
            </motion.div>
          </div>

          {/* row1.col2=======================================================================> */}
          <div className="col-md-6  col2  d-flex flex-column  align-items-center p-0 ">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }} className=" d-flex flex-column">
              <h3 className="color3 pb-2">My Education</h3>
              <p className="color1 ">Bachelor of Computer Science</p>
              <p className="color1 pb-2">The Higher Technological Institute in 10th of Ramadan City</p>
            </motion.div>
          </div>

        </div>





        {/* cart && row2=====================================================================> */}
        <motion.div
          variants={devVariances}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="row carts   m-auto  pt-5 justify-content-center gap-5">

          {carts.map((cart, index) =>
            <motion.div key={index} variants={childVariants} className="col-lg-3 z-2   col-md-4  col-sm-6 col-9">
              <Tilt options={defaultOptions} className="tilt rounded-3 py-5 shadow-lg cursorPointer " >
                <div className=" d-flex flex-column align-items-center h-100 " >
                  <h2 className=" fs-1 color3 ">{cart.h2}</h2>
                  <h6 className="color1 ">{cart.h6}</h6>
                </div>
              </Tilt>
            </motion.div>


          )}
        </motion.div>










      </div>


    </section>
  </>

}



export default About;