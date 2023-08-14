import React from "react";


class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false
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
                        <input autoFocus={true} onBlur={this.EditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatusContainer