<script lang="ts">
  export let result: string;
  export let resetGame: () => void;
  import { fly } from "svelte/transition";
</script>




<div class="result-container" in:fly={{y: 200, duration: 2000}} out:fly={{y: 200, duration: 2000}}>
  <p>{result}</p>
  <button on:click={resetGame}>Play Again!</button>
</div>


