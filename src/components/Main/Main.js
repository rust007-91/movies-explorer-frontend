import './Main.css';
import "../Promo/Promo";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
    return(
        <>
            <Promo />
            <AboutProject />
            <Techs />
            <Portfolio />
            <Footer />
        </>
    );
}


export default Main;