import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
    return (
      <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item as="li">
        <Nav.Link href="/Register">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item> */}
    </Nav>
    )
  }
  
  export default Header