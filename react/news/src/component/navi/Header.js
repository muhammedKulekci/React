import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
  export default class Header extends Component {
      
  render() {
    return (
        <div className='justify-content-center'>
        <Navbar color="warning" light expand="md" >
          <NavbarBrand href="/"><b>Achitecht News</b></NavbarBrand>
        </Navbar>
      </div>
    )
  }
}

