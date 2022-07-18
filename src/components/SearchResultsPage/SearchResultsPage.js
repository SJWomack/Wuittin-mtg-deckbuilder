import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

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
        <div  >
            <h3 style={{ margin: 'auto', maxWidth: '95%', borderBottom: '5px solid black', marginBottom:'10px'}}>Search Results:  {searchTerm}</h3>
            <ul style={{listStyle:'none', margin: 'auto', maxWidth: '95%'}}>
                {results[0] && results.map(res =>

                    <li key={res.id} style={{marginBottom:'10px'}}>
                      <Button key={res.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${res.id}`)}>{res.name}</Button>
                     {!editMode? <Button size="small" sx={{color:'black'}} onClick={() => addToDeck(res)}><AddIcon/></Button>:
                     <Button size="small" sx={{color:'black'}} onClick={() => addToCardsToAdd(res)}><AddIcon/></Button>}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SearchResultsPage