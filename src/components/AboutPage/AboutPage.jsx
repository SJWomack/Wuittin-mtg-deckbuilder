import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>Technologies Used</h3>
        <p>JavaScript, React, Redux, Sagas, Express, Node, Scryfall API</p>
      </div>
      <div>
        <h3>What Next?</h3>
        <p>Intelligent search result filtering.</p>
        <p>Ability to share decks with other users within the application.</p>
      </div>
      <div>
        <h3>Thanks To:</h3>
        <p>Prime, Edan, the Gaiman Cohort, my parents.</p>
      </div>
    </div>
  );
}

export default AboutPage;
