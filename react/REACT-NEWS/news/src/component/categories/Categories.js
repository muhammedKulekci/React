import React, { Component } from "react";
import { List, ListInlineItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as articleActions from "../../redux/actions/articleActions";

class Categories extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getArticles(category.id);
  };

  render() {
    return (
      <center>
        <List type="inline">
          {this.props.categories.map((category) => (
            <ListInlineItem
              onClick={() => this.selectCategory(category)}
              key={category.id}
              active={category.id === this.props.currentCategory.id}
              style={{ margin: "10px" }}
            >
              <b>{category.name}</b>
            </ListInlineItem>
          ))}
        </List>
      </center>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
