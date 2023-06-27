
const Project = () => {
    return (
        <section id='projects' className="py-10 md:w-10/12 mx-auto ">
            <div className="text-center ">
                <h3 className="text-4xl font-bold mb-2">My <span className="text-cyan-600">Projects</span></h3>
                <p className="text-gray-300 text-lg font-bold">My Work</p>
                <div className="grid grid-co"></div>
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {/* project- 1 */}
                    <div className="p-4 bg-gray-600 hover:bg-cyan-600 rounded-t-3xl shadow-2xl hover:-translate-y-6 duration-500">
                        <img
                            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer bg-slate-100 rounded-2xl"
                            src='https://i.ibb.co/d4cxSc5/3.png'
                            alt="src"
                        />
                        <h1 className="text-1xl font-bold my-4 "> Foods Restaurant</h1>
                        <div className="">
                            <a href="https://github.com/rubelmasud/food-restarunt-client"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Client Code Github</button></a>
                            <a href="https://github.com/rubelmasud/food-restarunt-server"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Server Code Github</button></a>
                            <a href="https://foods-restaurant-assignment-10.web.app/"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Live Demo</button></a>

                        </div>
                    </div>
                    {/* project- 2 */}
                    <div className="p-4 bg-gray-600 rounded-t-3xl shadow-2xl hover:bg-cyan-600 -translate-y-8  hover:-translate-y-6 duration-500">
                        <img
                            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer bg-slate-100 rounded-2xl"
                            src='https://i.ibb.co/vQPHmLD/toy.png'
                            alt="src"
                        />
                        <h1 className="text-1xl font-bold my-4">  Toy Animals</h1>
                        <div className="">
                            <a href="https://github.com/rubelmasud/toy-animals-client"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Client Code Github</button></a>
                            <a href="https://github.com/rubelmasud/toy-animals-server"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Server Code Github</button></a>
                            <a href="https://toys-animal.web.app/"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Live Demo</button></a>

                        </div>
                    </div>
                    {/* project- 3 */}
                    <div className="p-4 bg-gray-600 rounded-t-3xl shadow-2xl hover:bg-cyan-600  hover:-translate-y-6 duration-500">
                        <img
                            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer bg-slate-100 rounded-2xl"
                            src='https://i.ibb.co/KGr2Ft4/baseball-player-posing-with-glove-ball-23-2148347976.jpg'
                            alt="src"
                        />
                        <h1 className="text-1xl font-bold my-4 "> Sports Academics</h1>
                        <div className="">
                            <a href="https://github.com/rubelmasud/sports-academics-client"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Client Code Github</button></a>
                            <a href="https://github.com/rubelmasud/sport-academic-server"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Server Code Github</button></a>
                            <a href="https://sports-academies-fda20.web.app/"> <button className="shadow-xl px-2 bg-gray-900 text-xs py-1 text-cyan-600">Live Demo</button></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;