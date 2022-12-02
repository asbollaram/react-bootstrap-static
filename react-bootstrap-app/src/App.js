import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Bollaram Studio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/500"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/500"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <Container>
        {[
          'Primary',
          'Secondary',
          'Success',
          'Danger',
          'Warning',
          'Info',
          'Light',
          'Dark',
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <hr />
      <Container fluid className="bg-light py-5 my-2">
        <footer>
          <Row>
            <Col sm="4">
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-dark text-decoration-none"
              >
                Bollaram Studio
              </a>
              <p class="text-muted">© 2022</p>
            </Col>
            <Col sm={2}>
              <h5 className="py-2">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Home</li>
                <li className="nav-item mb-2">Features</li>
                <li className="nav-item mb-2">Pricing</li>
                <li className="nav-item mb-2">FAQs</li>
              </ul>
            </Col>
            <Col sm={2}>
              <h5 className="py-2">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Home</li>
                <li className="nav-item mb-2">Features</li>
                <li className="nav-item mb-2">Pricing</li>
                <li className="nav-item mb-2">FAQs</li>
              </ul>
            </Col>
            <Col sm={2}>
              <h5 className="py-2">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Home</li>
                <li className="nav-item mb-2">Features</li>
                <li className="nav-item mb-2">Pricing</li>
                <li className="nav-item mb-2">FAQs</li>
              </ul>
            </Col>
            <Col sm={2}>
              <h5 className="py-2">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">Home</li>
                <li className="nav-item mb-2">Features</li>
                <li className="nav-item mb-2">Pricing</li>
                <li className="nav-item mb-2">FAQs</li>
              </ul>
            </Col>
          </Row>
        </footer>
      </Container>
    </Container>
  );
}

export default App;
