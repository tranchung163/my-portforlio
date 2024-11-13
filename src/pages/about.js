import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-13.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 1500 });
    const isInView = useInView(ref, {once: true});
    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
            <meta name="description" content="About me" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>
            <div className="grid w-full grid-cols-8 gap-16" >
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Bioraphy</h2>
               <p className='font-medium'>Hi, I'm Ngoc Tran, a Computer Science at California State University Fullerton. I have experience in web development and UI/UX design.
                I am passionate about creating a meaningful application to make an impact on people's lives. I am always eager to learn new technologies and improve my skills. 
               </p>
                <p className='my-4 font-medium'>I am actively seeking internships next summer. Through internships, 
                    research projects, and open-source contributions, 
                    I’ve developed skills in back-end and front-end development, 
                    particularly in languages like Python, C++, and JavaScript. 
                    My experiences have included projects ranging from real-time data streaming to 
                    creating VR applications for individuals with autism, which I had the opportunity 
                    to present at tech conferences. Each experience has strengthened my technical 
                    foundation and my commitment to innovation.  </p> 
                <p className="font-medium">Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'></div>
                    <Image src={profilePic} alt="NgocTran" className='w-full h-auto rounded-2xl' />
                </div>
                
        <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                    Publications
                </h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-boldr'>
                    <AnimatedNumbers value={10}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                    projects completed
                </h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={2}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                    years experience
                </h2>
            </div>

        </div>

            </div>
        <Skills/>
        <Experience/>
        </Layout>
       
        </main>
    </>
  )
}

export default about