import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeckCard from '../DeckCard/DeckCard';


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
        })
    }
        , [format])

  



    return (
        <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {formatList && formatList.map(deck => <DeckCard  key={deck.id} deck={deck} />)}
           
            <Card sx={{ width: 150, textAlign: 'center' }}>
                <CardActionArea onClick={() => history.push('/create/' + format )}>
                    {/* <CardMedia
                        component="img"
                        height="120"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                    <CardContent >
                        <Typography variant="h8" component="div">
                            Create New Deck
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </section>
    )
}

export default DecksPage;