<script lang="ts">
  import Icon from "@iconify/svelte";
  
  export let userChoice: string;
  export let value: 'rock' | 'paper' | 'scissors';
  export let icon: string;
  export let gameOver: boolean;

  export let onClicked: (value: 'rock' |'paper' | 'scissors') => void;


</script>


<button 
  class={`user-card ${userChoice === value ? 'user-choiced' : ''}`}
  disabled={gameOver}
  on:click={() => onClicked(value)}
>
  <Icon icon={icon} />
</button>
