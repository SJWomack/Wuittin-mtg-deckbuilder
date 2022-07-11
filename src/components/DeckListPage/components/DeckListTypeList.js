

function deckListTypeList({deckList, cardType}) {
    const cardsToRender = []
    deckList.map(card => {
        if( (deckList.card_type).includes(cardType)){
            cardsToRender.push(card)
        }
    })

    return (
        <>
        {cardsToRender.map(card => <li><span>{card.card_name}</span> x{card.quantity}</li>)}
        </>
    )
}

export default deckListTypeList;