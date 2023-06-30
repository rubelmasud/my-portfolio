import image from '../assets/IMG_0110-removebg-preview(3).png'

const HireMe = () => {
    return (
        <section id='hireme' className="py-10 px-3 text-white ">
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-2">Hire <span className="text-cyan-600">Me</span></h3>
                <p className="text-gray-300 text-lg font-bold">Do you have any work?</p>
                <div className="bg-gray-700 mt-12 px-8 relative rounded-2xl py-5 md:flex justify-center items-center  md:w-10/12 mx-auto">
                    <div className="md:w-5/12 ">
                        <img src={image} alt="" className=' ' />
                    </div>
                    <div className="md:text-left md:w-7/12 ">
                        <h4 className='md:text-3xl text-xl font-semibold mb-6'>Do you want any work from me?</h4>
                        <p className='mb-8 text-[15px] text-gray-200'>Are you looking for a motivated and dedicated developer to join your team? Look no further! I am actively seeking exciting opportunities where I can contribute my skills and grow as a professional.
                            <br />  <br />
                            Thank you for considering me for potential opportunities, and I look forward to the possibility of working together!
                        </p>

                        <button className="btn-primary text-white font-bold mx-auto md:mx-0 animate-bounce">Sey, Hello</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;