import React,  {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/home.css'

//components
import Search from './../components/Search'
import DisplayList from '../components/DisplayList'
import CharacterInfo from '../components/CharacterInfo'



const GET_CHARACTERS_QUERY = gql`
query getCharList($page: Int, $search: String){
  characters(page: $page, filter: {name: $search}) {
    info{
      pages
      next
    }
    results{
      id
      name
  		image
      origin{
        type
        name
      }
      location{
        type
        name
      }
    	episode{
        id 
      }
    }
  }
}
`;

const Home = () => {

    //Hooks
    const [charSearch, setCharSearch] = useState('')
    const [selectedCharacter, setSelectedCharacter] = useState(0)
    
    const {data,loading,error,fetchMore} = useQuery(GET_CHARACTERS_QUERY,{
      variables:{page: 0, search: charSearch},
    },);

    //check for loading or error (db)
    if(loading){return <div id="loading"></div>};
    if(error){return <p>Error...</p>};

      //setters
      const searchList = (searchObj) => {
        setCharSearch(searchObj.text);
      }

     const getCharacterInfo = (characterObj) => {
      setSelectedCharacter(characterObj)
     }
     

    //output
    return(
      <Container fluid>
        <div id="loading"></div>
        <div id='searchBar'><Search searchList={searchList}/></div>
        <Row>
          <Col> 
            <div id="fixedContainerLeft">
              {data.length > 0 ? 'No Items': <DisplayList characters={data} charSearch={charSearch}  getCharacterInfo={getCharacterInfo}/>}
              <button onClick={() => {
                // const{ nextPage } = data.info
                // console.log(data.characters.info.next);
                if(data.characters.info.next !== null)
                {
                fetchMore({
                  variables: {
                    page: data.characters.info.next,
                    search: charSearch,
                  },
                  updateQuery: (prevResult, {fetchMoreResult}) =>
                  {
                    // console.log(prevResult);
                    // console.log(fetchMoreResult);

                    // fetchMoreResult.characters.results = [
                    //   ...prevResult.characters.results,
                    //   ...fetchMoreResult.characters.results
                    // ];
                    return fetchMoreResult;
                  }
                });
              }
              else{
                alert('No more Results')
              }
              }}>Load More</button>
          </div>
          </Col>
          <Col xs={6}> 
          <div id="fixedContainerRight">
          {selectedCharacter ?  <CharacterInfo characters={data} characterID={selectedCharacter}/> : <h1 id="notSelected">Nothing Selected</h1>}
          </div>
          </Col >
        </Row>
      </Container>



    
  
      
    )
};







export default Home;
