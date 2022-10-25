import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, forwardRef, useImperativeHandle} from 'react'
import Badge from 'react-bootstrap/Badge';

const NavScrollExample = forwardRef((props, ref) => {

  const [num, setNum] = useState(0);

  useImperativeHandle(ref, ()=>({
    addToCart (){
      setNum(num + 1);
    }
  }) )



  // const addToCart =()=>{
  //   setNum(num + 1)
  // }
 


  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">OneStop  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Saved</Nav.Link>
            <Nav.Link href="#action2">Sell</Nav.Link>
            <NavDropdown title="My Onestop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Recently Viewed</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                My Onestop Summary
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Purchase History
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop by category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Clothes and Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Sports
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Toys
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Health & Beauty
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#action1">My Cart <Badge bg="danger">{num}</Badge>  </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
})

export default NavScrollExample;