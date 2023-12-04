import './Main.css';
import '../Promo/Promo';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
    return (
        <main>
            <Promo />
            <AboutProject />
            <Techs />
            <Portfolio />
        </main>
    );
}

export default Main;
