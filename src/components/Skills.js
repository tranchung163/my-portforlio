import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute`} 
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer' whileHover={{scale:1.05}}>
            Web
        </motion.div>

        <Skill name='CSS' x='-0vw' y='-25vw'/>
        <Skill name='HTML' x='15vw' y='-10vw'/> 
        <Skill name='React' x='30vw' y='-20vw'/>
        <Skill name='Java' x='-35vw' y='0vw'/>
        <Skill name='Python' x='-15vw' y='-7vw'/>
        <Skill name='Next.js' x='14vw' y='0vw'/>
        <Skill name='Django' x='-14vw' y='10vw'/>
        <Skill name='MySQL' x='0vw' y='23vw'/>
        <Skill name='TailwindCSS' x='0vw' y='-16vw'/>
        <Skill name='APIs' x='-20vw' y='20vw'/>
        <Skill name='DSA' x='20vw' y='20vw'/>
        <Skill name='Figma' x='35vw' y='0vw'/>
       
     </div>
    </>
  )
}

export default Skills