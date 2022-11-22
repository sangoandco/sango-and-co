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
    
    const obj = [
        {   id: 'num1',
            name: 'Platform Development',
            text: 'We will build a new platform for your business; placing your frontend, backend & database microservices into containers and serving them via a Kubernetes Infrastructure. Upon completion you will be given a system handover which will include complete documentation as well a system walkthrough. All clients are given xxx hours of further support to ease the handover.'
        },
        {   id: 'num2',
            name: 'Platrform Migration', 
            text: 'We will evaluate your existing website and assess what aspects can be migrated to the cloud. We may recommend that we refactor some code to ensure applications play together nicely. We will then containerise your codebase and place it onto a new Kubernetes infrastructure. '
        },
        {   id: 'num3',
            name: 'Platfoerm Consultation', 
            text: 'We will carry out an in depth analysis of your current infrastructure; detailing your strengths and areas for improvement. We will also provide suggestions on the best stack to use based upon your current platform and the intended direction of your business.'
        }        
    ];

    return (
        <div className="pb-1 pt-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100vh'}}>
          <div className="h-100">
            <br />
            
            <Container className="mt-4 mb-4">
            
            <h2 className="text-white">Our Services</h2>
            <br />

                <Row className="text-white">
                    {obj.map((item) => {

                        let i = obj.findIndex((e) => { return e.id === item.id});

                        return (
                            <Col  key={item.id} className='pl-5 pr-5' onClick={() => { setModal(true); setInjectModal(obj[i])} }>
                                <div>
                                    <h5 className="text-decoration-underline">{item.name}</h5>
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