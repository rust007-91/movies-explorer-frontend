import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout(props) {
    const { onClick, loggedIn } = props;
    return (
        <>
            <Header onClick={onClick} loggedIn={loggedIn} />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
