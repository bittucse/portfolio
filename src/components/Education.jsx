import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { education } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'





const ServiceCard=({index,institute_name,icon,standard,group,marks,duration})=>{
    return(
        // changed the width of  the tilt similar to about section with some difference
      <Tilt className="xs:w-[333px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}  className=' w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
  
      <div options={{max:45,scale:1,speed:450}} className=' bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col min-h-[280px]'>
  
      <img src={icon} alt={standard} className=" w-20 h-120 object-contain rounded-full"/>
      <h3 className='text-white text-[16px] font-bold text-center'>{standard}</h3>
      <p>{group}</p>
      <p className='text-[#915EFF]'>{marks}</p>
      <p className='text-center font-semibold'>{institute_name}</p>
      <p>{`(${duration})`}</p>

      </div>
  
  
  
      </motion.div></Tilt>
    )
  }






const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Studies</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am a passionate and devoted learner actively working towards my Bachelor's degree in Computer Science. I am dedicated to achieving and maintaining high academic standards while continually seeking opportunities to enhance my expertise in the field.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {education.map((education,index)=>(
        <ServiceCard key={education.institute_name} index={index} {...education}/>
      ))}

      </div>
    </>
  )
}

export default SectionWrapper(Education,"")
