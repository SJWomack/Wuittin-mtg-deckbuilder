import { useDispatch } from "react-redux";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function DeckListQtyEdit({ card , listType }) {
    const dispatch = useDispatch();
    console.log(listType)
    return (

        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 20, maxHeight: 50}}>
                <InputLabel id="demo-simple-select-standard-label">Qty</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={card.quantity}
                    onChange={(event) => {
                        listType === 'currentCards' ?
                            dispatch({
                                type: 'UPDATE_WORKING_QUANTITY',
                                payload: { id: card.id, cardCount: event.target.value }
                            }):
                            dispatch({
                                type:'UPDATE_ADD_QUANTITY',
                                payload: { id: card.id, cardCount: event.target.value }
                            })}
                        }
                label="Qty"
                >

                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={21}>21</MenuItem>
                <MenuItem value={22}>22</MenuItem>
                <MenuItem value={23}>23</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={25}>25</MenuItem>
            </Select>
        </FormControl>
        </>
    )
}

export default DeckListQtyEdit;