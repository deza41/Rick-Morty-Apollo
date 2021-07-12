import {useState} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import '../styles/search.css'

//can pass props and refer with props.onAdd etc
const Search = (props) => {

 const [text, setSearchItem] = useState('')


    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            props.searchList('')
        }
        //passes object back though
        props.searchList({text})

        //reset search
        //setSearchItem('')


    }


    return (

       
        <form className='search-form' onSubmit={onSubmit}>
            <Container>
                <Row>
                    <Col>
                    <input type='text' placeholder='Search' className="search5" value={text} onChange={(e)=> setSearchItem(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='submit' value='Submit' className="bn5"/>
                    </Col>

                </Row>
            </Container>
        </form>
    )
}

export default Search
