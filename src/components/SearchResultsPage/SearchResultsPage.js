import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

function SearchResultsPage() {
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

    return (
        <>
            <h2>Search Results:</h2>
            <ul>
                {results[0] && results.map(res =>

                    <li key={res.id}>
                        {res.name}
                        <Button size="small" variant='outlined' onClick={() => addToDeck(res)}>Add</Button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default SearchResultsPage