import { useState } from "react";
import { navItems } from "./NavItems"

const NavModal = () => {


    const [activeItem, setActiveItem] = useState('Home');

    return <>



        <div className="modal fade navModal " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div className="modal-dialog ">

                <div className="modal-content   ">

                    <div className="modal-header border-0 ">

                        <h1 className="modal-title fs-5 mainColor" id="exampleModalLabel">Navigation</h1>
                        <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fs-5 mainColor fa-xmark cursorPointer animate__animated closeIcon"></i>

                    </div>

                    <div className="modal-body ">

                        <ul className="m-0 p-0  mb-3 ">

                            <div className="d-flex flex-column  justify-content-between  align-items-center m-0 p-0  fw-medium">

                                {navItems.map((item, index) =>
                                    <li key={index} className="px-4  py-3">
                                        <a onClick={() => setActiveItem(item.name)} className={` text-white ${activeItem === item.name ? "navModalActiveLink " : ""}`} href={`#${item.href}`}>{item.name}</a>
                                    </li>
                                )}

                            </div>

                        </ul>

                    </div>

                </div>
            </div>
        </div>
    </>
}


export default NavModal;