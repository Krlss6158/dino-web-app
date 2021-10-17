const Selected = () => {
    return (
        <div className="w-full lg:w-4/12 px-4">
            <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
            >
                Rol
            </label>
            <select class="block w-full h-11 bg-white hover:border-gray-500 px-2 rounded shadow focus:outline-none focus:shadow-outline text-sm">
                <option>Guest</option>
                <option>Administrador</option>
            </select>
        </div>
    );
}

export default Selected;