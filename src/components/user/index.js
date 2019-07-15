import React, { Component } from 'react'
import Axios from 'axios'

const baseUrl = "http://localhost:8000/"


const initialState = {
    users: [],
    user: {},
    _id: '',
    username: '',
    password: '',
    city: '',
    status: '',
    fullName: '',
    statusProcess: "insert"
}

class IndexUser extends Component {
    constructor(props){
        super(props)
        this.state = initialState

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddData = this.handleAddData.bind(this)
        this.handleEditData = this.handleEditData.bind(this)
        this.handleSubmitData = this.handleSubmitData.bind(this)
        this.handleDeleteData = this.handleDeleteData.bind(this)
        this.destroyData = this.destroyData.bind(this)
    }

    refreshData(){
        Axios.get(baseUrl + "user")
        .then( res => {
            this.setState({
                users: res.data.data,
                user: {}
            })
        })
        .catch( err => {
            console.log(err.message)
        })
    }

    componentDidMount(){
        this.refreshData();   
    }
    
    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleAddData(){
        this.setState({
            statusProcess: "insert",
            username: '',
            password: '',
            fullName: '',
            status: '',
            city: ''

        })
    }

    handleEditData = (event, user) => {
        let value = user
        
        this.setState({
            statusProcess: "update",
            _id: value._id,
            username: value.username,
            password: value.password,
            fullName: value.fullName,
            status: value.status,
            city: value.city
        })
    }

    handleSubmitData(){
        const { _id, username, password, fullName, city, status} = this.state
        let obj = {
            username: username,
            password: password,
            fullName: fullName,
            city: city,
            status: status
        }

        switch(this.state.statusProcess){
            case "update":
                Axios.put(baseUrl+"user/"+ _id, obj)
                .then( res => {
                    this.refreshData();
                })
                .catch( err => {
                    console.log(err.message)
                })
            break;
            case "insert":
                Axios.post(baseUrl+"user/", obj)
                .then( res => {
                    this.refreshData();
                })
                .catch( err => {
                    console.log(err.message)
                })
            break;
            default: console.log("error")
        }
    }

    handleDeleteData = (event, user) =>{
        let value = user
        this.setState({
            _id: value._id,
            username: value.username
        })
    }

    destroyData(){
        Axios.delete(baseUrl+ "user/"+this.state._id)
        .then( res => {
            this.refreshData();
        })
        .catch( err => {
            console.log(err.message)
        })
    }
    render(){
        const { users, username, password, city, status, fullName } = this.state
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                    <button className="btn btn-success" data-toggle="modal" data-target="#modalForm" onClick={this.handleAddData}>Add Data</button>
                    <table className="table table-stripped table-hover table-bordered table-sm table-response">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Full Name</th>
                                <th>City</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user, index) => 
                                <tr key={index}>
                                    <td>{ index+1 }</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.city}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm btn-warning"
                                            data-toggle="modal" 
                                            data-target="#modalForm"
                                            onClick={(event) => this.handleEditData(event,user)}
                                            >Edit</button>
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            data-toggle="modal"
                                            data-target="#confModal"
                                            onClick={(event) => this.handleEditData(event,user)}
                                            >Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                        
                        </tbody>
                    </table>
                    </div>
                </div>

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
                                            value={username}
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
                                            value={password}
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
                                            value={fullName}
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
                                            value={city}
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
                                            value={status}
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
                            Delete Data { username }
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.destroyData}>Delete</button>
                        </div>

                        </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default IndexUser