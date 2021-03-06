import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeckCard from '../DeckCard/DeckCard';
import addImg from '../../images/plussign.png'


function DecksPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { format } = useParams();
    const formatList = useSelector(store => store.format);

    console.log(formatList)
    useEffect(() => {
        dispatch({
            type: 'FETCH_FORMAT_DECKS',
            payload: format
        });
        dispatch ({type:'CLEAR_CARDS_TO_ADD'});
        dispatch({ type:'LEAVE_EDIT_MODE'});
    }
        , [format])





    return (
        <>
        <h1 style={{width:'fit-content', margin:'auto', marginTop:'20px', marginBottom:'25px', textTransform:'capitalize', borderBottom:'3px solid black'}}>{format}</h1>
        <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {formatList && formatList.map(deck => <DeckCard key={deck.id} deck={deck} />)}

            <Card sx={{ backgroundColor: '#dfd3c3', marginBottom: 5, padding: 'auto', width: 150, textAlign: 'center'}}>
                <CardActionArea onClick={() => {
                    history.push('/create/' + format);

                    dispatch ({ type: 'CLEAR_DECK_BUILD' });
                    dispatch({ type: 'CLEAR_WORKING_DECK' });
                    dispatch({ type: 'LEAVE_EDIT_MODE' });

                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`${addImg}`}
                        alt="new deck"
                    />
                    <CardContent >
                        <Typography variant="h7" component="div">
                            Create New Deck
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </section>
        </>
    )
}

export default DecksPage;