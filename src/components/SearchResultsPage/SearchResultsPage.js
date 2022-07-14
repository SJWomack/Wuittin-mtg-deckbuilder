import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

function SearchResultsPage() {
    const editMode = useSelector(store => store.deck.editDeckMode)
    const { searchTerm } = useParams();
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        axios.get(`api/scryfall/search/${searchTerm}`)
            .then((res) => {
                console.log('search success', res.data);
                setResults(res.data);
            })
            .catch((err) => {
                console.log('err in search', err);
                alert('Error Contacting Server, Please Try Again Later');
            })
    }, [])

    function addToDeck (card) {
        let type = new String(card.type_line);
        let cardType = type.split('—');
        console.log(cardType[0]);
        dispatch({
            type: 'ADD_TO_CURRENT_BUILD',
            payload: {name: card.name, id:card.id, type:cardType[0], quantity:1}
        });
        
        history.goBack();
    }

    function addToCardsToAdd (card) {
        let type = new String(card.type_line);
        let cardType = type.split('—');
        console.log(cardType[0]);
        dispatch({
            type: 'ADD_TO_CARDS_TO_ADD',
            payload: {name: card.name, id:card.id, type:cardType[0], quantity:1}
        });
        
        history.goBack();
    }

    return (
        <>
            <h2>Search Results:</h2>
            <ul>
                {results[0] && results.map(res =>

                    <li key={res.id}>
                      <Link to={`/details/${res.id}`}>{res.name}</Link>  
                     {!editMode? <Button size="small" variant='outlined' onClick={() => addToDeck(res)}>Add</Button>:
                     <Button size="small" variant='outlined' onClick={() => addToCardsToAdd(res)}>Add to Deck</Button>}
                    </li>
                )}
            </ul>
        </>
    )
}

export default SearchResultsPage