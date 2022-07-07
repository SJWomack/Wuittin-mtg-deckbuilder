
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHistory } from "react-router-dom";


function DeckCard ({deck}) {
    const history = useHistory();

    return (
        <Card sx={{ padding: 'auto', maxWidth: 150, textAlign: 'center'}}>
          <CardActionArea onClick={() => history.push(`/decklist/${deck.id}`)}>
            <CardMedia
              component="img"
              height="120"
              image={deck.img}
              alt="deck img"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {deck.deck_name}
              </Typography>
            
            </CardContent>
          </CardActionArea>
        </Card>
      );
}


export default DeckCard;