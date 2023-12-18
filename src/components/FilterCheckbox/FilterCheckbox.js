import './FilterCheckbox.css';
import { useContext } from 'react';
import { CurrentSearchContext } from '../../contexts/CurrentSearchContext';

function FilterCheckbox({ onChange }) {
    const { isShort } = useContext(CurrentSearchContext);

    return (
        <form className="form__checkbox">
            <label className="form__checkbox-label">
                <input
                    type="checkbox"
                    name="shortfilm"
                    value="shortfilm"
                    className="form__checkbox-input"
                    onChange={onChange}
                    checked={isShort || false}
                />
                <span className="form__checkbox-pseudo"></span>
            </label>
            <p className="form__checkbox-text">Короткометражки</p>
        </form>
    );
}

export default FilterCheckbox;
