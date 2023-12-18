import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.error('Error:', error);
        console.error('Error Info:', info);
        // Здесь вы можете отправить информацию об ошибке на сервер или сделать другие действия.
    }

    render() {
        if (this.state.hasError) {
            // Возвращайте компонент с сообщением об ошибке или другой UI для пользователя.
            return (
                <div>
                    <h1>Что-то пошло не так.</h1>
                    <p>
                        Пожалуйста, перезагрузите страницу или попробуйте позже.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
