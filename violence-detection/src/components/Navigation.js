import React from "react"
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap"

export default function Navigation()
{

    return (
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-0">
            <Container>
        <Navbar.Brand href="#home" style={{fontSize: "30px", fontFamily:"Cursive"}}>Violence Detection</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           
          <Nav className="justify-content-end " style={{ width: "100%" ,fontSize:"20px"}} >
            <Nav.Link href="#features  "  >Home</Nav.Link>
            <Nav.Link href="#pricing ">Live Camera</Nav.Link>
            <Nav.Link href="#deets " >See logs</Nav.Link>
          </Nav>
         
        
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
}
