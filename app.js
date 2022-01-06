const team={
    _players:[
        {firstName: 'Mykell',lastName:"Codes",age:25},
        {firstName: 'Anthony',lastName:"Codes",age:20},
        {firstName: 'Mandy',lastName:"Brown",age:22}
    ],
    _games:[
        {opponent: 'Chelsea', teamPoints: 33, opponentPoints: 12},
        {opponent: 'Spur', teamPoints: 5, opponentPoints: 29},
        {opponent: 'Man City', teamPoints: 27, opponentPoints: 30}
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName, lastName, age){
        let player ={
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(oppName, points, oppPoints){
        const game = {
            opponent:oppName,
            points:points,
            opponentPoints: oppPoints
        }
        this.games.push(game);

    }
};

team.addPlayer('Steph', 'Curry', 28); 
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 78);

console.log(team.players)


team.addGame('Millan', 14, 31);
team.addGame('Lakers', 55, 32);
team.addGame('Magrid', 22, 19);

console.log(team.games)