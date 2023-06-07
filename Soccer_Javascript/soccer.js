const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// Coding Challenge #1
// 1. Create one player array for each team (variables 'players1' and 'players2')
let [players1, players2] = game.players;
console.log(players1, players2);
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) 
//create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
let [gk,...fieldPlayers ] = players1;
console.log(gk);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
let allPlayers=[...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
// containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
let players1Final= [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
let {team1, x:draw, team2} = game.odds;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to 
//the console, along with the number of goals that were scored in total (number of player names passed in)
let printGoals= function(...namez){
console.log(namez);
console.log(`${players.length} goals were scored`);
};
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
// WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 1 is more likely to win');
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// Coding Challenge #2

// 1. Loop over the game.scored array and print each player name to the console, along with 
// the goal number (Example: "Goal 1: Lewandowski")
for ([i, he] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${he}`);
}


// 2. Use a loop to calculate the average odd and log it to the console (We already studied 
// how to calculate averages, you can go check if you don't remember)
let avg=0;
for (const odds of Object.values(game.odds)){
  avg+=odds
}
avg/=Object.values(game.odds).length;
console.log(avg);


// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for(const [team,odd] of Object.entries(game.odds)){
  const teamStr = team ==='x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const arr= [... new Set(gameEvents.values())];

console.log(arr);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
// So remove this event from the game events log.
gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 
// minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or 
// second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL
