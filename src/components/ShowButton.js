import { Button } from 'react-bootstrap';

const ShowButton = ({character, getCharacterInfo}) => {
    
    const id = character.id

    return(
    <Button variant="secondary" onClick={() => getCharacterInfo(id)} >{character.episode.length}</Button>
    )
}

export default ShowButton