import "./Skills.css"
import Stars from './../Stars/Stars';
import SectionName from "../SectionName/SectionName";
import { defaultOptions } from "../About/Tilt"
import { skills } from "./SkillsContent"

import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';



const Skills = () => {







  return <>
    <section id="#skills" className="skills pt-5 ">


      {/* starts====================================================> */}
      <Stars />


      {/* sectionName================================================> */}
      <SectionName name="Skills" />



      {/* main Container=============================================> */}
      <div className="myContainer mt-3  ">


        <div className="skillsMainContent d-flex justify-content-center ">

          <div className="row  d-flex justify-content-center">
            {skills.map((item, index) =>
              <motion.div key={index} initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 50, damping: 9 }} className="col-xxl-2 col-lg-3 col-md-4 col-sm-5 col-5 z-3 ">
                <Tilt className="shadow-lg mt-4     tilt " options={defaultOptions} >
                  <div className="d-flex align-items-center  justify-content-center flex-column" style={{ height: 135 }}>

                    <img className="w-25" src={item.image} alt="" />

                    <h6 className={`color2 pt-2 m-0`}>{item.name}</h6>
                  </div>
                </Tilt>
              </motion.div>
            )}
          </div>

        </div>
      </div>



    </section>
  </>

}



export default Skills;