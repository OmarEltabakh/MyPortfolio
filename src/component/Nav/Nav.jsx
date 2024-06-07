
import { useState } from "react";
import "./Nav.css"
import { navItems } from "./NavItems"
import { useEffect } from "react";
import NavModal from "./NavModal";


const Nav = () => {

  // useState================================================================>
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');


  // handleScroll ===========================================================>
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 100) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return <>

    <NavModal />


    <nav className={`fixed-top ${scrolled ? "navColorTransimition transition " : "bg-transparent transition"}`} >

      <div className="myContainer   py-3 d-flex justify-content-between align-items-center">

        <a className=" fw-bold fs-3 logo   cssanimation rotate" href="#home">Omar Mohamed</a>

        <ul className="m-0 ">

          <div className="d-flex justify-content-between  align-items-center m-0 p-0  fw-medium">

            {navItems.map((item, index) =>
              <li key={index} className="px-4">
                <a onClick={() => setActiveItem(item.name)} className={`${activeItem === item.name ? "activeNavItem" : ""}`} href={`#${item.href}`}>{item.name}</a>
              </li>
            )}

          </div>

        </ul>

        <i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-bars text-white fs-4 d-none navMenu cursorPointer"></i>

      </div>
    </nav>

  </>


};

export default Nav;
