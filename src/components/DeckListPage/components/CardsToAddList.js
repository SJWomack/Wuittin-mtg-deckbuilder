import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'

function CardsToAddList ({cardsToAdd}){
    const dispatch = useDispatch();

    return (
        <ul>
            {cardsToAdd.map(cards => <li>{cards.name} <Button onClick={dispatch({type:'DELETE_CARD', payload:{id:cards.id}})}>Remove</Button></li>)}
        </ul>
    )
}

export default CardsToAddList;