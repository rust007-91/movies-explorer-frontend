import './FilterCheckbox.css';
import {useContext, useEffect, useState} from "react";
import {CurrentValueSearchContext} from "../../contexts/CurrentValueSearchContext";


function FilterCheckbox({onChange}) {
    const {isChecked, setIsChecked} = useContext(CurrentValueSearchContext);

    const handleChange = () => {
        onChange();
        // setIsChecked(!isChecked); // переключаем визуально
        // localStorage.setItem("toggle", JSON.stringify(!isChecked)); // устанавливаем состояние в localStorage
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
                    checked={isChecked}
                />
                <span className="form__checkbox-pseudo"></span>
            </label>
            <p className="form__checkbox-text">Короткометражки</p>
        </form>
    );
}

export default FilterCheckbox;