"use client";

import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,

} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiGooglecloud,
  SiTypescript,
} from 'react-icons/si';

// about data
const about = {
  title: 'About Me',
  content: `I am a Full Stack Developer with a passion for creating web applications. I have experience in building web applications using JavaScript, React, Node.js, and AWS. I am always looking to learn new technologies and improve my skills.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Divyam Kumar Pandey',
    },
    {
      fieldName: 'Email',
      fieldValue: 'divyamkumarp@gmail.com',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 96547 80617',
    },
    {
      fieldName: 'Location',
      fieldValue: 'Kharagpur, West Bengal, India',
    },
    {
      fieldName: 'Experience',
      fieldValue: '10 months',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian',
    },
    {
      fieldName: 'Languges',
      fieldValue: 'English, Hindi',
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: '',
  jobs: [
    {
      title: 'Software Engineer Intern',
      company: 'Pync',
      location: 'Bangalore, Karnataka, India',
      date: 'May 2024 - Present',
      description: `Working as a Software Engineer in the Digital Software & Solutions unit of Tata Consultancy Services. I have experience in developing web applications using JavaScript, React, Node.js, and AWS.`
    },
    {
      title: 'Software Engineer Intern',
      company: 'Zauvijek Pvt. Ltd.',
      location: 'Patna, Bihar, India',
      date: 'June 2024 - July 2024',
      description: `Worked as a Software Engineer Intern in the Digital Software & Solutions unit of Tata Consultancy Services. I worked on developing web applications using JavaScript, React, and Node.js.`
    },
    {
      title: 'Teaching Assistant',
      company: 'Coding Ninjas',
      location: 'Remote',
      date: 'Jan 2024 - Mar 2024',
      description: `Worked as a Software Engineer Intern in the Digital Software & Solutions unit of Tata Consultancy Services. I worked on developing web applications using JavaScript, React, and Node.js.`
    },
  ]
}


// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: '',
  items: [
    {
      institution: 'Software Engineer Intern',
      certification: 'Pync',
      grade: 'Bangalore, Karnataka, India',
      date: 'May 2024 - Present',
    },

  ]
}

// skills data
const skills = {
  title: "My Skills",
  description: '',
  skillSet: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    }
  ]
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";


const ResumePage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.jobs.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.date}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value='education' className='w-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.date}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.certification}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{ skills.description }</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillSet.map((skill, index) => { 
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{ skill.icon }</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{ skill.name }</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                   })}
                </ul>
              </div>
            </TabsContent>
            {/* About me */}
            <TabsContent value='aboutme' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.content}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li
                      key={index}
                      className='flex items-center justify-center xl:justify-start gap-4'
                    >
                      <span className="text-white/60">{ item.fieldName }</span>
                      <span className="text-xl">{ item.fieldValue }</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumePage