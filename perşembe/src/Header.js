import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/">Anasayfa</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/profiles">Profiles</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/contact">Contact</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/cardDetail">Card Detail</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                Sepetim - {this.props.card.length}
              </DropdownToggle>
              <DropdownMenu>
                {this.props.card.map((cardd) => (
                  <DropdownItem key={cardd.product.id}>
                    <span
                      className="badge badge-warning"
                      style={{
                        marginRight: "10px",
                        backgroundColor: "red",
                      }}
                      onClick={() => this.props.removeToCard(cardd.product)}
                    >
                      Sil
                    </span>
                    {cardd.product.productName}({cardd.quantity})
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
