import './FilterCheckbox.css';
import {useContext} from "react";
import {CurrentValueSearchContext} from "../../contexts/CurrentValueSearchContext";


function FilterCheckbox({onChange}) {
    const {isShort} = useContext(CurrentValueSearchContext);

    const handleChange = () => {
        onChange();
    }

    return(
        <form className="form__checkbox">
            <label className="form__checkbox-label">
                <input
                    type="checkbox"
                    name="shortfilm"
                    value="shortfilm"
                    className="form__checkbox-input"
                    onChange={handleChange}
                    checked={isShort}
                />
                <span className="form__checkbox-pseudo"></span>
            </label>
            <p className="form__checkbox-text">Короткометражки</p>
        </form>
    );
}

export default FilterCheckbox;