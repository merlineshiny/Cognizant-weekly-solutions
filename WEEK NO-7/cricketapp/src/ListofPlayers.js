import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Kohli', score: 98 },
    { name: 'Dhoni', score: 70 },
    { name: 'Rohit', score: 65 },
    { name: 'Bumrah', score: 85 },
    { name: 'Jadeja', score: 66 },
    { name: 'Gill', score: 91 },
    { name: 'Iyer', score: 55 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Siraj', score: 75 },
    { name: 'Ashwin', score: 64 },
    { name: 'Shami', score: 80 }
  ];

  // Filter players with score <= 70
  const players70 = players.filter(item => item.score <= 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>

      <h2>Players with score ≤ 70</h2>
      <ul>
        {players70.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
