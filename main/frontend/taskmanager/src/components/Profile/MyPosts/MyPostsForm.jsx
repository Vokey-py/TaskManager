import {Field, reduxForm} from "redux-form";
import React from "react";
import {requiredField, maxLenghtCreator} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls"

const maxLenghtCreator10 = maxLenghtCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostElement" placeholder='Enter your post' validate={[requiredField, maxLenghtCreator10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({
  // a unique name for the form
  form: 'AddPostForm'
})(AddPostForm)

export default ReduxAddPostForm