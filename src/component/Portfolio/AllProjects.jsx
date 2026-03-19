import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { useState } from 'react';
import { React, JavaScript, HtmlAndCss } from "./ProjectData"

const AllProjects = ({ handleProjectsButton }) => {

    let projects = [];
    if (handleProjectsButton === 'React') {
        projects = React;
    } else if (handleProjectsButton === 'JavaScript') {
        projects = JavaScript;
    } else if (handleProjectsButton === 'HTML_CSS') {
        projects = HtmlAndCss;
    }



    const [handleModalName, setHandleModalName] = useState();


    return <>
        <ProjectModal handleModalName={handleModalName} />


        {projects.map((project, index) =>
            <div key={`${handleProjectsButton}-${index}`} className={` position-relative       mb-5   d-flex  ${project.ProjectDirection}`}>

                {/* circle ====================================================> */}
                <div className="position-absolute circle d-flex justify-content-center align-items-center" >
                    <img className=" w-70" src={project.projectLogo} alt="" />
                </div>


                {/* date ======================================================> */}
                <motion.h6
                    initial={{ x: project.ProjectDirection === "cartLeft" ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, damping: 7 }}
                    viewport={{ once: true }}

                    className=" position-absolute date color1"
                >{project.projectData}</motion.h6>



                {/* cart================================================================> */}

                <motion.div

                    initial={{ x: project.ProjectDirection === "cartLeft" ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, damping: 7 }}
                    viewport={{ once: true }}

                    className={`cart   col-xl-5 shadow-lg     position-relative`} style={{ height: 340 }}      >
                    <div className="triangle"></div>
                    <h4 className="  pb-2 color3 ">{project.projectName}</h4>

                    <div className="cartImage   cursorPointer d-flex justify-content-center ">
                        <div className=" layerAndImageParent  position-relative">
                            <div className="layer rounded-3 d-flex justify-content-center align-items-center  " >
                                <h6 onClick={() => setHandleModalName(project.projectName)} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="color3 fs-5">Show Details</h6>
                            </div>
                            <img className="w-100 image rounded-3" src={project.projectImage} alt="" />
                        </div>
                    </div>

                </motion.div>

            </div>

        )}



    </>
}

export default AllProjects
