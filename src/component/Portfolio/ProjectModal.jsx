/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { projectsData } from "./ProjectData"



const ProjectModal = ({ handleModalName }) => {


    const [filteredProjects, setFilteredProjects] = useState([]);



    useEffect(() => {
        const filtered = projectsData.filter(project => project.projectName === handleModalName);
        setFilteredProjects(filtered);

    }, [handleModalName]);



    return <>

        <div className=' '>
            <div className="modal fade overflow-y-hidden " id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog   modal-lg fixed-width-modal  ">

                    {filteredProjects.map((project, index) =>

                        <div key={index} className="modal-content ">

                            <div className="modal-header border-0 text-white  pt-3 pb-1 ">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{project.projectName}</h1>
                                <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fs-5 mainColor fa-xmark cursorPointer animate__animated closeIcon"></i>

                            </div>

                            {/* carousel=======================================================> */}
                            <div className="modal-body    px-4 py-2">
                                <div id="carouselExampleIndicators" className="carousel slide">

                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>

                                    <div className="carousel-inner  ">



                                        {project.projectName === handleModalName && project.projectImage.map((image, imageIndex) => (
                                            <div key={`${imageIndex}`}

                                                className={`carousel-item w-100  ${imageIndex === 0 && project.isActive === "active" ? "active" : ""}`}
                                            >
                                                <img src={image} className="d-block w-100 carousel-image" alt="ecommerceImage" />
                                            </div>
                                        ))}




                                    </div>

                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>

                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>

                                </div>
                            </div>




                            <div className='ProjectModalMainContent  pb-3  px-4  '>

                                <div className=' d-flex justify-content-center '>
                                    <a target='_blank' href={project.gitHubLink} className='d-flex justify-content-center align-items-center me-2 cursorPointer' rel="noreferrer">
                                        <i className="fa-brands  fs-6  text-white fa-github"> </i>
                                    </a>
                                    <a target='_blank' href={project.liveLink} className='d-flex justify-content-center align-items-center ms-2 cursorPointer' rel="noreferrer">
                                        <i className="fa-solid fs-6 text-white  fa-paperclip"></i>

                                    </a>
                                </div>

                                <div className='details color1  '>
                                    <h5 className='color2 '>description:</h5>
                                    <p className='m-0'>{project.description}</p>


                                </div>

                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>

    </>
}

export default ProjectModal
