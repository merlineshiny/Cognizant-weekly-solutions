// App.js
import React from 'react';
import players, { OddPlayers, EvenPlayers, MergedPlayers } from './IndianPlayers';

function App() {
  const flag = false;

  return (
    <div>
      <h1>When Flag={flag.toString()}</h1>
      {!flag && (
        <>
          <OddPlayers players={players} />
          <EvenPlayers players={players} />
          <MergedPlayers />
        </>
      )}
    </div>
  );
}

export default App;
