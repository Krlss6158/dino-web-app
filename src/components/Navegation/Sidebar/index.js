import { AiOutlineMenuFold, AiFillDashboard } from 'react-icons/ai';

const Sidebar = (props) => {

    const classname = 'fixed inset-y-0 z-10 flex flex-col flex-shrink-0 max-h-screen overflow-hidden transition-all duration-500 ease-out bg-gray-50 border-r shadow-lg lg:z-auto lg:static lg:shadow-none';


    return (
        <>
            <aside className={props.isOpen ? `w-64 ${classname} ` : `transition-all duration-500 ease-out w-0`}>
                <div className="flex items-center justify-between flex-shrink-0 p-2">
                    <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                        K<span>-WD</span>
                    </span>
                    <AiOutlineMenuFold />
                </div >

                <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                    <ul className="p-2 overflow-hidden">
                        <li>
                            <a href="#" className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100" >
                                <AiFillDashboard
                                    className="w-6 h-6 text-gray-400"
                                />
                                <span>Dashboard</span>
                            </a>
                        </li>
                    </ul >
                </nav >
            </aside >
        </>
    );
}

export default Sidebar;