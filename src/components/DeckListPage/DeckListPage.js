import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function DeckListPage() {
    const dispatch = useDispatch();
    const cards = useSelector((store) => store.deck.deckBuildList)
    const cardList = Object.values(cards);
    const { id } = useParams();


    useEffect(() => {
        dispatch({
            type: 'FETCH_CARDS_IN_DECK',
            payload: { id }
        })
    }, [id])



    return (
        <main>
            <h3>Creature</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Creature')) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)
            })}</ul>

            <h3>Enchantment</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Enchantment') && (card.card_type).indexOf('Creature') === -1) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)
            })}</ul>

            <h3>Instant</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Instant') && (card.card_type).indexOf('Creature') === -1) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)
            })}</ul>

            <h3>Sorcery</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Sorcery') && (card.card_type).indexOf('Creature') === -1 && (card.card_type).indexOf('Instant') === -1) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)
            })}</ul>

            <h3>Artifact</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Artifact') && (card.card_type).indexOf('Creature') === -1 && (card.card_type).indexOf('Land') === -1) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)
            })}</ul>

            <h3>Planeswalker</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Planeswalker') && (card.card_type).indexOf('Creature') === -1) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)

            })}</ul>

            <h3>Land</h3>
            <ul>{cardList.map(card => {
                const cardsToRender = []
                if ((card.card_type).includes('Land') && (card.card_type).indexOf('Creature') === -1) {
                    cardsToRender.push(card)
                }
                return (<>
                    {cardsToRender.map(card => <li key={card.id}><span>{card.card_name}</span> x{card.quantity}</li>)}
                </>)
            })}</ul>
        </main>
    )

}


export default DeckListPage