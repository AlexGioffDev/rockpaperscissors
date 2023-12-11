<script lang="ts">
    import {fly} from 'svelte/transition'
	import Icon from '@iconify/svelte';

	let gameOver: boolean = false;
	let userChoice: 'rock' | 'paper' | 'scissors'| '' = '';
	let computerChoice: 'rock' | 'paper' | 'scissors' | '' = '';
	let result = '';
	const choices: ('rock' | 'paper' | 'scissors')[] = ['rock', 'paper', 'scissors'];
	const icons = {
		rock: 'fa-regular:hand-rock',
		paper: 'fa6-regular:hand',
		scissors: 'fa6-regular:hand-scissors'
	};

	const onClicked = (choice: 'rock' | 'paper' | 'scissors') => {
		userChoice = choice;
		computerChoice = choices[Math.floor(Math.random() * choices.length)];
		result = compareChoices(userChoice, computerChoice);
		gameOver = true;
	};

	const resetGame = () => {
		gameOver = false;
		computerChoice = '';
		userChoice = '';
	};

	const compareChoices = (
		user: 'rock' | 'paper' | 'scissors',
		computer: 'rock' | 'paper' | 'scissors'
	) => {
		if (user === computer) {
			return 'Pareggio!';
		}
		if (
			(user === 'rock' && computer === 'scissors') ||
			(user === 'paper' && computer === 'rock') ||
			(user === 'scissors' && computer === 'paper')
		) {
			return 'Hai vinto!';
		}
		return 'Hai perso!';
	};
</script>

<div class="game-container">
	<div class="pc-container">
        <div class="card-pc">
            <Icon icon={icons.rock} class={computerChoice === 'rock' ? 'choiced' : 'gray'} />
        </div>
		<div class="card-pc">
            <Icon icon={icons.paper} class={computerChoice === 'paper' ? 'choiced' : 'gray'} />
        </div>
		<div class="card-pc">
		    <Icon icon={icons.scissors} class={computerChoice === 'scissors' ? 'choiced' : 'gray'} />
        </div>
	</div>
	<div>VS</div>
	<div class="user-container">
		<button class={`user-card ${userChoice === 'rock' ? 'user-choiced' : ''}`} disabled={gameOver} on:click={() => onClicked('rock')}
			><Icon icon="fa-regular:hand-rock" /></button
		>
		<button class={`user-card ${userChoice === 'paper' ? 'user-choiced' : ''}`} disabled={gameOver} on:click={() => onClicked('paper')}
			><Icon icon="fa6-regular:hand" /></button
		>
		<button class={`user-card ${userChoice === 'scissors' ? 'user-choiced' : ''}`} disabled={gameOver} on:click={() => onClicked('scissors')}
			><Icon icon="fa6-regular:hand-scissors" /></button
		>
	</div>
</div>
{#if gameOver}
    <div class="result-container" in:fly={{y:200, duration:2000}} out:fly={{y:200}}>
        <p>{result}</p>
        <button on:click={resetGame}>play again!</button>
    </div>  
{/if}
