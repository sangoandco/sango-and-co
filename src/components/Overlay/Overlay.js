import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import css from '../../images/css.png';
import javascript  from '../../images/javascript.png'
import html from '../../images/html.png';
import react from '../../images/react.png';
import typescript from '../../images/typescript.png';

function Overlay(props) {
  console.log('Overlay Test')
  console.log('Props: ', props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby={props.obj.id}
      centered
      animation={false}  
    >
      <Modal.Header closeButton>
        <Modal.Title id={props.obj.id}>
        {props.obj.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        {props.obj.text}
        </p>
        <Container>
          <Row className='pb-1'>
            <Col sm={1}>
            <img
              src={react}
              width="auto"
              height="42"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Col>
            <Col sm={11}>
              <h5>React</h5>
            </Col>
          </Row>

          <Row className='pb-1'>
            <Col sm={1}>
            <img
              src={javascript}
              width="auto"
              height="42"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Col>
            <Col sm={11}>
              <h5>JavaScript</h5>
            </Col>
          </Row>

          <Row className='pb-1'>
            <Col sm={1}>
            <img
              src={typescript}
              width="auto"
              height="42"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Col>
            <Col sm={11}>
              <h5>TypeScript</h5>
            </Col>
          </Row>

          <Row className='pb-1'>
            <Col sm={1}>
            <img
              src={html}
              width="auto"
              height="42"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Col>
            <Col sm={11}>
              <h5>HTML</h5>
            </Col>
          </Row>

          <Row className='pb-1'>
            <Col sm={1}>
            <img
              src={css}
              width="auto"
              height="42"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Col>
            <Col sm={11}>
              <h5>CSS</h5>
            </Col>
          </Row>

        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Overlay;