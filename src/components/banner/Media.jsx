import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJava, SiPhp } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiJava />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
            <span className="bannerIcon">
              <SiPhp />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media