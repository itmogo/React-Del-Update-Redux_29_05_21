import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import { Component } from "react";
import AddUserForm from './components/AddUserForm';

class App extends Component {

  constructor(props) {
    super(props);

    //create a state to hold data
    this.state = {// array to hold data - each user is an object
      users: [  ]
    }

  }

  // a method to add this new user to the users state in app js

  addNewUser = (user) => {
    user.id = Math.random().toString()
    this.setState({
        users: [...this.state.users, user]
    })

}

// delete a user info
deleteUser = (id) =>{
  let undeletedUsers = this.state.users.filter(user => user.id !== id);
  this.setState({ users: undeletedUsers
  })
}

      editUser = (id, updatedUser) =>{
        this.setState({
          users: this.state.users.map(user => user.id ===id ? updatedUser : user)
        })
      }

  render() {
    return (
      <>
        <Container fluid style={{marginTop:"2rem", backgroundColor:  "lightgray"}}>
          <Row>
            <Col md="4"> 
            <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col md="8">{/*passing users state as a prop*/}
              
              <Users 
              usersData={this.state.users}
               deleteUser={this.deleteUser} 
                editUser={this.editUser} />
             </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
