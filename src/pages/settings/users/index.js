import Container from "components/Navegation/container";
import UsersComponent from 'components/settings/users';
import Table from "components/Table/Users";

const Users = () => {

    const header = [
        { name: 'Usuario', field: 'users', sortable: true },
        { name: 'Actualizado', field: 'updated_at', sortable: true },
        { name: 'Rol', field: 'role', sortable: true },
    ]

    return (
        <Container NamePage='Gestión de Usuarios'>
            <UsersComponent valueH6='Lista de usuarios' valueA='Crear usuario' href='/settings/users/create'>
                <Table header={header} />
            </UsersComponent>
        </Container>
    );
}

export default Users;