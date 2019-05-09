import React from 'react';
import AllWebinars from "./AllWebinars";
import jquery from "jquery";
import axios from "axios";
import Login from '../../auth/LoginComponent';
import Register from "../../auth/RegisterComponent";

class Admin extends React.Component{
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div className="admin-page container">
                <div className="row">
                    {/*<a onClick={this.handleClick}>Nice</a>*/}
                    <Login cookies={this.props.cookies} />
                    {/*<Register registerUser={this._registerUser}/>*/}
                </div>
            </div>
        );
    }
}

export default Admin;
