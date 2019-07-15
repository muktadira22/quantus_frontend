import React, { Component } from 'react'
// import Axios from 'axios'
// import { Link } from 'react-router-dom'
// const baseUrl = "http://localhost:8000/"

class FormUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {}
        }
    }

    componentWillReceiveProps(){
        this.setState({
            user: this.props.data
        })
    }
    render(){
        const {user} = this.state
        return (
            <React.Fragment>
            
            <div className="modal fade" id="modalForm">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Use Form</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputUsername" 
                                    placeholder="Username" 
                                    name="username"
                                    onChange={this.handleInputChange}
                                    value={user.username}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputPassword" 
                                    placeholder="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputfullName" className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputfullName" 
                                    placeholder="fullName"
                                    name="fullName"
                                    value={user.fullName}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputCity" className="col-sm-2 col-form-label">City</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputCity" 
                                    name="city"
                                    placeholder="City"
                                    value={user.city}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputStatus" 
                                    name="status"
                                    placeholder="Status"
                                    value={user.status}
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmitData}>Save</button>
                </div>

                </div>
            </div>
        </div>

        <div className="modal fade" id="modalFormAdd">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Use Form</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputUsername" 
                                    placeholder="Username" 
                                    name="username"
                                    onChange={this.handleInputChange}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputPassword" 
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputfullName" className="col-sm-2 col-form-label">Full Name</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputfullName" 
                                    placeholder="fullName"
                                    name="fullName"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputCity" className="col-sm-2 col-form-label">City</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputCity" 
                                    name="city"
                                    placeholder="City"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputStatus" 
                                    name="status"
                                    placeholder="Status"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmitData}>Save</button>
                </div>

                </div>
            </div>
        </div>

        <div className="modal fade" id="confModal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                    Delete Data { user.username }
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.destroyData}>Delete</button>
                </div>

                </div>
            </div>
        </div></React.Fragment>
        )
    }
}

export default FormUser