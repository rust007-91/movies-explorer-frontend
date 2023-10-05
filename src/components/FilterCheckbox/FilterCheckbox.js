import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
        <form className="form__checkbox">
            <label className="form__checkbox-label">
                <input type="checkbox" name="shortfilm" value="shortfilm" className="form__checkbox-input"/>
                <span className="form__checkbox-pseudo"></span>
            </label>
            <p className="form__checkbox-text">Короткометражки</p>
        </form>
    );
}

export default FilterCheckbox;