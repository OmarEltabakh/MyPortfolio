
import React from 'react'
import { motion } from 'framer-motion';

const SectionName = ({ name }) => {



    return <>

        <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: .5 }}
            className="text-center  mt-5 color2">
            {name}
        </motion.h1>

    </>
}

export default SectionName
