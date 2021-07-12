import {useState} from 'react'
import { Container} from 'react-bootstrap';
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
            <Container fluid>
                <div id='searchContainer'>
                    <input type='text' placeholder='Search' className="search5" value={text} onChange={(e)=> setSearchItem(e.target.value)}/>
                    <input type='submit' value='Submit' className="bn5"/>
                </div>
            </Container>
        </form>
    )
}

export default Search
