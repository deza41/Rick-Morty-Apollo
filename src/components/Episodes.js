import React from 'react';
import { Container, Table } from 'react-bootstrap';


const Episodes = ({character}) => {



    return(
    
        <Container>
            {/* <Row >
                <Col><h5>ID: </h5>
                <ListGroup>
                    {character.episode.map(episode => (<ListGroup.Item>{episode.id}</ListGroup.Item>))}
                </ListGroup>
                </Col >
                <Col><h5>Name: </h5>
                <ListGroup>
                    {character.episode.map(episode => (<ListGroup.Item>{episode.name}</ListGroup.Item>))}
                </ListGroup>
                </Col>
                <Col><h5>Air Date: </h5>
                <ListGroup>
                    {character.episode.map(episode => (<ListGroup.Item>{episode.air_date}</ListGroup.Item>))}
                </ListGroup>
                </Col>
            </Row> */}

            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Air Date</th>
                    </tr>
                </thead>
                <tbody>
                {character.episode.map(episode => (
                <tr><td>{episode.id}</td>
                <td>{episode.name}</td>
                <td>{episode.air_date}</td></tr>
                ))}
                </tbody>
            </Table>
            

        </Container>
    )
};



export default Episodes;
