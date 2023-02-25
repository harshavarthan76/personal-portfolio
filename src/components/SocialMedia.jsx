import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://www.instagram.com/_dark_prince_76/" target="_blank" rel="noopener noreferrer">
        <div>
            <BsInstagram />
        </div>
        </a>
        <a href="https://github.com/harshavarthan76/" target="_blank" rel="noopener noreferrer">
        <div>
           <BsGithub /> 
        </div>
        </a>
        <a href="https://www.linkedin.com/in/harsha76/" target="_blank" rel="noopener noreferrer">
        <div>
            <BsLinkedin />
        </div>
        </a>
    </div>
  )
}

export default SocialMedia