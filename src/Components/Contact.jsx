

const Contact = () => {
    return (
        <section id='contact' className="text-white py-10 px-3">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-bold">Contact <span className="text-cyan-600">Me</span></h3>
                <p className="text-xl text-gray-300 font-semibold mt-3">Get in touch</p>
                <div className="mt-16 flex md:flex-row flex-col gap-6  max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
                    <form className="flex flex-1 gap-6 flex-col">

                        <input type="text" name="" id="" placeholder="Your Name" />
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <textarea placeholder="Your Message" rows="10"></textarea>
                        <button className="btn-primary w-fit">Send Message</button>
                    </form>
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-4 items-center w-fit">
                            <div className="min-w-[2rem] min-h-[2rem] font-bold border p-4 bg-cyan-600 rounded-full flex justify-center items-center text-2xl">
                                <ion-icon name='mail'></ion-icon>
                            </div>
                            <h3 className="text-xl">inforubel251@gmail.com</h3>
                        </div>
                        <div className="flex gap-4 items-center w-fit">
                            <div className="min-w-[4rem] min-h-[2rem] font-bold border p-4 bg-cyan-600 rounded-full flex justify-center items-center text-2xl">
                                <ion-icon name='logo-whatsapp'></ion-icon>
                            </div>
                            <h3 className="text-xl">00 2223 46353</h3>
                        </div>
                        <div className="flex gap-4 items-center w-fit">
                            <div className="min-w-[2rem] min-h-[2rem] font-bold border p-4 bg-cyan-600 rounded-full flex justify-center items-center text-2xl">
                                <ion-icon name='location'></ion-icon>
                            </div>
                            <h3 className="text-xl">Rangpur Bangladesh</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;