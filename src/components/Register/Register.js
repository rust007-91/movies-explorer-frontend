import './Register.css';
import AuthWithForm from "../AuthWithForm/AuthWithForm";
import useFormWithValidation from "../../utils/hooks/useFormWithValidation";

function Register({onSubmit}) {
    // const {values, handleChange, errors, isInputValid} = useFormWithValidation(); // хук обработки полей

//     // Создание объекта RegExp с регулярным выражением
//     const regex = new RegExp("^[a-zA-Zа-яА-Я\\s\\-]*$", 'v'); // Второй аргумент 'i' - флаг для регистронезависимого сравнения
//
// // Проверка строки на соответствие регулярному выражению
//     const isValid = regex.test("rust007-91@mail.ru");

    return(
        <AuthWithForm
            title='Добро пожаловать!'
            name='register'
            btnText='Зарегистрироваться'
            questionText='Уже зарегистрированы?'
            linkText='Войти'
            route={'/signin'}
            onSubmit={onSubmit}
        >


        </AuthWithForm>
    );
}

export default Register;