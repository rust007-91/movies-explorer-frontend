import './BurgerMenu.css';

function BurgerMenu(props) {
    const { onClick } = props;

    return (
        <div className="header__burger" onClick={onClick}>
            <span className="header__burger-slice"></span>
            <span className="header__burger-slice"></span>
            <span className="header__burger-slice"></span>
        </div>
    );
}

export default BurgerMenu;
