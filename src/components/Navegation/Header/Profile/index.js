import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';

const Profile = () => {
    return (
        <Menu as="Menu.Button" className="ml-3 relative">

            <Menu.Button className="rounded-full border relative">
                <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://picsum.photos/200"
                    alt="Random"
                />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 max-w-sm min-w-max w-48 rounded-md shadow-lg py-1 bg-white ring-opacity-5 focus:outline-none text-blueGray-600">
                    <div className="flex flex-col px-4 py-2 font-medium border-b">
                        <span className='overflow-ellipsis overflow-hidden w-48'>Carlos Pico</span>
                        <span className='overflow-ellipsis overflow-hidden w-48'>syddenrosh@gmail.com</span>
                    </div>

                    <MenuItem value='Perfil'>
                        <AiOutlineUser className='text-xl mr-2' />
                    </MenuItem>

                    <MenuItem value='Cerrar sesión'>
                        <AiOutlineLogout className='text-xl mr-2' />
                    </MenuItem>

                </Menu.Items>
            </Transition>
        </Menu>
    );
}

const MenuItem = (props) => {
    return (
        <Menu.Item>
            <a href={props.href} className="flex items-center justify-start px-4 py-2 text-blueGray-800 hover:text-blueGray-500 cursor-pointer">
                {props.children}
                {props.value}
            </a>
        </Menu.Item>
    );
}

export default Profile;