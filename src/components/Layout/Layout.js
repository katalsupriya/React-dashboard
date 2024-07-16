import React, { Component } from 'react'
import AsideNav from '../AsideNav/AsideNav'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export class Layout extends Component {
  render() {
    return (
<>
    <Header/>
    <AsideNav/>
   <Footer />
</>
    )
  }
}

export default Layout