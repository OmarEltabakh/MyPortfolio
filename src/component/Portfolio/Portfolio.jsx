import "./Portfolio.css"
import Stars from './../Stars/Stars';
import { motion } from 'framer-motion';
import { useState } from "react";
import { childVariants, devVariances } from "../About/AboutVariants"
import AllProjects from './AllProjects';
import SectionName from './../SectionName/SectionName';


const Portfolio = () => {

  const tabButtons = ["React", "JavaScript", "HTML_CSS"];


  const [handleProjectsButton, setHandleProjectsButton] = useState("React")

  return <>
    <section id="#portfolio" className="portfolio  pt-5">


      <Stars />




      {/* sectionName=========================================================================> */}
      <SectionName name="Projects" />






      <div className="myContainer   ">

        {/* tabButton=========================================================================> */}

        <motion.div
          variants={devVariances}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}


          className="tabButton pt-4  d-flex justify-content-center flex-wrap  align-items-center gap-5">

          {tabButtons.map((item, index) =>

            <motion.button key={index} variants={childVariants} whileHover={{ backgroundColor: "#1e40af" }} onClick={() => setHandleProjectsButton(item)} className={`button  `}>
              {item}
            </motion.button>

          )}



        </motion.div>






        {/*all projects=====================================================================> */}

        <div className="allProjects       position-relative mt-5">
          <AllProjects handleProjectsButton={handleProjectsButton} />

        </div>



      </div>

    </section >
  </>

}



export default Portfolio;