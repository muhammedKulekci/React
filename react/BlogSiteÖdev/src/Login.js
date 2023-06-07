import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import alertify from "alertifyjs";
import axios from "axios";

export default class Login extends Component {
  state = {
    profiles: [],
    mail: "",
    password: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/profiles")
      .then((res) => this.setState({ profiles: res.data.profiles }));
  }

  onChangeMail = (event) => {
    let value = event.target.value;
    this.setState({
      mail: value,
    });
  };

  onChangePassword = (event) => {
    let value = event.target.value;
    this.setState({
      password: value,
    });
  };

  login = (event) => {
    event.preventDefault();

    const { mail, password, profiles } = this.state;
    const foundProfile = profiles.find(
      (profile) => profile.mail === mail && profile.password === password
    );

    if (foundProfile) {
      alertify.success(mail + " Login Successful", 2);
    } else {
      alertify.error("Invalid username or password", 2);
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/profiles")
      .then((res) => this.setState({ profiles: res.data }));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="4"></Col>
          <Col xs="4">
            <Card style={{ marginTop: "50px" }}>
              <CardHeader>
                <h2>Login</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="user@gmail.com"
                      onChange={this.onChangeMail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="user"
                      onChange={this.onChangePassword}
                    />
                  </FormGroup>
                  <Button onClick={this.login}>Login</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
