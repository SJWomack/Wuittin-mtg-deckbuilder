import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import axios from 'axios';

function DeckListPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect( () => {
        dispatch({
            type: 'FETCH_CARDS_IN_DECK',
            payload: {id}
        })
    },[id])

    return (
        <main>
           <h3>Creature</h3>
           <ul></ul>

           <h3>Enchantment</h3>
           <ul></ul>

           <h3>Instant</h3>
           <ul></ul>

           <h3>Sorcery</h3>
           <ul></ul>

           <h3>Other</h3>
           <ul></ul>

           <h3>Land</h3>
           <ul></ul>
        </main>
    )

}


export default DeckListPage