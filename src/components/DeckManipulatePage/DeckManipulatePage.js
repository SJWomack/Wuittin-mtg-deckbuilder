
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeckManipulatePageQtyPicker from './components/DeckManipulatePageQtyPicker';
import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';


function DeckManipulatePage() {
  const history = useHistory();
  const { format } = useParams();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [deckName, setDeckName] = useState('');
  const [isNamed, setIsNamed] = useState(false)


  const cards = useSelector((store) => store.deckBuild)
  const cardProperty = Object.values(cards);
  console.log(cardProperty)

  function handleSearch() {
    history.push(`/results/${searchTerm}`)
    setSearchTerm('')
  }

  function handleDeckCreation(evt) {
    if (deckName) {
      dispatch({
        type: 'CREATE_DECK',
        payload: { deckName, format }
      });
      setIsNamed(true);
    }
    else{
      alert('Please enter a name for your deck!');
      return;
    }


  }

  return (
    <>
      {!isNamed ? <form>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={deckName}
          onChange={event => setDeckName(event.target.value)}
        />
        <Button onClick={handleDeckCreation} variant="contained" size="medium">Submit</Button>
      </form> :

        <h3>{deckName}</h3>}

      {isNamed && <div>
        <form>
          <TextField
            required
            id="outlined-required"
            label="Required"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}

          />
          <Button onClick={handleSearch} variant="contained" size="medium">
            Search
          </Button>
        </form>

        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cards</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cardProperty.map((card) => (
                <TableRow
                  key={card.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={'/details/' + card.id}> {card.name} </Link>
                  </TableCell>
                  <TableCell align="right"><Button><DeckManipulatePageQtyPicker card={card} /></Button></TableCell>
                  <TableCell align="right"><Button onClick={() => { dispatch({ type: 'DELETE_CARD', payload: card }) }}>remove</Button></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <Button variant="contained" size="medium">
          Save
        </Button>
        <Button variant="contained" size="medium"
          onClick={() => {
            dispatch({ type: 'CLEAR_DECK_BUILD' });
            history.goBack();
          }}>
          Cancel
        </Button>
      </div>}
    </>
  )
}

export default DeckManipulatePage;