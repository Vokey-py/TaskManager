import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, requiredField} from "../utils/validators/validators";

const maxLenghtCreator50 =  maxLenghtCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageText"
                       validate={[requiredField, maxLenghtCreator50]}
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const ReduxDialogForm = reduxForm({
  // a unique name for the form
  form: 'dialogAddMessageForm'
})(AddMessageForm)


export default ReduxDialogForm