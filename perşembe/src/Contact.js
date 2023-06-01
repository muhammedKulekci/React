import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";
// import multer from "multer";

export default class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dosya: null,
  //   };
  //   this.upload = multer({ dest: "./image" }).single("dosya");
  // }

  // handleDosyaSecimi = (event) => {
  //   this.setState({ dosya: event.target.files[0] });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.upload(event, null, (err) => {
  //     if (err) {
  //       console.log("Dosya yükleme hatası:", err);
  //     } else {
  //       console.log("Dosya başarıyla yüklendi!");
  //       // Yükleme tamamlandıktan sonra yapılacak işlemleri burada gerçekleştirebilirsiniz
  //     }
  //   });
  // };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Contact</h2>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={this.props.onChange}
            type="text"
            name="email"
            id="exampleEmail"
            value={this.props.email}
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input
            type="file"
            name="dosya"
            id="exampleFile"
            // onChange={this.handleDosyaSecimi}
          />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>

        <Button type="submit" onClick={this.props.onClick}>
          Submit
        </Button>
      </Form>
    );
  }
}
