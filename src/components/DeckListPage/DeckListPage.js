import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeckListQtyEdit from './components/DeckListQtyEdit';
import DeckListCardSearch from './components/DeckListCardSearch';
import ClearIcon from '@mui/icons-material/Clear';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


function DeckListPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const format = useSelector(store => store.format)
    const inEdit = useSelector(store => store.deck.editDeckMode)
    const cards = useSelector((store) => store.deck.deckBuildList)
    const deckData = useSelector((store) => store.deck.workingDeckData)
    const cardsToAdd = useSelector(store => store.deck.cardsToAdd);
    const cardsAdded = Object.values(cardsToAdd);
    const cardList = Object.values(cards);
    const { id } = useParams();
    console.log(cardList);
    console.log(cardsAdded);


    useEffect(() => {
        dispatch({
            type: 'FETCH_CARDS_IN_DECK',
            payload: { id }
        })
        dispatch({
            type: 'FETCH_DECK_DATA',
            payload: { id }
        })

    }, [id])



    return (
        <>

            <h1 style={{ width: 'fit-content', margin: '0 auto', textTransform: 'uppercase', borderBottom: '2px solid black', marginBottom: '25px', textAlign: 'center' }}>{deckData.deck_name}</h1>

            {cardList.length > 0 ?
                <main style={{ marginLeft: '20px' }} >

                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Creature</h3>

                        </AccordionSummary>
                        <AccordionDetails sx={{ paddingLeft: '5px' }}>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Creature')) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{ paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Enchantment</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Enchantment') && (card.type).indexOf('Creature') === -1) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{ paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Instant</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Instant') && (card.type).indexOf('Creature') === -1) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{ paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Sorcery</h3>
                        </AccordionSummary>


                        <AccordionDetails>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Sorcery') && (card.type).indexOf('Creature') === -1 && (card.type).indexOf('Instant') === -1) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{ paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Artifact</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Artifact') && (card.type).indexOf('Creature') === -1 && (card.type).indexOf('Land') === -1) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{ paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Planeswalker</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Planeswalker') && (card.type).indexOf('Creature') === -1) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{ paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>


                    <Accordion sx={{ minWidth: '315px', maxWidth: '350px', background: 'transparent', border: '1px solid #596e79' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h3 style={{ borderBottom: '2px ridge black', width: 'fit-content' }}>Land</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            {cardList.map(card => {
                                const cardsToRender = []
                                if ((card.type).includes('Land') && (card.type).indexOf('Creature') === -1) {
                                    cardsToRender.push(card)
                                }
                                return (<div key={card.id}>
                                    {cardsToRender.map(card => <div style={{paddingBottom:'5px', borderBottom: '1px solid black', margin: '5px' }}><Button key={card.id} variant='contained' sx={{ color: 'black', backgroundColor: '#dfd3c3', margin: 'auto' }} onClick={() => history.push(`/details/${card.id}`)}><Typography> {card.name} {!inEdit && `- ${card.quantity}`} </Typography> </Button> {inEdit && <div> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}><ClearIcon sx={{ color: 'black' }} /></Button></div>}</div>)
                                    }
                                </div>)
                            })}
                        </AccordionDetails>
                    </Accordion>
                    <div>

                        <h4>Deck Count:{cardList.reduce((previousVal, item) => previousVal + item.quantity, 0)}</h4>
                    </div>
                </main> :
                <p>No cards here!</p>
            }

            {
                inEdit && cardsAdded[0] &&
                <div>
                    <h4>Cards Being Added</h4>
                    <ul>
                        {
                            cardsAdded.map((card) =>
                                <li key={card.id}>{card.name}: <DeckListQtyEdit card={card} listType='cardsToAdd' /> <Button onClick={() => dispatch({ type: "DELETE_CARD_TO_ADD", payload: { id: card.id } })}> <ClearIcon sx={{ color: 'black' }} /> </Button></li>
                            )}




                    </ul>
                </div>
            }

            {/* <Button onClick={() => { history.goBack() }} variant="contained" size="medium"> Back</Button> */}
            {
                !inEdit ? <Button size="medium" variant='outlined' sx={{ outline: '1px solid #596e79', color: '#596e79', marginLeft: '12px' }} onClick={() => dispatch({ type: 'SET_EDIT_MODE' })}> Edit Deck</Button> :
                    <>
                        <div style={{width:'100%', paddingBottom:'5px', marginBottom: '25px', marginLeft: '10px', borderBottom:'2px double #596e79' }}>
                            <h4>Search to Add New Cards!</h4>
                            <DeckListCardSearch id={id} />
                        </div>
                        <Button size="medium" variant='outlined' sx={{ outline: '1px solid #596e79', color: '#596e79', marginLeft: '12px' }} onClick={() => {
                            dispatch({ type: 'LEAVE_EDIT_MODE' });
                            if (cardsAdded[0]) {
                                dispatch({ type: 'ADD_CARDS_TO_DECK', payload: { cardList: cardsAdded, id: deckData.id } });
                            }
                            dispatch({ type: 'CLEAR_CARDS_TO_ADD' })
                        }}>
                            Save
                        </Button>
                        <Button size="medium" variant='outlined' sx={{ outline: '1px solid #596e79', color: '#596e79', marginLeft: '174px' }} onClick={() => {
                            dispatch({ type: 'DELETE_DECK', payload: { id } });
                            dispatch({ type: 'LEAVE_EDIT_MODE' });
                            history.push('/decks/' + deckData.format_type)
                        }}>Delete Deck</Button>
                    </>
            }

        </>
    )

}


export default DeckListPage