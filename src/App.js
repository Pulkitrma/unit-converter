import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header'
import Converter from './Components/converter';     
function App() {
  return (
    <div className="App">
     <Container>
      <Row>
        <Col xs={6}>
          <Header/>
          <Converter/>
        </Col>
      </Row>
     </Container>
    </div>
  );
}

export default App;
