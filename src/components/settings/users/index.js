import HeaderGeneral from 'components/General/Header.title.buttons';
import Header from './create/header';

const Users = ({
    href,
    valueA,
    valueH6,
    children
}) => {
    return (
        <HeaderGeneral>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <Header valueH6={valueH6} valueA={valueA} href={href} />
            </div>
            {children}
        </HeaderGeneral>
    );
}

export default Users;