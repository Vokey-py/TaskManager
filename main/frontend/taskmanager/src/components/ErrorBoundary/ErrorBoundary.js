import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary