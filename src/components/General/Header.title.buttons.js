const Header = ({ children }) => {
    return (
        <div className="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            {children}
        </div>
    );
}

export default Header;