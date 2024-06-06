import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import {motion} from 'framer-motion'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from "../styles"

const Tech = () => {
  return (<>

    
<motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>things i am good at</p>
        <h2 className={styles.sectionHeadText}>SkillSet</h2>
      </motion.div>





    <div className="flex flex-row flex-wrap justify-center gap-10 mt-14">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} alt={technology.name} className=" w-[70%] h-[70%]" />
        </div>
      ))}
    </div>
  </>
  )
}

export default SectionWrapper(Tech,"")