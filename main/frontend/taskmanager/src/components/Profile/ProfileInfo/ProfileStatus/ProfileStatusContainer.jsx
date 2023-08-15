import React from "react";


class ProfileStatusContainer extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    EditMode = () => {
        if (this.state.editMode === false) {
            this.setState({
                editMode: true
            })
        } else {
            this.setState({
                editMode: false
            })
            this.props.updateStatus(this.state.status);
        }
    }

    onStatusChange = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !==  this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.EditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.EditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatusContainer