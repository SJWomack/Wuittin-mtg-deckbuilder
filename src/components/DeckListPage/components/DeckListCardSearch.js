import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function DeckListCardSearch ({id}) {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');
    function handleSearch() {
        history.push(`/results/${id}/${searchTerm}`)
        setSearchTerm('')
      }

    return (
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

    )
}

export default DeckListCardSearch;