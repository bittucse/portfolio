import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { achievement } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { HiOutlineLink } from "react-icons/hi"



const AchievementCard = ({index,name,description,image,profile_link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}><Tilt options={{max:45,scale:1,speed:450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px]">

      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className=" w-full h-full object-cover rounded-2xl" />

        <div className=" absolute inset-0 flex justify-end m-3 card-img_hover">
          {profile_link && <div onClick={()=> window.open(profile_link,"_blank")}
          className=" black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer">
          <HiOutlineLink className=" text-xl font-bold"/>
          </div>}
        </div>
      </div>

      <div className="mt-5">
        <h3 className=" text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

    </Tilt>
    
    
    
    
    </motion.div>
  )

}







const Achievement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My accomplishments</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>


      <div className="w-full flex">
        <motion.p
        variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Proven coder with success in hackathons and competitive programming. Excels in dynamic settings, showcasing creativity and resilience. Passionate about hackathons, problem-solving, and continual learning. Ready to contribute innovative solutions in any challenging technical landscape.
        </motion.p>
      </div>


      <div className='mt-20 flex flex-wrap gap-7'>
        {achievement.map((achieve, index) => (
          <AchievementCard key={`project-${index}`} index={index} {...achieve} />
        ))}
      </div>













    </>
  )
}

export default SectionWrapper(Achievement," ")