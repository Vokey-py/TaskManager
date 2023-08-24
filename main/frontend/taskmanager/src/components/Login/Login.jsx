import ReduxLoginForm from "./LoginForm";
import {Navigate} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) =>{
        props.thunkLogin(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to="/profile" replace />
    }
    return(
            <div>
                <h1>Login</h1>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
    )
}

export default Login