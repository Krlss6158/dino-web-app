const Header = ({
    valueH6 = 'Inserte el título aquí',
    valueButton = 'Texto del botón'
}) => {
    return (
        <div className="text-center flex justify-between items-center">
            <h6 className="text-blueGray-700 text-xl font-bold">{valueH6}</h6>
            <div className='flex items-center sm:flex-row flex-col'>
                <a href='/settings/users' className='bg-blueGray-700 text-white text-xs px-4 py-2 rounded mr-2 uppercase shadow font-bold'>Lista de usuarios</a>
                <button className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:mt-0 mt-2"
                    type="button">
                    {valueButton}
                </button>
            </div>
        </div>
    );
}

export default Header;