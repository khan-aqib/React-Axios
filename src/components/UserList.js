import React from "react";
import Axios from "axios";

class UserList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            this.setState({
                ...this.state,
                users : response.data
            })
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage : error.message
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">User List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio, eius error hic in nesciunt non vel veniam. Debitis, dolores eveniet iste magnam molestiae natus necessitatibus quas recusandae sunt voluptates.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <table className="table table-hover text-center table-striped table-primary">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>NAME</th>
                                        <th>Email</th>
                                        <th>Street</th>
                                        <th>City</th>
                                        <th>Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    this.state.users.map(user => {
                                                        return(
                                                            <tr key={user.id}>
                                                                <td>{user.id}</td>
                                                                <td>{user.name}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.address.street}</td>
                                                                <td>{user.address.city}</td>
                                                                <td>{user.website}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </React.Fragment> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default UserList;
