import React from 'react';
import {gql, useQuery} from '@apollo/client';
import { Container, Row, Col,Image} from 'react-bootstrap';
//components
import Episodes from './Episodes'

const GET_CHARACTER_QUERY = gql`
query getChar($id: ID!){
  character(id: $id,) {
      id
      name
  		image
      status
      species
      type
      gender
      created
      origin{
        type
        name
        dimension
      }
      location{
        type
        name
        dimension
      }
    	episode{
        id
        name
        air_date
        
        
      }
    
  }
}
`;



const CharacterInfo = ({characterID}) => {

const {data,loading,error} = useQuery(GET_CHARACTER_QUERY,{
  variables:{id: characterID},
},);

    //check for loading or error (db)
    if(loading){return <p>Loading...</p>};
    if(error){return <p>Error...</p>};
  //grab user with ID
  // const filtered = data.characters.results.filter(
  //     filteredCharacter => filteredCharacter.id == characterID
  //   );

    console.log(data.character)
    const character = data.character


    return(
 
            <div key={data.id} >
              <Container>
                <br></br>
              <Row>
                <Col></Col>
                <Col><Image src={character.image} roundedCircle/></Col>
                <Col></Col>
              </Row>
              <Row>
              <div>
                
                <p><b>ID:</b> {character.id}</p>
                <p><b>Name:</b> {character.name}</p>
                <p><b>Status:</b> {character.status}</p>
                <p><b>Species:</b> {character.species}</p>
                <p><b>Type:</b> {character.type}</p>
                <p><b>Gender:</b> {character.gender}</p>
                <p><b>Created:</b> {character.created}</p>
                <br></br>
              </div> 
              </Row>
              <Row>
                <div>
                  <h3>Origin</h3>
                  <p><b>Type:</b> {character.origin.type}</p>
                  <p><b>Name:</b> {character.origin.name}</p>
                  <p><b>Dimension:</b> {character.origin.dimension}</p>
                   <br></br>
                </div>
              </Row>
              <Row>
                <div>
                  <h3>Location</h3>
                  <p><b>Type:</b> {character.location.type}</p>
                  <p><b>Name:</b> {character.location.name}</p>
                  <p><b>Dimension:</b> {character.location.dimension}</p>
                  <br></br>
              </div>
              </Row>

              <h3>Episodes</h3>
              <Episodes character={character} />
              </Container>
              
            </div>
    ) 
};



export default CharacterInfo;
