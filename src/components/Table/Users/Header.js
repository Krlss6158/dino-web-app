import { useState } from "react";

import { ImSortAlphaDesc, ImSortAlphaAsc } from 'react-icons/im';

const Header = ({
    arr = [],
    onSorting
}) => {

    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead class="bg-blueGray-100">
            <tr>
                {
                    arr.map(({ name, field, sortable }) => {
                        return (
                            <th
                                key={name}
                                name={name}
                                scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                onClick={() =>
                                    sortable ? onSortingChange(field) : null
                                }
                            >
                                <span className='flex items-center'>
                                    {name}
                                    <ImSortAlphaDesc />
                                    <ImSortAlphaAsc />
                                </span>
                            </th>
                        );
                    })
                }
                <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Acciones</span>
                </th>
            </tr>
        </thead>
    );
}

export default Header;