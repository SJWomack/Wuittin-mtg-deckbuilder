import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeckListQtyEdit from './components/DeckListQtyEdit';
import DeckListCardSearch from './components/DeckListCardSearch';

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
            {inEdit ?
                <div>
                    <h4>Search to Add New Cards!</h4>
                    <DeckListCardSearch id={id} />
                </div> :
                <h2>{deckData.deck_name}</h2>
            }
            {cardList.length > 0 ?
                <main>

                    <p>Cards in deck:{cardList.reduce((previousVal, item) => previousVal + item.quantity, 0)}</p>

                    <h3>Creature</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Creature')) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card =>
                                <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link>
                                    {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                        <Button onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CARD_FROM_DECK',
                                                payload: { id: card.id, deck_id: deckData.id }
                                            })
                                        }}>Remove</Button></span>}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Enchantment</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Enchantment') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                <Button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_CARD_FROM_DECK',
                                        payload: { id: card.id, deck_id: deckData.id }
                                    })
                                }}>Remove</Button></span>}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Instant</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Instant') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                <Button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_CARD_FROM_DECK',
                                        payload: { id: card.id, deck_id: deckData.id }
                                    })
                                }}>Remove</Button></span>}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Sorcery</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Sorcery') && (card.type).indexOf('Creature') === -1 && (card.type).indexOf('Instant') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                <Button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_CARD_FROM_DECK',
                                        payload: { id: card.id, deck_id: deckData.id }
                                    })
                                }}>Remove</Button></span>}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Artifact</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Artifact') && (card.type).indexOf('Creature') === -1 && (card.type).indexOf('Land') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}> <Link to={`/details/${card.id}`}><span>{card.name}</span></Link> {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                <Button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_CARD_FROM_DECK',
                                        payload: { id: card.id, deck_id: deckData.id }
                                    })
                                }}>Remove</Button></span>}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Planeswalker</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Planeswalker') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                <Button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_CARD_FROM_DECK',
                                        payload: { id: card.id, deck_id: deckData.id }
                                    })
                                }}>Remove</Button></span>}</li>)}
                        </div>)

                    })}</ul>

                    <h3>Land</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Land') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> {!inEdit ? <> x{card.quantity}</> : <span> <DeckListQtyEdit card={card} listType={'currentCards'} />
                                <Button onClick={() => {
                                    dispatch({
                                        type: 'DELETE_CARD_FROM_DECK',
                                        payload: { id: card.id, deck_id: deckData.id }
                                    })
                                }}>Remove</Button></span>}</li>)}
                        </div>)
                    })}</ul>

                </main> :
                <p>No cards here!</p>}

            {inEdit && cardsAdded[0] &&
                <div>
                    <h4>Cards Being Added</h4>
                    <ul>
                        {
                            cardsAdded.map((card) =>
                                <li key={card.id}>{card.name}: <DeckListQtyEdit card={card} listType='cardsToAdd' /> <Button onClick={() => dispatch({ type: "DELETE_CARD_TO_ADD", payload: { id: card.id } })}> Remove </Button></li>
                            )}




                    </ul>
                </div>}

            <Button onClick={() => { history.goBack() }} variant="contained" size="medium"> Back</Button>
            {!inEdit ? <Button variant="contained" size="medium" onClick={() => dispatch({ type: 'SET_EDIT_MODE' })}> Edit Deck</Button> :
                <>
                    <Button variant='contained' size='medium' onClick={() => {
                        dispatch({ type: 'LEAVE_EDIT_MODE' });
                    }}>
                        Save
                    </Button>
                    <Button variant="contained" size="medium" onClick={() => {
                        dispatch({ type: 'DELETE_DECK', payload: { id } });

                        history.push('/decks/')
                    }}>Delete Deck</Button>
                </>}

        </>
    )

}


export default DeckListPage