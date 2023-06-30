import image from '../assets/IMG_0110-removebg-preview(3).png'

const About = () => {

    const info = [
        { text: 'Years experience', count: '00' },
        { text: 'Completed Projects', count: '06' },
        { text: 'Companies Work', count: '00' },
    ]
    return (
        <section id='about' className="text-white  ">
            <div className="text-center ">
                <div className="mb-12">
                    <h1 className="md:text-5xl font-bold text-3xl mb-4">About <span className="text-cyan-600 ">Me</span></h1>
                    <h4 className="text-gray-400 text-lg">My introduction</h4>
                </div>
                <div className="flex md:flex-row flex-col-reverse md:gap-16 gap-12 px-10 items-center justify-center mx-auto max-w-6xl">
                    <div className="">
                        <div className="text-gray-400 my-4 md:text-left text-center">
                            <p className='text-justify leading-7 w-11/12 '>
                                <span className='text-xl'>Hi , I am a Junior Web Developer </span><br /><br />
                                a passionate and dedicated junior developer with a strong enthusiasm for coding and problem-solving. I thrive in dynamic and collaborative environments where I can contribute my skills and continuously learn from experienced professionals.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {
                                    info.map(content => (
                                        <div key={content.text}>
                                            <h3 className="md:text-4xl text-2xl font-bold text-white">{content.count}
                                                <span className="text-cyan-600">+</span>
                                            </h3>
                                            <span>{content.text}</span>
                                        </div>
                                    ))
                                }

                            </div>
                            <button className='btn-primary text-white md:mx-0 mx-auto my-4'>Contact Me</button>

                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center ">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm " >
                            <img src={image} alt="" className="w-full object-cover  bg-cyan-600 rounded-xl" />
                            <div className="w-full h-full -z-10 bg-gray-500 absolute top-[0px] right-0 rotate-12 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;