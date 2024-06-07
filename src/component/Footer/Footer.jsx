import "./Footer.css"
import { motion } from 'framer-motion';


const Footer = () => {




  return <>

    <footer className="">

      <motion.div viewport={{ once: true }} initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: .5 }}>

        <h5 className="text-center text-white pt-3 pb-2 m-0">Made With By Omar Mohamed © 2024 </h5>
        <h6 className="text-center text-white  pb-3 pt-0 m-0">Copyrights @ Omar Mohamed</h6>

      </motion.div>


    </footer>

  </>

}



export default Footer;