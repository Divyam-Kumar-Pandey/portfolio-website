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
  ]
}

// experience data
const experience = {
  title: 'Experience',
  jobs: [
    {
      title: 'Software Engineer',
      company: 'Tata Consultancy Services',
      location: 'Kolkata, West Bengal, India',
      date: 'July 2019 - Present',
      description: `Working as a Software Engineer in the Digital Software & Solutions unit of Tata Consultancy Services. I have experience in developing web applications using JavaScript, React, Node.js, and AWS.`
    },
    {
      title: 'Software Engineer Intern',
      company: 'Tata Consultancy Services',
      location: 'Kolkata, West Bengal, India',
      date: 'January 2019 - June 2019',
      description: `Worked as a Software Engineer Intern in the Digital Software & Solutions unit of Tata Consultancy Services. I worked on developing web applications using JavaScript, React, and Node.js.`
    },
  ]
}

const ResumePage = () => {
  return (
    <div>ResumePage</div>
  )
}

export default ResumePage