import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Table from '../../components/Table/Table';

export class Statistic extends Component {
  render() {
    return (
        <div className="row py-5">
          <div className="col-12">
            <div className="col-12 text-center mb-4">
              <h1 className="mb-4 text-primary fw-bold">Statistic</h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-12">
            <div className="card">
            <div className="card-header text-primary fw-bold">Data Table With Crud</div>
            <div className="card-body">
            <div className="text-end">
                  <Link to="/adduser" className="btn btn-success my-4"><i className="fas fa-plus fa-fw me-2"></i>Add Record</Link>
                  </div>
          <Table tableData={this.props.tableData} updateList={this.props.updateList}/>
          </div>
          </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Statistic