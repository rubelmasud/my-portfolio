import { useEffect } from "react";
import { useState } from "react";


const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const [open, setOpen] = useState(false)

    const menuLinks = [
        { name: 'HOME', link: '#home' },
        { name: 'ABOUT', link: '#about' },
        { name: 'SKILLS', link: '#skills' },
        { name: 'PROJECTS', link: '#projects' },
        { name: 'CONTACT', link: '#contact' },
    ]
    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.querySelector('nav')
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    }, [])


    return (
        <nav className={`fixed w-full left-0 top-0  z-[999] ${sticky ? ' bg-white/60 ' : 'text-white'}`}>
            <div className="flex justify-between items-center">
                <div className="mx-7">
                    <h2 className="text-4xl font-bold uppercase">
                        R<span className="text-cyan-600">ube</span>l
                    </h2>
                </div>
                <div className={`${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} md:block px-7 hidden text-gray-900 font-medium py-2 rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) =>
                                <li key={i} className="px-6 hover:text-cyan-600">
                                    <a href={menu.link}>{menu?.name}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className={`z-[999] md:hidden ${open ? 'text-gray-900' : 'text-gray-200'} m-5 text-3xl`}>
                    <ion-icon name='menu'></ion-icon>
                </div>
                <div className={`md:hidden absolute duration-700 text-gray-900 w-2/3 h-screen font-medium bg-white px-7 py-2 top-0 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <ul className="flex flex-col gap-10 py-2 justify-center h-full text-lg">
                        {
                            menuLinks?.map((menu, i) =>
                                <li key={i} className="px-6 hover:text-cyan-600">
                                    <a href={menu.link}>{menu?.name}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;