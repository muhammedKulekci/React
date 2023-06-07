import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./Logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      categories: [],
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => this.setState({ categories: res.data }));
  }

  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img src={logo} style={{ width: "100px" }} />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Blogs</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/login">Login</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/addBlog">AddBlog</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  {this.state.categories.map((category) => (
                    <DropdownItem
                      key={category.categoryId}
                      active={
                        category.categoryName === this.props.currentCategory
                          ? true
                          : false
                      }
                      onClick={() => this.props.changeCategory(category)}
                    >
                      {category.categoryName}
                    </DropdownItem>
                  ))}
                  <DropdownItem>
                    <Link to="/addCategory">Add Category</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
