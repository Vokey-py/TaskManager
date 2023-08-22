import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, requiredField} from "../utils/validators/validators";

const maxLenghtCreator20 =  maxLenghtCreator(20)

const LoginForm = (props) => {
    console.log('RERENDER')
    return(
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={"Login"}
                               name={"login"}
                               component={Input}
                               validate={[requiredField, maxLenghtCreator20]}/>
                    </div>
                    <div>
                        <Field placeholder={"Password"}
                               name={"password"}
                               component={Input}
                               validate={[requiredField, maxLenghtCreator20]}/>
                    </div>
                    <div>
                        <Field type={"checkbox"}
                               name={"rememberMe"}
                               component={Input}/>remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
    )
}

const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)


export default ReduxLoginForm