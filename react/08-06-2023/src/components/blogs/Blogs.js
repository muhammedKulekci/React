import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as blogActions from "../../redux/actions/blogActions";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

class Blogs extends Component {
  componentDidMount() {
    this.props.actions.getBlogs();
  }
  render() {
    console.log(this.props.blogs);
    return (
      <>
        <h2>{this.props.currentCategory.category}</h2>
        <Row>
          {this.props.blogs.map((blog) => (
            <Col xs="4">
              <Link to="/detail">
                <div
                  class="card"
                  style={{ width: "18rem;", marginBottom: "20px" }}
                >
                  <img
                    src={blog.image}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "200px" }}
                  />
                  <div
                    class="card-body"
                    style={{
                      maxHeight: "200px",
                      minHeight: "200px",
                    }}
                  >
                    <h4 style={{ color: "black", textDecoration: "none" }}>
                      {blog.name}
                    </h4>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    blogs: state.blogReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBlogs: bindActionCreators(blogActions.getBlogs, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
