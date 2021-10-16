import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import { useState } from 'react';

import Logo from 'public/img/dino-logo.png';
import { data } from './data';

const Sidebar = (props) => {

    const classname = 'fixed inset-y-0 z-10 flex flex-col flex-shrink-0 max-h-screen overflow-hidden transition-all duration-500 bg-gray-50 border-r shadow-lg lg:z-auto lg:static lg:shadow-none';
    return (
        <aside className={props.isOpen ? `w-64 ${classname} ` : `transition-all duration-500 w-0`}>

            <Header src={Logo.src} />
            <Navegation />


        </aside >
    );
}

const Header = (props) => {
    return (
        <div className="flex items-center justify-center relative">
            <img src={props.src} className='w-16 h-16' />
        </div >
    );
}


const Navegation = () => {
    return (
        <nav className="flex-1 overflow-x-auto w-full">
            <ul className="py-2">

                {
                    data.map((e, key) => {
                        return (
                            <div key={key}>
                                {e.type === 'section' ? <Section value={e.name} /> :
                                    e.type === 'normal' ? <Normal value={e.name}>{e.icon}</Normal> :
                                        e.type === 'menu' && <Menu value={e.name} arr={e.subMenu}>{e.icon}</Menu>}
                            </div>
                        );
                    })
                }

            </ul >
        </nav >
    );
}

const Section = ({ value, mykey }) => {
    return (
        <li key={mykey} className='cursor-default text-sm text-blueGray-500 pt-4 pb-2 font-semibold overflow-ellipsis overflow-x-hidden px-4'>
            {value}
        </li>
    );
}

const Normal = ({ value, children, mykey }) => {
    return (
        <li key={mykey}>
            <a href="#" className="flex items-center py-2 px-5 space-x-2 hover:bg-green-100 text-blueGray-800" >
                {children}
                <span className='overflow-ellipsis overflow-x-hidden'>{value}</span>
            </a>
        </li>
    );
}

const Menu = ({ value, children, arr, mykey }) => {

    const [open, setOpen] = useState(false);
    const isOpen = () => { setOpen(!open) }
    const classname = 'transition-all duration-150';
    const classnameActive = 'flex text-left items-center space-x-2 py-2 px-5 w-full hover:bg-green-100'
    return (
        <li key={mykey}>
            <button className={open ? `${classnameActive} bg-green-100` : `${classnameActive}`} onClick={isOpen}>
                {children}
                <span className='w-44 overflow-ellipsis overflow-x-hidden whitespace-nowrap text-blueGray-800'>{value}</span>
                <MdOutlineKeyboardArrowLeft className={!open ? `${classname} transform rotate-0` : `${classname} transform -rotate-90`} />
            </button>

            <ul>
                <SubMenu arr={arr} open={open} />   
            </ul>
        </li>
    );
}

const SubMenu = ({ arr, open }) => {
    return (
        open && arr.map((e, key) => {
            return (
                <li key={key}>
                    <a href="#" className="flex items-center text-sm pl-8 p-2 space-x-2 hover:bg-green-100" >
                        {e.icon}
                        <span className='overflow-ellipsis overflow-x-hidden w-40 text-blueGray-800'>{e.name}</span>
                    </a>
                </li>
            );
        })
    );
}

export default Sidebar;