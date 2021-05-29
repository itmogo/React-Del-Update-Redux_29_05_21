import React, { Component } from "react";
import { Form, Button } from "react-bootstrap"; 
import { connect} from 'react-redux';
import { updateUserAction } from '../actions/userActions';

    class EditUserForm extends Component {
      //create state to collect date

      constructor(props) {
        super(props);
        this.state = {
          name: props.userInfo.name,
          email: props.userInfo.email,
          gen: props.userInfo.gen,          
          month: props.userInfo.month,
          year: props.userInfo.year,
          id: props.userInfo.id
        };
      }

      // handle funcrion
      handleChange = (e) => {
        e.preventDefault();
        //set state to update form
        this.setState({
          [e.target.name]: e.target.value,
        });

        //check on console to verify
      };
      //create a submit handle funciotn to take event
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateUserAction(this.state.id, this.state)
      // this.props.editUser(this.state.id, this.state)
        //this.props.addUser(this.state);
        //set form to empty fields
        this.setState({
          name: "",
          email: "",
          gen: "",
         // id:"",
          month: "",
          year: ""

        });
          //this close the modal after updating user
          this.props.closeModal();

      };

      render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicGen">
              <Form.Label>Gen</Form.Label>
              <Form.Control
                type="number"
                placeholder="Gen"
                name="gen"
                value={this.state.gen}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicGen">
          <Form.Label>Month</Form.Label>
          <Form.Control
            type="text"
            placeholder="month"
            name="month"
            value = {this.state.month}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicGen">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Year"
            name="year"
            value = {this.state.year}
            onChange={this.handleChange}
          />
        </Form.Group>

            <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        );
      }
    }

    let mapDispatchToProps = {
      updateUserAction,
    };

    let mapStateToProps = () => {};
    
export default  connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
