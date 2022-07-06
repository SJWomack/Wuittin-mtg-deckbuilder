import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DecksPage() {
    const formatList = useSelector(store => store.formatDecks);

    return (
        <section>
            {formatList.map(deck => <DeckCard deck={deck} />)}
        </section>
    )
}

export default DecksPage;