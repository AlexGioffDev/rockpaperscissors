<script lang="ts">
	import GameOver from '$lib/components/GameOver.svelte';
	import CardPc from '$lib/components/cards/CardPc.svelte';
	import CardUser from '$lib/components/cards/CardUser.svelte';
  
  import {compareChoices} from '$lib/utility/utility'

	let gameOver: boolean = false;
	let userChoice: 'rock' | 'paper' | 'scissors' | '' = '';
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

	</script>

<div class="game-container">
	<div class="pc-container">
		<p>PC</p>
		<div class="cards">
			<CardPc icon={icons.rock} value="rock" {computerChoice} />
			<CardPc icon={icons.paper} value="paper" {computerChoice} />
			<CardPc icon={icons.scissors} value="scissors" {computerChoice} />
		</div>
	</div>
	<div>VS</div>
	<div class="user-container">
		<div class="cards">
			<CardUser {userChoice} value="rock" icon={icons.rock} {gameOver} onClicked={onClicked} />
			<CardUser {userChoice} value="paper" icon={icons.paper} {gameOver} onClicked={onClicked} />
			<CardUser {userChoice} value="scissors" icon={icons.scissors} {gameOver} onClicked={onClicked} />
		</div>
		<p>USER</p>
	</div>
</div>
{#if gameOver}
	<GameOver {result} {resetGame} />
{/if}
