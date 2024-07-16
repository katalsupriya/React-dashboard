import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './header.css';

export class Header extends Component {
 
  render() {

    return (
      <header>
        <nav className="navbar shadow-sm bg-white py-3">
          <div className="container-fluid">
            <ul className="nav ms-auto">
              <li className="nav-item mx-2 position-relative d-flex">
                <div>
                  <form><input type="email" className="form-control shadow-sm" placeholder="Search" /></form>
                </div>
                <div className="nav-link p-2 text-dark bg-light shadow-sm rounded custom-dropdown">
                  <i className="fa-solid fa-magnifying-glass px-2 fa-lg"></i>
                </div>
              </li>
              <li className="nav-item mx-2 position-relative" onClick={this.props.handleNotification}>
                <div className="nav-link p-2 text-dark bg-light shadow-sm rounded position-relative custom-dropdown">
                  <i className="fa-solid fa-bell px-2 fa-lg"></i>
                  <i className="fa-solid fa-circle text-danger shadow-sm fa-circle-icon fa-lg me-2 fa-notification-icon"></i>
                </div>
                <div className={`custom-dropdown-menu shadow-sm rounded collapse bg-white mt-3 border position-absolute ${this.props.isNotification ? 'show' : ' '}`}>
                  <ul className="list-unstyled">
                  {this.props.notificationArr.map(message =>{
                  return  <li key={message.id}>
                      <Link className="nav-link text-dark border-bottom px-4 d-flex" to={message.url}>
                        <span> <i className="fa-solid fa-circle text-danger shadow-sm fa-circle-icon fa-notification-list me-3"></i></span>
                        <span className="small d-flex flex-column"><span className="fw-bold">{message.title}</span>{message.message}</span>
                      </Link>
                    </li>
                  })
                  }
                  </ul>
                </div>
              </li>
              <li className={`nav-item mx-2 position-relative`} onClick={this.props.handleDropdown}>
                <div className="nav-link p-2 text-dark bg-light shadow-sm rounded position-relative custom-dropdown">
                  <i className="fa-solid fa-user px-2 fa-lg"></i>
                </div>
                <div className={`custom-dropdown-menu shadow-sm rounded bg-white mt-3 border position-absolute collapse ${this.props.menu ? 'show' : ' '}`}>
                  <ul className="list-unstyled">
                    <li>
                      <a className="nav-link text-dark px-4" href="#">
                        <span><i className="fa-solid fa-user me-3"></i></span>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link text-dark px-4" href="#">
                        <span><i className="fa-solid fa-gear me-3"></i></span>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="nav-link text-dark px-4" href="#">
                        <span><i className="fa-solid fa-right-from-bracket me-3"></i></span>
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item mx-2">
                <div className="nav-link p-2 text-dark bg-light shadow-sm rounded" onClick={this.props.handleSideBar}><i className="fa-solid fa-bars px-2 fa-lg"></i></div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header