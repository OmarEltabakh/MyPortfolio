import "./Contact.css"
import Stars from './../Stars/Stars';
import SectionName from './../SectionName/SectionName';
import Lottie from "lottie-react";
import contactAnimation from '../../../src/animation/contactAnimation.json'
import { useRef } from "react";
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const lottieRef = useRef();
  const [state, handleSubmit] = useForm("mayrglyv");



  return <>
    <div id="#contact" className="contact pt-5">
      <Stars />

      <SectionName name="Contact" />

      <div className="myContainer">
        <div className="row mt-4 d-flex justify-content-center">

          <div className="col-xl-6 col-lg-8  col-md-8 justify-content-xl-start    d-flex align-items-center justify-content-center   ">

            <motion.form onSubmit={handleSubmit} initial={{ x: -300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut", delay: .3 }}
            >
              <input autoComplete="off" className="form-control " placeholder="Name" type="text" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <input autoComplete="off" className="form-control mt-4 " placeholder="Email" type="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea className="form-control mt-4  " placeholder="Message" name="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="d-flex align-items-center mt-3">

                <button type="submit" className="submit cursorPointer" disabled={state.submitting}>
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>

                {state.succeeded && <p className="text-white  fs-5 mt-3 ms-3"> Thanks for joining! ❤️</p>}


              </div>


            </motion.form>


          </div>

          <div className="col-xl-6 col-lg-8  col-md-8   justify-content-xl-end   d-flex justify-content-center align-items-center  ">

            <motion.div initial={{ x: 300, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut", delay: .3 }}
              className="w-90">
              <Lottie className="w-100" lottieRef={lottieRef} onLoadedImages={() => { lottieRef.current.setSpeed(.5) }} animationData={contactAnimation} />

            </motion.div>


          </div>
        </div>

      </div>


    </div>
  </>

}



export default Contact;