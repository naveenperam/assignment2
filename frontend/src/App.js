
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';




function App() {
  const [name, setName] = useState('Your Name');
  const [desc, setdesc] = useState('This is the description by default. And If you change the name and description , Note that it changes in profile also. ');
  const [adata, setdata] = useState("");
  useEffect(()=>{

  
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '6',
      max_imdb: '7.8',
      genre: 'action',
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'ee921ddf4cmsh9b2135852594036p16ce11jsn64edbf02c94f',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };

axios.request(options).then(function (response) {
	console.log(response.data);
  setdata(response.data);

}).catch(function (error) {
	console.error(error);
});

},[])
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
        
          <Card >
           <Container  className='mt-5'>      
                    <Row >
                        <Col md={{ span: 4}} >
                        <img
                            alt=""
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"   
                        height="90%"
                        width="50%"
                            className="d-inline-block align-top"
                            />
                        </Col>
                        <Col md={{ span: 8}}>
                            <h1>{name}</h1>
                            <p>
                              {desc}
                            </p>
                        </Col>  
                    </Row>
                    
                </Container>
                </Card>
                <br></br>

                <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Name</b></Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Description</b></Form.Label>
                        <Form.Control type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Enter some Discription" />
                    </Form.Group>
             </Form>
             </Container>     
             <div>
              <br></br>
              <br></br><br></br>
              <h2 align='center'>
                  <b>THE DATA FROM OTT DETAILS API DOCCUMENTATION</b>
              </h2>
              <br></br>
             </div>
      {adata ? adata.results.map(data => 
        <div>
      <Card>
      <Card.Header as="h5">Title:  {data.title}</Card.Header>
      <Card.Body>
        <Card.Title>
          Genre: {data.genre}
        </Card.Title>
        <Card.Text>
        <b>synopsis: </b>{data.synopsis}
        <br></br>
        <b>Type: </b>{data.type}
        <br></br>
       <b> Released: </b>{data.released}
        </Card.Text> 
      </Card.Body>
    </Card>
    <br></br>
    <br></br>
        </div>
        ):null}
   </>
  );
}

export default App;
