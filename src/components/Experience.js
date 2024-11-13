import React from 'react'

const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
                target="_blank"
                className='text-primary capitalize'
            > @{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
        </h2>
        <div className='w-[75] mx-auto relative'>

<div className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position='Open Source SWE Internship' company='Flagsmith'
                time='Jun 2024 - Oct 2024'  address='CA'
                work="Enhanced Flagsmith, an open-source platform for managing features, by developing a real-time data streaming feature to monitor feature flag events and identity tracking.
Collaborated with a senior software engineer from Casetext to integrate WebSocket technology and create a new API Endpoint for web application development.   
Quickly learned and applied Django, Python, React.js, REST APIs, and PostgreSQL to capture and display real-time events, allowing for individual event tracking"
                />
                <Details 
                position='GenAI Open Source Contributor' company='Intel'
                time='Mar 2023 - Apr 2024'  address='CA'
                work="Expanded test coverage for the red-pajama-3b-chat LLM within OpenVINO GenAI.
Contributed to the functionality testing of the red-pajama-3b model, ensuring its integration and performance within the OpenVINO GenAI framework."
                />
                <Details 
                position='Open Source Micro-Internship ' company='Open Energy Dashboard'
                time='Oct 2023 - Dec 2023  '  address='CA'
                work="Enhanced the user interface by implementing TypeScript components to separate dynamic and static buttons and improving code maintainability"
                />
                <Details 
                position='Summer Research VR/ML/Health)' company='National Science Foundation'
                time='May 2023 - Aug 2023'  address='San Marcos, TX'
                work="Developed Virtual Reality (VR) interventions for children with Autism Spectrum Disorder (ASD) using game development tools, including Unity, C#, VR development toolkits , and Blender. 
Applied random forest machine learning models to detect significant improvements in balance skill. It achieved an impressive accuracy rate of 85.1% in identifying children with ASD.
Analyzed pre- and post-VR data, demonstrating a 15% improvement in gross motor skills  of children with ASD."
                />
            </ul>
            
        </div>
        </div>
  )
}

export default Experience