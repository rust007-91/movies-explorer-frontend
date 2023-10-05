import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout(props) {
    const {onClick}=props;
    return(
        <>
            <Header onClick={onClick}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;