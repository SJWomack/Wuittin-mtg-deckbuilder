
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

function DeckManipulatePage() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  function createData(card, remove, quantity) {
    return { card, remove, quantity };
  }

  const rows = []

  function handleSearch() {
     history.push(`/results/${searchTerm}`)
     setSearchTerm('')
  }

  return (
    <>
      <form>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name Your deck!"
        />
      </form>

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
              <TableCell align="right">Remove</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Button variant="contained" size="medium">
        Save
      </Button>
      <Button variant="contained" size="medium" onClick= {() => history.goBack()}>
        Cancel
      </Button>
    </>
  )
}

export default DeckManipulatePage;