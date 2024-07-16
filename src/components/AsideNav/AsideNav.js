import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './asideNav.css';

export default class AsideNav extends Component {
  
  render() {

    return (
      <aside className={`bg-primary ${this.props.openMenu ? 'close' :''}`}>
        <nav className="navbar py-3 d-flex justify-content-center mb-5">
          <NavLink className="navbar-brand text-white m-0" to="/"><h4 className="mb-0 fw-bold"><i className="fa-brands fa-react me-3"></i>Application</h4></NavLink>
        </nav>

        <ul className="nav flex-column ps-3">
          {this.props.navData.map(data => {
            return <li className="nav-item" key={data.id}>
              <NavLink className="nav-link text-capitalize text-white py-3" to={data.url}>
                <span><i className={`${data.icon} ms-2 me-3`}></i></span>
                <span>{data.title}</span>
              </NavLink>
            </li>
          })}
        </ul>
      </aside>

    )
  }
}
