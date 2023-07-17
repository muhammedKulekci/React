import React, { Component } from "react";
import { Navbar, NavbarBrand, List, ListInlineItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as articleActions from "../../redux/actions/articleActions";

class Header extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getArticles(category.id);
  };

  render() {
    return (
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">
          <b>Achitecht News</b>
        </NavbarBrand>

        <NavbarBrand>
          <List type="inline">
            {this.props.categories.map((category) => (
              <ListInlineItem
                onClick={() => this.selectCategory(category)}
                key={category.id}
                style={{ margin: "10px", marginTop: "30px" }}
              >
                <h5>
                  <b>{category.name}</b>
                </h5>
              </ListInlineItem>
            ))}
          </List>
        </NavbarBrand>
        <NavbarBrand href="/savearticle">
          <b>Add News </b>
        </NavbarBrand>
      </Navbar>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getArticles: bindActionCreators(articleActions.getArticles, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
