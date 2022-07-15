import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardDetailsPage() {
    const [details, setDetails] = useState({})
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        axios.get(`api/scryfall/details/${id}`)
            .then((res) => {
                console.log('search success', res.data);
                setDetails(res.data);
            })
            .catch((err) => {
                console.log('err in search', err);
                alert('Error Contacting Server, Please Try Again Later');
            })
    }, [])
    return (<>
        {details.name ?
            <Card sx={{margin: 'auto',  maxWidth: 350 }}>

                <CardMedia
                    component="img"
                    height="500"
                    image={details.image_uris.normal}
                    alt={details.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {details.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details.oracle_text}
                    </Typography>
                </CardContent>

            </Card> :
            <p>Loading...</p>}
            <button onClick={() => {history.goBack()}}>Back</button>
    </>)
}

export default CardDetailsPage;