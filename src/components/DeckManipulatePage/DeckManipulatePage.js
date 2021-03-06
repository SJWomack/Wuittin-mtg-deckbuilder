
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
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';


function DeckManipulatePage() {
  const workingDeck = useSelector(store => store.deck.workingDeckData)
  const history = useHistory();
  const { format } = useParams();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [deckName, setDeckName] = useState('');
  const [deckPic, setDeckPic] = useState('');
  const [isNamed, setIsNamed] = useState(false)


  const cards = useSelector((store) => store.deck.deckBuildList)
  const cardList = Object.values(cards);
  console.log(cardList)

  useEffect(() => {
    if (workingDeck.deck_name){
      setDeckName(workingDeck.deck_name);
      setIsNamed(true);
    }
    return
  },[])

  function handleSearch() {
    history.push(`/results/${searchTerm}`)
    setSearchTerm('')
  }

  function handleDeckCreation() {
    if (deckName) {
      dispatch({
        type: 'CREATE_DECK',
        payload: { deckName, format, deckPic }
      });
      setIsNamed(true);
    }
    else{
      alert('Please enter a name for your deck!');
      return;
    }
  }

  function addCards () {
    if (cardList[0]){
      dispatch({
        type: 'ADD_CARDS_TO_DECK',
        payload: {cardList, id:workingDeck.id}
      })
    }
    history.push(`/decklist/${workingDeck.id}`)

    
  }

  return (
    <>
      {!isNamed ? 
      
      <form style={{display:'flex', flexDirection:'column', width:'300px', margin:'auto', marginTop:'25px'}}>
        <h3>Deck Details</h3>
        <TextField
          required
          id="outlined-required"
          label="Deck Name"
          value={deckName}
          onChange={event => setDeckName(event.target.value)}
          sx={{marginBottom:'10px'}}
        />
         <TextField
          required
          id="outlined-required"
          label="Deck Img Url"
          value={deckPic}
          sx={{marginBottom:'10px'}}
          onChange={event => setDeckPic(event.target.value)}
        />
        
        
        <Button onClick={handleDeckCreation} variant="outlined" size="medium" sx={{display:'inline-flex' ,verticalAlign:'middle', color:'#596e79'}}>Submit</Button>
      </form> :

        <h1 style={{width:'fit-content', margin:'auto', marginBottom:'25px', borderBottom:'3px solid black'}}>{deckName}</h1>}

      {isNamed && <div>
        <form>
          <TextField
            required
            id="outlined-required"
            label="Search..."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}

          />
          <Button onClick={handleSearch} sx={{ outline: '1px solid #596e79', color: '#596e79', marginLeft: '25px' }} variant="outlined" size="medium">
            Search
          </Button>
        </form>

        <h3>Cards in deck:{cardList.reduce((previousVal, item) => previousVal + item.quantity, 0)}</h3>
        <TableContainer component={Paper}>
          <Table sx={{backgroundColor:'#dfd3c3'}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cards</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cardList.map((card) => (
                <TableRow
                  key={card.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={'/details/' + card.id}> {card.name} </Link>
                  </TableCell>
                  <TableCell align="right"><Button><DeckManipulatePageQtyPicker card={card} /></Button></TableCell>
                  <TableCell align="right"><Button onClick={() => { dispatch({ type: 'DELETE_CARD', payload: card }) }}><DeleteIcon sx={{color:'#596e79'}}/></Button></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <Button onClick={addCards} variant="outlined" sx={{color:'#596e79', margin:'10px'}} size="medium">
          Save
        </Button>
        <Button variant="outlined" sx={{color:'#596e79', margin:'10px'}} size="medium"
          onClick={() => {
            dispatch({ type: 'CLEAR_DECK_BUILD' });
            dispatch({ type: 'DELETE_DECK', payload: {id:workingDeck.id}})
            history.goBack();
          }}>
          Cancel
        </Button>
      </div>}
    </>
  )
}

export default DeckManipulatePage;