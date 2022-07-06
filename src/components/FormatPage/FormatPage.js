import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'

//on click call saga to fetch decks with matching format and then routes to decks view
function FormatPage() {
    const dispatch = useDispatch();
    function handleClick(format) {
        dispatch({
            type:'FETCH_FORMAT_DECKS',
            payload: format
        })
        
    }
    return (
        <>

            <Box sx={{ '& button': { m: 2 },  display: 'flex', flexDirection: 'column', flexWrap:'wrap', alignContent:'center' }}>
                <h1 >Choose A Format</h1>

                <Button onClick={() => handleClick('standard')} variant="outlined" size="large">
                    Standard
                </Button>
                <Button  onClick={() => handleClick('commander')} variant="outlined" size="large">
                    Commander
                </Button>
                <Button  onClick={() => handleClick('pauper')} variant="outlined" size="large">
                    Pauper
                </Button>
                <Button onClick={() => handleClick('modern')} variant="outlined" size="large">
                    Modern
                </Button>
                <Button onClick={() => handleClick('casual')} variant="outlined" size="large">
                    Casual
                </Button>
                <Button onClick={() => handleClick('legacy')} variant="outlined" size="large">
                    Legacy
                </Button>
            </Box>

        </>
    );
}


export default FormatPage