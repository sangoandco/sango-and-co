import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Overlay from "./Overlay/Overlay.js";

function Technologies() {

    const [modal, setModal] = useState(false);
    const [injectModal, setInjectModal] = useState(
        {   id: '', 
            name: '', 
            text: ''
        })
    
    let obj = [
        {   id: 'num1',
            name: 'frontend',
            text: 'Your frontend is the part of your platform that faces the world, i.e client facing. This is usually in the form of a website or an app but it is important to know that this can be any other user interface.'
        },
        {   id: 'num2',
            name: 'backend', 
            text: 'Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend Backend .'
        },
        {   id: 'num3',
            name: 'infrastructure', 
            text: 'infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure infrastructure .'
        }        
    ];

    return (
        <div className="pb-1 pt-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100vh'}}>
          <div className="h-100">
            <br />
            
            <Container className="mt-4 mb-4">
                <Row className="text-white technology-container">
                    {obj.map((item) => {

                        let i = obj.findIndex((e) => { return e.id === item.id});

                        return (
                            <Col  key={item.id} className='pl-5 pr-5' onClick={() => (setModal(true), setInjectModal(obj[i])) }>
                                <div>
                                    <h5 className="text-decoration-underline">{item.title}</h5>
                                    <p>{item.text}</p>
                                    <Button variant="outline-light">More</Button>
                                </div>
                            </Col>  
                        )
                    })}
                </Row>
                <br/>
            </Container>

            <Overlay
                show={modal}    
                onHide={() => setModal(false)}
                obj={injectModal}
            />
        </div>
    </div>
    )
}

export default Technologies;