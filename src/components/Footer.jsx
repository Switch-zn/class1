import React from 'react'
import { FaFacebook,FaGithub,FaInstagram,FaTwitter,FaTwitch } from 'react-icons/fa'

const sections =[
    {
        title: 'Solutions',
        items: ['Marketing', 'Analytics', 'Commerce', 'Data', 'Cloud']
    },
    {
        title: 'Support',
        items:['Pricing', 'Documentation', 'Guidese', 'API', 'Status']
    },
    {
        title: 'Company',
        items:['About', 'Blog', 'Jobs', 'Press', 'Partners']
    },
    {
        title: 'Legal',
        items:['Claims', 'Privacy', 'Terms', 'Policies', 'Conditions']
    }, 
]

const items =[
    {
        name: "Facebook",
        Icon: FaFacebook,
        link: "https://facebook.com/"
    },
    {
        name: "Instagram",
        Icon: FaInstagram,
        link: "https://instagram.com/"
    },
    {
        name: "Twitter",
        Icon: FaTwitter,
        link: "https://twitter.com/"
    },
    {
        name: "Twitch",
        Icon: FaTwitch,
        link: "https://twitch.com/"
    },
    {
        name: "Github",
        Icon: FaGithub,
        link: "https://github.com/"
    },
]

const Footer = () => {
  return (
    // <div>
    //     <div className=' w-full mt-24 bg-slate-900
    //     text-gray-300 py-y px-2'>
    //         <div className=' max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2
    //        border-gray-600 py-8'>
            

    //         </div>

    //     </div>
        
        
    // </div>
    <div></div>
  )
}

export default Footer