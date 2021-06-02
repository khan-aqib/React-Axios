import React from "react";
import Axios from "axios";

class Customers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            customers : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        let dataURL = 'https://gist.githubusercontent.com/khan-aqib/d938980d3651cc679b50de4af311c929/raw/e46799b35021a831fe668b0a87c69d1693ed10f1/customer.json';
        Axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                customers : response.data
            });
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
                            <p className="h3 text-primary">Customers</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, deserunt exercitationem facilis fugit maxime nisi nostrum nulla, quo sint soluta tempore, voluptas voluptate voluptates. Corporis ea incidunt libero nam velit.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <table className="table table-hover table-striped text-center table-primary">
                                <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.customers.map(customer => {
                                        return(
                                            <tr key={customer.login.uuid}>
                                                <td>{customer.login.uuid.substr(customer.login.uuid.length - 4)}</td>
                                                <td>
                                                    <img src={customer.picture.large} alt="" width="50" height="50"/>
                                                </td>
                                                <td>{customer.name.first} {customer.name.last}</td>
                                                <td>{customer.dob.age} Yrs.</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.location.city}</td>
                                            </tr>
                                        )
                                    })
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
export default Customers;
