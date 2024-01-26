<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: string;
  export let computerChoice: string;
  export let value: string;
</script>


<div class="card-pc">
  <Icon icon={icon} class={computerChoice === value ? 'choiced' : 'gray' } />
</div>
