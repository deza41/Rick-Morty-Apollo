import React from 'react';
import ShowButton from './ShowButton'
import { Container, Row, Col, Media } from 'react-bootstrap';


const DisplayList = ({characters,getCharacterInfo}) => {


  let search = characters.characters.results

  // if(charSearch)
  // {
  //   search = characters.characters.results.filter(
  //     character => character.name === charSearch);

  //   console.log(search)
  // }

    //output
    return(

      <div>
        {search.map(character => (

            <div key={character.id} >
              <Container fluid>
              <Row>
              <Col xs={12} md={8}>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={character.image}
                  alt="Generic placeholder"
                />
                <Media.Body> 
                  <h3>{character.name}</h3>
                  <p>{character.location.name}</p>
                </Media.Body>
              </Media>
              </Col>
              <Col xs={6} md={4}>
                <ShowButton character={character} getCharacterInfo={getCharacterInfo} />
              </Col>
              </Row>
              </Container>
            </div>
        ))}

 

    </div>
    )
};



export default DisplayList;
