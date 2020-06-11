const games = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

// const gameBoard = document.createElement('section');
// let gameN = 0;

// for (let game of warriorsGames) {
// 	// selectors
// 	gameN += 1;
// 	const { homeTeam, awayTeam } = game;
// 	const { team: ht, points: hp, isWinner: hr } = homeTeam;
// 	const { team: at, points: ap, isWinner: ar } = awayTeam;
// 	const gameScore = document.createElement('div');
// 	let score;
// 	if (hp > ap) {
// 		score = `<b>${ht} ${hp}</b> - ${ap} ${at}`;
// 	} else {
// 		score = `${ht} ${hp} - <b>${ap} ${at}</b>`;
// 	}

// 	if (ht === 'Golden State' || at === 'Golden State') {
// 		if (hr === true) {
// 			gameScore.classList.add('win');
// 		} else if (hr === false) {
// 			gameScore.classList.add('loss');
// 		}
// 	}

// 	gameScore.innerHTML = `GAME ${gameN} ${score}`;
// 	gameBoard.append(gameScore);

// 	// functions
// }

// document.body.append(gameBoard);

// if (ht === 'Golden State' || at === 'Golden State') {
// 	if (hr === true) {
// 		gameScore.classList.add('win');
// 	} else if (hr === false) {
// 		gameScore.classList.add('loss');
// 	}
// }

const isWinner = ({ homeTeam, awayTeam }, team) => {
	const target = homeTeam.team === team ? homeTeam : awayTeam;
	return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: ht, points: hp, isWinner: hr } = homeTeam;
	const { team: at, points: ap, isWinner: ar } = awayTeam;

	let score;
	if (hp > ap) {
		score = `<b>${ht} ${hp}</b> - ${ap} ${at}`;
	} else {
		score = `${ht} ${hp} - <b>${ap} ${at}</b>`;
	}
	return `${score}`;
};

const chart = (games, team) => {
	const gameBoard = document.createElement('section');

	for (let game of games) {
		const gameScore = document.createElement('div');
		gameScore.innerHTML = getScoreLine(game);
		gameScore.classList.add(isWinner(game, team) ? 'win' : 'loss');
		gameBoard.append(gameScore);
	}
	return gameBoard;
};

const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');

const chart1 = chart(games, 'Golden State');
gsSection.append(chart1);

const chart2 = chart(games, 'Houston');
hrSection.append(chart2);
