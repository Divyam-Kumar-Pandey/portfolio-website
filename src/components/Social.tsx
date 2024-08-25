import Link from "next/link"
import path from "path";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Divyam-Kumar-Pandey"
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/divyam-kumar-pandey/"
  }
]

const Social = (
    {
        containerStyles, 
        iconStyles
    }:{
        containerStyles: string, 
        iconStyles: string
    }) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => (
            <Link key={index} href={social.path} className={iconStyles}>
               {social.icon}
            </Link>
        ))}
    </div>
  )
}

export default Social