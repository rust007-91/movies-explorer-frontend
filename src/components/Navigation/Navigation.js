import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigate">
            <ul className="navigate__movies-list">
                <li>
                    <Link to="/movies" className="navigate__films">
                        Фильмы
                    </Link>
                </li>
                <li>
                    <Link to="/saved-movies" className="navigate__films">
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
