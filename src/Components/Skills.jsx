

const Skills = () => {
    const skills = [
        {
            logo: 'logo-html5',
            level: 'Advanced',
            count: 86
        },
        {
            logo: 'logo-css3',
            level: 'Semi Advanced',
            count: 72
        },
        {
            logo: 'logo-javascript',
            level: 'Comfortable',
            count: 30
        },
        {
            logo: 'logo-react',
            level: 'Intermediate',
            count: 46
        },
    ]
    return (
        <section id='skills' className="my-20 relative bg-gray-800">
            <div className="pt-8 text-gray-100 text-center pb-6">
                <h3 className="text-4xl font-bold mb-2">My <span className="text-cyan-600">Skills</span></h3>
                <p className="text-gray-300 text-lg font-bold">My knowledge</p>
                <div className="flex justify-center items-center gap-10 mt-12 flex-wrap">
                    {
                        skills.map((skill, i) => (
                            <div className="border-2 border-cyan-600 bg-gray-900 relative min-w-[10rem] max-w-[16rem] p-10 rounded-xl" key={i}>
                                <div
                                    style={{
                                        background: `conic-gradient(rgb(8,145,170) ${skill.count}% , #ddd ${skill.count}%)`
                                    }}
                                    className="w-32 h-32 flex-col  justify-center items-center rounded-full">
                                    <div className="text-6xl text-gray-200 hover:text-cyan-600 w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center">   <ion-icon name={skill.logo}></ion-icon></div>
                                    <p className=" mt-6">{skill.level}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;