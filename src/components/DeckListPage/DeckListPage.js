import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams , Link} from 'react-router-dom'

function DeckListPage() {
    const dispatch = useDispatch();
    const cards = useSelector((store) => store.deck.deckBuildList)
    const cardList = Object.values(cards);
    const { id } = useParams();
    console.log(cardList)


    useEffect(() => {
        dispatch({
            type: 'FETCH_CARDS_IN_DECK',
            payload: { id }
        })
    }, [id])



    return (
        <>
            {cardList.length > 0?
                <main>

                    <h3>Creature</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Creature')) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Enchantment</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Enchantment') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Instant</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Instant') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card =><li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li> )}
                        </div>)
                    })}</ul>

                    <h3>Sorcery</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Sorcery') && (card.type).indexOf('Creature') === -1 && (card.type).indexOf('Instant') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Artifact</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Artifact') && (card.type).indexOf('Creature') === -1 && (card.type).indexOf('Land') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card =><li key={card.id}> <Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li>)}
                        </div>)
                    })}</ul>

                    <h3>Planeswalker</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Planeswalker') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li>)}
                        </div>)

                    })}</ul>

                    <h3>Land</h3>
                    <ul>{cardList.map(card => {
                        const cardsToRender = []
                        if ((card.type).includes('Land') && (card.type).indexOf('Creature') === -1) {
                            cardsToRender.push(card)
                        }
                        return (<div key={card.id}>
                            {cardsToRender.map(card => <li key={card.id}><Link to={`/details/${card.id}`}><span>{card.name}</span></Link> x{card.quantity}</li>)}
                        </div>)
                    })}</ul>

                </main> :
                <p>Loading</p>}
        </>
    )

}


export default DeckListPage