import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('naveen');
  const [desc, setdesc] = useState('master student');
  return (
   <>
   <Navbar bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="#home">
                            <img
                            alt=""
                            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"   width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            My profile
                        </Navbar.Brand>
                        </Container>
                </Navbar>
           
            <card><Container  className='mt-5'>      
                    <Row >
                        <Col className=''>
                        <img
                            alt=""
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"   
                        height="80%"
                        width="75%"
                            className="d-inline-block align-top"
                            />
                        </Col>
                        <Col>
                            <h1>{name}</h1>
                            <p>
                              {desc}
                            </p>
                        </Col>  
                    </Row>
                </Container>
                </card>
                <br></br>
            
                <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter some Discription" />
                    </Form.Group>
             </Form>
             </Container>
   </>
  );
}

export default App;
