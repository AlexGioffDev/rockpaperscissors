export const compareChoices = (
	user: 'rock' | 'paper' | 'scissors',
	pc: 'rock' | 'paper' | 'scissors'
) => {
	if (user === pc) {
		return 'Draw!';
	}
	if (
		(user === 'rock' && pc === 'scissors') ||
		(user === 'paper' && pc === 'rock') ||
		(user === 'scissors' && pc === 'paper')
	) {
		return 'You Win!';
	}
	return 'You Lose!';
};
