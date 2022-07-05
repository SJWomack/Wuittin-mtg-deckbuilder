import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function FormatPage() {
    return (
        <>

            <Box sx={{ '& button': { m: 2 }, display: 'flex', flexDirection: 'column', flexWrap:'wrap', alignContent:'center' }}>
                <h1 >Choose A Format</h1>

                <Button variant="outlined" size="large">
                    Standard
                </Button>
                <Button variant="outlined" size="large">
                    Commander
                </Button>
                <Button variant="outlined" size="large">
                    Pauper
                </Button>
                <Button variant="outlined" size="large">
                    Modern
                </Button>
                <Button variant="outlined" size="large">
                    Casual
                </Button>
                <Button variant="outlined" size="large">
                    Legacy
                </Button>
            </Box>

        </>
    );
}


export default FormatPage