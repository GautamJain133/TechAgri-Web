import React from 'react';
import Navbarhome from './Navbar';
import "../Styles/company.css"
import { Card } from 'react-bootstrap';

function Company(){

    return(
        <div>
        <Navbarhome/>
            <div className="d-flex flex-row align-items-center justify-content-center"/>
                <div className="d-flex justify-content-center align-items-center w-100 h-100 ps-lg-0 ps-sm-3 sec-bar p-4 ps-3 mb-4">
                        <input
                        className=" ps-md-3 ps-3 ms-5"
                        type="text"
                        placeholder="Search for crops"
                        />
                        <div className="btn btn-primary d-flex ms-3 align-items-center justify-content-center" style={{backgroundColor: "#B6E388", color:"black"}}>
                        SEARCH <div/>
                </div>
            </div>

            <div className='d-flex flex-row gap-2 flex-wrap justify-content-start align-items-start ms-5 me-5 mb-5'>
            <Card style={{ width: '15rem' }}>
                
            <Card.Body>
                <Card.Title>Farmer1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className="ms-0">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>

        </div>
        </div>
    )
}

export default Company;