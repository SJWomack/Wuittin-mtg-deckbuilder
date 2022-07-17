import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import mtg9 from '../../images/mtg9.jpeg';
import mtg2 from '../../images/mtg2.jpeg';
import mtg3 from '../../images/mtg3.jpeg';
import mtg4 from '../../images/mtg4.jpeg';
import mtg5 from '../../images/mtg5.jpeg';
import mtg7 from '../../images/mtg7.jpeg';



//on click call saga to fetch decks with matching format and then routes to decks view
function FormatPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch({
            type:'CLEAR_FORMAT'
        })}, []
    )


    function handleClick(format) {

        history.push(`/decks/${format}`)
    }
    return (
        <>

            <Box sx={{ '& button': { m: 2 },  display: 'flex', flexDirection: 'column', flexWrap:'wrap', alignContent:'center' }}>
                <h1 >Choose A Format</h1>

                <Button sx={{border:'3px solid lightgrey', height: 70, backgroundImage: `url(${mtg2})`, color:'lightgrey'}} onClick={() => handleClick('standard')} variant="outlined" size="large" >
                    Standard
                </Button>
                <Button sx={{border:'3px solid lightgrey', height: 70, backgroundImage: `url(${mtg3})`, color:'lightgrey'}} onClick={() => handleClick('commander')} variant="outlined" size="large">
                    Commander
                </Button>
                <Button sx={{border:'3px solid lightgrey', height: 70, backgroundImage: `url(${mtg4})`, color:'lightgrey'}} onClick={() => handleClick('pauper')} variant="outlined" size="large">
                    Pauper
                </Button>
                <Button sx={{border:'3px solid lightgrey', height: 70, backgroundImage: `url(${mtg5})`, color:'lightgrey'}} onClick={() => handleClick('modern')} variant="outlined" size="large">
                    Modern
                </Button>
                <Button sx={{border:'3px solid lightgrey', height: 70, backgroundImage: `url(${mtg7})`, color:'lightgrey'}} onClick={() => handleClick('casual')} variant="outlined" size="large">
                    Casual
                </Button>
                <Button sx={{border:'3px solid lightgrey', height: 70, backgroundImage: `url(${mtg9})`, color:'lightgrey'}} onClick={() => handleClick('legacy')} variant="outlined" size="large">
                    Legacy
                </Button>
            </Box>

        </>
    );
}


export default FormatPage