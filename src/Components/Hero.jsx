import Typewriter from "react-ts-typewriter";
import image from '../assets/IMG_0110-removebg-preview(3).png'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { GoDownload } from 'react-icons/go';
import resume from '../assets/Rubel-Masud Web-Developer Resume (1).pdf'

const Hero = () => {

    return (
        <section id='home' className="min-h-screen flex justify-center items-center py-10 flex-col md:flex-row">

            <div className="flex-1 items-center justify-center h-full">
                <img src={image} alt="" className='md:w-11/12 h-full object-cover' />
            </div>


            <div className="flex-1">
                <div className="">
                    <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white text-center md:text-start'><span className='md:text-6xl text-5xl  font-extrabold text-cyan-600 '>Hello!</span><br />
                        My Name is <span>Rubel Masud</span>
                    </h1>
                    <h4 className='md:text-2xl text-lg font-bold md:leading-normal leading-10 mt-4 text-gray-600 md:text-start text-center'>
                        <Typewriter
                            speed={100}
                            text={['Front-End Developer', '&', "Junior Web-Developer"]}
                            loop={true}
                        />
                    </h4>
                    <a href={resume} download >
                        <button className="btn-primary text-white my-5 md:mx-0 ml-0"><GoDownload className="font-bold animate-bounce text-xl" /> Download Resume</button>
                    </a>
                    <div className="flex gap-4 text-2xl md:justify-start justify-center items-center">
                        <a href='https://web.facebook.com/mdrubel.masud.7' className='text-gray-600 hover:text-white'> <BsFacebook /></a>
                        <a href='https://www.linkedin.com/in/rubel-masud-rm-69ab89278/' className='text-gray-600 hover:text-white'> <BsLinkedin /></a>
                        <a href='https://twitter.com/Masud3Rubel' className='text-gray-600 hover:text-white'> <BsTwitter /></a>
                        <a href='https://github.com/rubelmasud' className='text-gray-600 hover:text-white'> <BsGithub /></a>

                    </div>
                </div>
            </div>
        </section>


    );



};

export default Hero;