import React, { Component } from 'react'

export class Table extends Component {
    render() {

        return (
            <table className="table table table-hover table-primary mb-0 rounded">
                <thead>
                    <tr>
                         <th scope="col">Index No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tableData.map((element) => {
                        const { id,name, username, email } = element;
                        return <tr key={id}>
                             <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td><a href="#" className="btn btn-warning me-2">Edit</a>
                            <button onClick={()=>{this.props.updateList(id)}} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

export default Table